<%@ taglib uri="http://www.springframework.org/tags/form" prefix="form"%>    
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c"%>    
  
<h1>Login List</h1>  
<table border="2" width="70%" cellpadding="2">  
<tr><th>Id</th><th>UserName</th><th>Password</th><th>UserType</th><th>ISAPPROVED</th><th>Edit</th><th>Delete</th></tr>  
   <c:forEach var="login" items="${list}">   
   <tr>  
    <td>${login.id}</td> 
    <td>${login.nAME}</td>  
    <td>${login.pASSWORD}</td>  
    <td>${login.uSERTYPE}</td>
    <td>${login.iSAPPROVED}</td> 
    <td><a href="editlogin/${login.id}">Edit</a></td>  
    <td><a href="deletelogin/${login.id}">Delete</a></td>  
   </tr>  
   </c:forEach>  
   </table>  
   <br/>  
   <a href="loginform">Add New Login</a>  
