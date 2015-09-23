<%@ page language="java" import="java.sql.*" %>
<%
String DB_URL = "jdbc:oracle:thin:@cetech.iptime.org:11521:orcl"; //아이피 주소에 DB 주소를 넣어주시구요. ORCL 이라는 부분은 DB의 SID를 넣는 곳입니다.
// SID 찾는 방법은 오라클 TNS설정파일에 보시면 Service Name, SID 등으로 써 있습니다. 또는 Sys 계정으로 로그인 하여 select name from v$database; 쿼리를 날리셔도 나옵니다.
 String DB_USER    = "SGIS_INTRA"; // DB USER명
 String DB_PASSWORD = "SGIS_INTRA"; // 패스워드

 Connection con = null;
 Statement  stmt   = null;
 ResultSet rs = null;
 String sql=null;
try
 {
    Class.forName("oracle.jdbc.driver.OracleDriver");
    con = DriverManager.getConnection(DB_URL, DB_USER, DB_PASSWORD);     
  }catch(SQLException e){out.println(e);} 
%>