<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<%@ taglib uri="http://www.springframework.org/tags/form" prefix="form"%>    
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c"%>    
  
        <h1>Edit Login</h1>  
       <form:form method="POST" action="/SpringMVC/editsave" commandName="command">    
        <table >  
        <tr>  
        <td></td>    
         <td><form:hidden  path="id" /></td>  
         </tr> 
         <tr>    
          <td>User Name : </td>   
          <td><form:input path="nAME"  /></td>  
         </tr>    
         <tr>    
          <td>Password :</td>    
          <td><form:input path="pASSWORD" /></td>  
         </tr>   
         <tr>    
          <td>UserType :</td>    
          <td><form:input path="uSERTYPE" /></td>  
         </tr> 
         <tr>    
          <td>IsApproved :</td>    
          <td><form:input path="iSAPPROVED" /></td>  
         </tr>   
           
         <tr>    
          <td> </td>    
          <td><input type="submit" value="Edit Save" /></td>    
         </tr>    
        </table>    
       </form:form>