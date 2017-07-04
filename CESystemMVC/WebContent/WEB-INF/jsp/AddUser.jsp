<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c" %>
<%@page import="com.spring.beans.File"%>
<%@page import="java.util.ArrayList"%>
<%@page import="com.spring.beans.SysUserSession"%>
<%
SysUserSession us = (SysUserSession)session.getAttribute(session.getId());
if( us != null){%>
<html>
<head>
  <title>College Education File System</title>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css">
  <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.1.1/jquery.min.js"></script>
  <script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js"></script>
  <script type="text/javascript">
  function reset(){
	  document.getElementById("username").value == "";
	  document.getElementById("fullname").value == "";
	  document.getElementById("email").value == "";
	  document.getElementById("pwd").value == "";
	  document.getElementById("phone").value == "";
	  document.getElementById("accesscode").value == "";
	  document.getElementById("UserTypeID").value == "0";
  }
  
  function checkdata(f){
	  if (document.getElementById("username").value == ""){
			alert("Please enter username");
			return false;
		}else if(document.getElementById("fullname").value == ""){
			alert("Please enter fullname");
			return false;
		}else if(document.getElementById("email").value == "" ){
			alert("Please enter email");
			return false;
		}else if(document.getElementById("pwd").value == ""){
			alert("Please enter Password");
			return false;
		}else if(document.getElementById("phone").value == ""){
			alert("Please enter phone");
			return false;
		}else if(document.getElementById("accesscode").value == ""){
			alert("Please enter accesscode");
			return false;
		}else if(document.getElementById("UserTypeID").value == "0"){
			alert("Please enter UserTypeID");
			return false;
		} else {
			return true;
		}  
	  
  };
  </script>
</head>
<body>
<%
					String message = request.getParameter("message");
					if (message == null) message="";
					
					String error = request.getParameter("error");
					if (error == null) error="";
					int Error = 0;
					try{
						Error = Integer.parseInt(error);
					}catch(Exception e){
						Error = 0;
					}
					
%>
<nav class="navbar navbar-inverse navbar-fixed-top" role="navigation">
        <div class="container">
        
        <form id = "logoutform" name = "logoutform" method="post" action="./logoutservlet">
            <!-- Brand and toggle get grouped for better mobile display -->
            <div class="navbar-header" style="height: 70px">
                <button type="button" class="navbar-toggle" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1">
                    <span class="sr-only">Toggle navigation</span>
                    <span class="icon-bar"></span>
                    <span class="icon-bar"></span>
                    <span class="icon-bar"></span>
                </button>
                <a class="navbar-brand" href="#">
                    <img src="./images/vu.jpg" alt="" style="width: 80px;height: 50px;">
                </a>
            </div>
            <!-- Collect the nav links, forms, and other content for toggling -->
            <div class="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
                <ul class="nav navbar-nav">
               <%if (us.getSysuser().getUsertypeid() !=1){ %>
	            <li>
                    <a href="./UpdateUser.jsp">Edit Detail</a>
                </li>
               <%} %>
                 <li>  
                    <a href="./filerecord">Add File Record</a>
                </li>
                <li>
                    <a href="./showfilerecord">Show File Record</a>
                </li>
               
                <li >
	                    <a  href="./AddUser.jsp">Add User</a>
	                </li>
	                <li>
	                    <a href="./UserDetails.jsp">User Details</a>
	                </li>
                <li >
                    <a  href="./AddUserType.jsp">Add User Type</a>
                </li>
                <li>
                    <a href="./UserTypes.jsp">Show User Type</a>
                </li>
                <li >
                    <a  href="./AboutUs.jsp">About US</a>
                </li>
                <li>
                    <a href="./ContactUs.jsp">Contact US</a>
                </li>

               
                </ul>
                <ul class="nav navbar-nav navbar-right">
                <li><button type="submit"><span class="glyphicon glyphicon-log-in" style="padding-right: 5px;"></span>Logout</button></li>
            </ul>
            </div>
            <!-- /.navbar-collapse --></form>
        </div>
        <!-- /.container -->
    </nav>
<div class="container" align="center" style="width: 800px;margin-top: 100px;">
	<%if(message != null && message.length() > 0 && Error == 0){ %>
       	<h3 align="center" style="color: green"><%=message %></h3>
  <%}else if (message != null && message.length() > 0 && Error == 1){  %>
  		<h3 align="center" style="color: green"><%=message %></h3>
  <%} %>
  <h4 align="center">Add User</h4>
  <div style="width: 800px;margin-left: 80px;" >
  <form class="form-horizontal" id="registerform" name="registerform" method="post" action="./adduserrecord" onsubmit="return checkdata(registerform)">
    <div class="form-group">
      <label class="control-label col-sm-2" for="email">UserName:</label>
      <div class="col-sm-10">
        <input type="text" class="form-control" id="uname" name="uName" placeholder="Enter UserName" style="width: 400px;float: left;">
      </div>
    </div>
    <div class="form-group">
      <label class="control-label col-sm-2" for="email">FullName:</label>
      <div class="col-sm-10">
        <input type="text" class="form-control" id="fname" name="fName" placeholder="Enter FullName" style="width: 400px;float: left;">
      </div>
    </div>
    <div class="form-group">
      <label class="control-label col-sm-2" for="email">Email:</label>
      <div class="col-sm-10">
        <input type="email" class="form-control" id="email" name="email" placeholder="Enter email" style="width: 400px;float: left;">
      </div>
    </div>
    <div class="form-group">
      <label class="control-label col-sm-2" for="pwd">Password:</label>
      <div class="col-sm-10">          
        <input type="password" class="form-control" id="pwd" name="uPassword" placeholder="Enter Password" style="width: 400px;float: left;">
      </div>
    </div>
    <div class="form-group">
      <label class="control-label col-sm-2" for="pwd">Phone:</label>
      <div class="col-sm-10">          
        <input type="text" class="form-control" id="phone" name="phone" placeholder="Enter Phone" style="width: 400px;float: left;">
      </div>
    </div>
    <div class="form-group">
      <label class="control-label col-sm-2" for="pwd">Access Code:</label>
      <div class="col-sm-10">          
        <input type="text" class="form-control" id="accesscode" name="accessCode" placeholder="Enter Access Code" style="width: 400px;float: left;">
      </div>
    </div>
 <div class="form-group">
      <label class="control-label col-sm-2" for="pwd">User Type:</label>
      <div class="col-sm-10">          
        <select id="UserTypeID" name="userTypeID" class="form-control" style="width: 400px;float: left;">
        <option value="0">Select User Type</option>
         <c:forEach var="contact" items="${usertypelist}" varStatus="status">
	  	  <c:if test="${contact.userTypeID != 1 }">
        	<option value="${contact.userTypeID}">${contact.userTypeName}</option>
        	</c:if>
        	</c:forEach>
        </select>
      </div>
    </div>
<div class="form-group">        
      <div class="col-sm-offset-2 col-sm-10" align="left">
        <button type="submit" class="btn btn-primary">ubmit</button>
       
      </div>
    </div>
    
  </form>
  </div>
</div>
</body>
</html>
<%
}else{
	response.sendRedirect("./index.jsp?Message=You are not authorize to login that page");
	}%>
