<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c" %>
<%@page import="com.spring.beans.File"%>
<%@page import="java.util.ArrayList"%>
<%@page import="com.spring.beans.SysUserSession"%>
<%
SysUserSession us = (SysUserSession)session.getAttribute(session.getId());
if( us != null){
	if(us.getSysuser().getUsertypeid() != 1){%>
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
<div class="container" style="margin-top: 20px;">
  <%if(message != null && message.length() > 0){ %>
        <h4 align="center" style="color: green"><%=message %></h4>
  <%} %>
  </div>
</body>
</html>
<%}else{
	response.sendRedirect("./index.jsp?Message=You are not authorize to login that page");
	}
}else{
	response.sendRedirect("./index.jsp?Message=You are not authorize to login that page");
	}%>
