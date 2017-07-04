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
  <link href="./css/logo-nav.css" rel="stylesheet">
</head>
<body>
<%
					String message = request.getParameter("message");
					if (message == null) message="";
					
			    
%>
<nav class="navbar navbar-inverse navbar-fixed-top" role="navigation">
		
        <div class="container">
        <form id = "logoutform" name = "logoutform" method="post" action="./logoutservlet">
            <!-- Brand and toggle get grouped for better mobile display -->
            <div class="navbar-header">
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
                <%if(us.getSysuser().getUsertypeid() != 1){ %>
	            <li >
                    <a href="./UpdateUser.jsp?UserID=<%=us.getSysuser().getSysUserID()%>">Edit Detail</a>
                </li>
                <%} %>
                 <li>  
                    <a href="./filerecord">Add File Record</a>
                </li>
                <li>
                    <a href="./showfilerecord">Show File Record</a>
                </li>
                <%if(us.getSysuser().getUsertypeid() == 1){ %>
                <li >
	                    <a  href="./adduser">Add User</a>
	                </li>
	                <li>
	                    <a href="./userdetails">UserDetails</a>
	                </li>
                <li >
                    <a  href="./addusertype">Add User Type</a>
                </li>
                <li>
                    <a href="./showusertypes">Show User Type</a>
                </li>
                    <li >
                    <a  href="./aboutus">About US</a>
                </li>
                <li>
                    <a href="./contactus">Contact US</a>
                </li>

                <%} %>
                </ul>
                <ul class="nav navbar-nav navbar-right" style="margin-top: 10px;">
                <li><button type="submit"><span class="glyphicon glyphicon-log-in" style="padding-right: 5px;"></span>Logout</button></li>
            </ul>
            </div>
            <!-- /.navbar-collapse --></form>
        </div>
        <!-- /.container -->
    </nav>
<div class="container" style="margin-top: 90px;">
 
  <h4 align="center">Update User</h4>
  <%if(message != null && message.length() > 0){ %>
        <h4 align="center" style="color: red"><%=message %></h4>
  <%} %>
 
  <div align="center" style="width: 1000px; margin-left: 220px;">
  <form class="form-horizontal" method="post" action="/SpringMVC/updateuserrecord">
  	<input type="hidden" name="UserID" id="UserID" value="${user.getUserID()}">
  	<input type="hidden" name="userTypeID" id="userTypeID" value="${user.getUserTypeID()}">
  	<input type="hidden" name="RegistrationDate" id="RegistrationDate" value="${user.getRegistrationDate()}">
  	<input type="hidden" name="ModificationDate" id="ModificationDate" value="${user.getModificationDate()}">
    <div class="form-group">
      <label class="control-label col-sm-2" for="email">UserName:</label>
      <div class="col-sm-10">
        <input type="text" class="form-control" id="username" name="uName" placeholder="Enter email" value="${user.getUName() }" style="width: 400px;float: left;">
      </div>
    </div>
    <div class="form-group">
      <label class="control-label col-sm-2" for="email">FullName:</label>
      <div class="col-sm-10">
        <input type="text" class="form-control" id="fullname" name="fName" value="${user.getFName() }" placeholder="Enter FullName" style="width: 400px;float: left;">
      </div>
    </div>
    <div class="form-group">
      <label class="control-label col-sm-2" for="email">Email:</label>
      <div class="col-sm-10">
        <input type="email" class="form-control" id="email" name="email" value="${user.getEmail() }"placeholder="Enter email" style="width: 400px;float: left;">
      </div>
    </div>
    <div class="form-group">
      <label class="control-label col-sm-2" for="pwd">Password:</label>
      <div class="col-sm-10">          
        <input type="password" class="form-control" id="pwd" name="uPassword" value="${user.getUPassword() }" placeholder="Enter Password" style="width: 400px;float: left;">
      </div>
    </div>
    <div class="form-group">
      <label class="control-label col-sm-2" for="pwd">Phone:</label>
      <div class="col-sm-10">          
        <input type="text" class="form-control" id="phone" name="phone" value="${user.getPhone()}" placeholder="Enter Phone" style="width: 400px;float: left;">
      </div>
    </div>
    <div class="form-group">
      <label class="control-label col-sm-2" for="pwd">Access Code:</label>
      <div class="col-sm-10">          
        <input type="text" class="form-control" id="accesscode" name="accessCode" value="${user.getAccessCode()}" placeholder="Enter Access Code" style="width: 400px;float: left;">
      </div>
    </div>
    <div class="form-group">        
      <div class="col-sm-offset-2 col-sm-10" align="left">
        <button type="submit" class="btn btn-primary">Submit</button>
        
      </div>
    </div>
  </form>
  </div>
  </div> --%>
</body>
</html>
<%
}else{
	response.sendRedirect("./index.jsp?Message=You are not authorize to login that page");
	}%>
