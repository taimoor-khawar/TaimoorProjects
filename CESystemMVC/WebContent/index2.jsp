<%@ taglib uri="http://www.springframework.org/tags/form" prefix="form"%>
<%@ taglib prefix="spring" uri="http://www.springframework.org/tags"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c"%>   
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
<link href="../resources/env/themes/cream/css/stylesheet.css">
<!-- <script src="../../../resources/JSCode/calander/calendar.js"></script>
<script src="/resources/JSCode/calander/calendar-en.js"></script>
<script src="/resources/JSCode/calander/calendar-setup.js"></script> -->
<title>Insert title here</title>
</head>
<body>
 
	 <form method="post" action="mainpage">    
        <table >    
         <tr>    
          <td >User Name : </td>   
          <td><input Name="Username" class="login-input" /></td>  
         </tr>    
         <tr>    
          <td>Password :</td>    
          <td><input Name="Password" type="password" class="login-input"/></td>  
         </tr>
         <tr>    
          <td>Password :</td>    
          <td><input type="submit" value="LOGIN"> 
         </tr>
         <c:if test="${Message != null}">
		    <tr>
		    <td colspan="2">
		    	<label style="color: red;">${Message}</label>
		    </td>
		    </tr>
		</c:if>
        </table>    
       </form>
</body>
</html>