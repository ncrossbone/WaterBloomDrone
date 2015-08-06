<%@ page contentType="text/html; charset=euc-kr" pageEncoding="EUC-KR" %>
<%@ include file="dbConn.jsp" %>
<%@ page import="java.util.*,java.text.*"%>
<%@page import="org.json.simple.*"%>
<%
/* 
	중요!!!
	Json 형태로 출력하는 jsp페이지는 어떠한 html 요소도 사용하지 않아야 한다.
	<!DOCTYPE, <html 등등
*/
try{
	String siteCodes = request.getParameter("siteCodes");
	String measureDate = request.getParameter("measureDate");
	String layerDate = request.getParameter("layerDate");
	
	sql="SELECT AA.* " +
		"FROM ( " +
			"SELECT A.PT_NO" +
			    ", REPLACE(B.WMCYMD, '.', '') AS WMCYMD" +
			    ", A.ITEM_SURFACE_CLOA" +
			    ", A.ITEM_TEMP_SURF" +
			    ", A.ITEM_BLUE_GREEN_ALGAE " +
			    //", TO_CHAR(TO_DATE(replace(B.WMCYMD, '.', '')), 'YYYY-MM') AS WMCYM " +
			    //", CEIL((TO_CHAR(TO_DATE(REPLACE(B.WMCYMD, '.', ''), 'YYYYMMDD'), 'DD') + 7 - TO_CHAR(TO_DATE(REPLACE(B.WMCYMD, '.', ''), 'YYYYMMDD') - 1, 'D')) / 7) AS WEEK " +
			 "FROM AG_RWMDTI_NEW_DRONE A" +
			    ", AG_RWMDTD_DRONE B " +
			"WHERE A.PT_NO = B.PT_NO " +
			  "AND A.WMYR  = B.WMYR " +
			  "AND A.WMOD  = B.WMOD " +
		   	  "AND A.WMWK  = B.WMWK " +
			") AA " + 
		"WHERE AA.PT_NO IN (" + siteCodes + ") " + 
		"  AND AA.WMCYMD >= (select TO_CHAR(TRUNC(to_date(replace('" + layerDate + "', '-', ''), 'yyyymmdd'), 'IW') - 1, 'YYYYMMDD') AS STARTDT from dual) " +
		"  AND AA.WMCYMD <= (select TO_CHAR(TRUNC(to_date(replace('" + layerDate + "', '-', ''), 'yyyymmdd'), 'IW') + 5, 'YYYYMMDD') AS ENDDT from dual)";
		//"  AND AA.WMCYM || ' ' || AA.WEEK || '주차' = '" + measureDate + "'";
   //out.print(sql);
   stmt = con.createStatement();   
   rs = stmt.executeQuery(sql);
   
	JSONObject jsonObj  = new JSONObject();
	JSONArray jsonArr = new JSONArray();
	JSONObject jsonRecord = null;
	
	while(rs.next()) {
		jsonRecord = new JSONObject();	 
		
		jsonRecord.put("PT_NO" 				, rs.getString("PT_NO")); 
  		jsonRecord.put("WMCYMD" 			, rs.getString("WMCYMD"));
  		jsonRecord.put("ITEM_SURFACE_CLOA" 	, rs.getString("ITEM_SURFACE_CLOA"));
  		jsonRecord.put("ITEM_TEMP_SURF" 			, rs.getString("ITEM_TEMP_SURF"));
  		jsonRecord.put("ITEM_BLUE_GREEN_ALGAE" 		, rs.getString("ITEM_BLUE_GREEN_ALGAE"));
  		
  		jsonArr.add(jsonRecord);
	}
	
	jsonObj.put("data", jsonArr);
   
   out.print(jsonObj);
   //out.print("success");
}catch(Exception ex){
	//throw;
	System.out.println(ex);
	System.out.println(sql);
	out.print("error");
} 
%>
<%@ include file="dbClose.jsp" %>