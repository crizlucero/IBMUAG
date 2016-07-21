package com.knowitive.redefer.controller;

import java.io.BufferedReader;
import java.io.ByteArrayInputStream;
import java.io.File;
import java.io.IOException;
import java.io.InputStreamReader;
import java.io.StringWriter;
import java.net.MalformedURLException;
import java.net.URL;
import java.net.URLConnection;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.xml.transform.Source;
import javax.xml.transform.Transformer;
import javax.xml.transform.TransformerFactory;
import javax.xml.transform.URIResolver;
import javax.xml.transform.stream.StreamResult;
import javax.xml.transform.stream.StreamSource;

import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.*;

import net.rhizomik.redefer.util.URIResolverImpl;

import org.apache.commons.httpclient.HttpClient;
import org.apache.commons.httpclient.HttpStatus;
import org.apache.commons.httpclient.methods.GetMethod;
import org.apache.commons.httpclient.methods.PostMethod;
import org.json.simple.JSONObject;
import org.json.simple.parser.JSONParser;

/**
 * Transform class
 * 
 * @author Christian Lucero
 * @date 20160513
 * @version 1.1
 */
@RestController
@RequestMapping("/transform")
public class Transform {

	private String base = Transform.class.getProtectionDomain().getCodeSource().getLocation().getPath().toString()
			+ "../../";// "/home/christian/workspace/ontogov/src/main/webapp/";

	/**
	 * Transform a XSD file to OWL file
	 * 
	 * @param request
	 * @param response
	 */
	@RequestMapping(value = "/linkedin2xml", method = RequestMethod.POST, produces = MediaType.APPLICATION_JSON_VALUE)
	public void linkedin2xml(HttpServletRequest request, HttpServletResponse response) {
		String result = null;
		URIResolver resolver = null;
		try {
			resolver = new URIResolverImpl(base);
			String xsdURL = (String) request.getParameter("url"); // https://mx.linkedin.com/in/crizlucero
			// URLConnection conn = new URL(xsdURL).openConnection();

			InputStreamReader input = new InputStreamReader(new ByteArrayInputStream(this.readURL(xsdURL).getBytes()));

			if (xsdURL.contains("raw"))
				System.out.println(input.read());
			TransformerFactory tFactory = TransformerFactory.newInstance();
			tFactory.setURIResolver(resolver);
			Source xmlSource = new StreamSource(input);
			Source xslSource = new StreamSource(new File(base + "xsl/linkedin2xml.xsl"));

			Transformer transformer = tFactory.newTransformer(xslSource);

			StringWriter writer = new StringWriter();
			transformer.transform(xmlSource, new StreamResult(writer));
			result = new String(writer.getBuffer());
			result = result.replaceAll("&amp;", "&");
			response.setContentType("text/plain");
			// String url = send2AWS(result, "owl", "");
			JSONObject json = new JSONObject();
			// json.put("url", url);
			// json.put("result", result);

			response.getWriter().write(result);// json.toString());
			response.getWriter().close();
		} catch (Exception e) {
			try {
				response.getWriter().write(e.getMessage());
			} catch (Exception ex) {

			}
		}
		// return result;
	}

	private String readURL(String sURL) throws IOException {
		/*
		 * String read = null; String result = ""; try { HttpClient hc = new
		 * HttpClient(); BufferedReader br = null;
		 * 
		 * GetMethod pm = new GetMethod(sURL);
		 * 
		 * if (hc.executeMethod(pm) == HttpStatus.SC_NOT_IMPLEMENTED) {
		 * System.out.println("Not implemented"); } else { br = new
		 * BufferedReader(new InputStreamReader(pm.getResponseBodyAsStream()));
		 * 
		 * while (((read = br.readLine()) != null)) { result += read; } }
		 * 
		 * } catch (Exception e) { System.out.println(e.getMessage()); }
		 * System.out.println(result); return result;
		 */

		URL url = new URL(sURL);
		URLConnection spoof = url.openConnection();

		// Spoof the connection so we look like a web browser
		spoof.setRequestProperty("User-Agent", "Mozilla/5.0 (X11; Linux x86_64; rv:47.0) Gecko/20100101 Firefox/47.0");
		spoof.setRequestProperty("Accept", "text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8");
		spoof.setRequestProperty("Accept-Language", "es-MX,en-US;q=0.7,en;q=0.3");
		spoof.setRequestProperty("DNT", "1");
		spoof.setRequestProperty("Cookie", "JSESSIONID=ajax:2381870287570463751; bcookie='v=2&3c55895a-7628-4616-8c9f-6ffe5d639c9a'; bscookie='v=1&20160715204117c8956792-84fa-44a6-81c1-b2ddec1bede9AQFppmhxr1koDIkEc_qy1vv45PMjz3Fu'; lidc='b=TGST03:g=105:u=1:i=1468615277:t=1468701677:s=AQFBiLMFge6F2rTX0WEqvQcn_s9asF5_'; leo_auth_token='GST:UMzom6qZT9mBY8Ks3QzoB7cTB8MmTRfeLmkKbYeKwnrCw1KjLrhRd4:1468615279:d2111b8e832bddb75ab89994aa3d52034b0fcae1'; visit='v=1&G'; lang='v=2&lang=es-es'");
		spoof.setRequestProperty("Connection", "keep-alive");
		spoof.setRequestProperty("Cache-Control", "max-age=0");
		spoof.setRequestProperty("Host", "mx.linkedin.com");
		BufferedReader in = new BufferedReader(new InputStreamReader(spoof.getInputStream()));
		String strLine = "";
		String finalHTML = "";
		// Loop through every line in the source
		while ((strLine = in.readLine()) != null) {
			finalHTML += strLine;
		}
		System.out.println(finalHTML);
		return finalHTML;
	}
}