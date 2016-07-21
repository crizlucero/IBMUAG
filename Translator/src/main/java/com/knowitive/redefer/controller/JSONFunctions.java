package com.knowitive.redefer.controller;

import org.json.JSONArray;
import org.json.JSONObject;
import org.w3c.dom.Document;

public class JSONFunctions {

	public String convert2XML() {
		return "";
	}

	static public JSONArray DeleteDuplicates(JSONArray arr) {
		JSONArray newArr = new JSONArray();
		boolean flag;
		for (int i = 0; i < arr.length() - 1; ++i) {
			flag = true;
			for (int j = 0; j < newArr.length() - 1; j++) {
				if (arr.get(i).toString().equals(newArr.get(j).toString())) {
					flag = false;
					break;
				}
			}
			if (flag) {
				newArr.put(arr.get(i));
			}
		}

		return newArr;
	}
}
