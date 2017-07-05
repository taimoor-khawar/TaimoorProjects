<%@ taglib uri="http://www.springframework.org/tags/form" prefix="form"%>
  
        <h1>Add New LOGIN</h1>  
       <form:form method="post" action="save">    
        <table >    
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
          <td><input type="submit" value="Save" /></td>    
         </tr>    
        </table>    
       </form:form> 