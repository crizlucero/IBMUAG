package net.rhizomik.redefer.util;

import java.io.FileInputStream;
import java.io.FileNotFoundException;

import javax.xml.transform.Source;
import javax.xml.transform.TransformerException;
import javax.xml.transform.URIResolver;
import javax.xml.transform.stream.StreamSource;

public class URIResolverImpl implements URIResolver 
{
	private String base = null;
	
	public URIResolverImpl(String basePath)
	{
		this.base = basePath;
	}
	
	// TODO: make it more efficient. Currently, if StreamSource reused XSL compile error
	public Source resolve(String href, String base) throws TransformerException 
	{
		Source s = null;
		if (href.equals("linkedin2xml.xsl"))
		{
			try
			{
				FileInputStream file = new FileInputStream(this.base + "xsl/xsd2owl-functions.xsl");
				s = new StreamSource(file);
			}
			catch(FileNotFoundException e){ System.out.println("x");}
		}
		return s;
	}
}
