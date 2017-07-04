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
  <link href="css/logo-nav.css" rel="stylesheet">
  <script type="text/javascript">
  function checkdata(f){
	  if (document.getElementById("InitialReceiving").value == "0"){
			alert("Please enter InitialReceiving");
			return false;
		}else if(document.getElementById("Department").value == ""){
			alert("Please enter Department");
			return false;
		}else if(document.getElementById("DepartmentType").value == "" ){
			alert("Please enter DepartmentType");
			return false;
		}else if(document.getElementById("Organization").value == ""){
			alert("Please enter Organization");
			return false;
		}else if(document.getElementById("OrganizationType").value == ""){
			alert("Please enter OrganizationType");
			return false;
		}else if(document.getElementById("fileno").value == ""){
			alert("Please enter fileno");
			return false;
		}else if(document.getElementById("Subject").value == ""){
			alert("Please enter Subject");
			return false;
		}else if(document.getElementById("filename").value == ""){
			alert("Please enter filename");
			return false;
		}else if(document.getElementById("Status").value == ""){
			alert("Please enter Status");
			return false;
		} else {
			return true;
		}  
	  
  };
  </script>
</head>
<body>
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
    
<div class="container" style="margin-top: 80px;">
  <h4 align="center">Update File Record</h4>
  <div align="center" style="width: 1000px; margin-left: 220px;">
  <form class="form-horizontal" id="updatefile" name="updatefile" action="/SpringMVC/updatefilerecord" method="post" onsubmit="return checkdata(this)">
  <input type="hidden" name="UserID" id="UserID" value="${file.getUserID()}">
  <input type="hidden" name="fileID" id="FileID" value="${file.getFileID()}">
    <div class="form-group">
      <label class="control-label col-sm-2" for="email">Initial Receiving:</label>
      <div class="col-sm-10">          
        <select id="InitialReceiving" name="InitialReceiving" class="form-control" style="width: 400px;float: left;">
        	<option value="0">Select Initial Receiving</option>
        	<option  value="DS">DS</option>
        	<option  value="SSS">SSS</option>
        </select>
      </div>
    </div>
    <div class="form-group">
      <label class="control-label col-sm-2" for="email">Department:</label>
      <div class="col-sm-10">
        <select id="Department" name="DepartmentName" class="form-control" style="width: 400px;float: left;">
        	<option value="0">Select Department</option>
        	<option value="P&D">P&D</option>
        	<option  value="PPRA">PPRA</option>
        </select>
      </div>
    </div>
    <div class="form-group">
      <label class="control-label col-sm-2" for="email">Department Type:</label>
      <div class="col-sm-10">
         <select id="DepartmentType" name="DepartmentType" class="form-control" style="width: 400px;float: left;">
        	<option value="0">Select Department Type</option>
        	<option  value="Chairmain">Chairmain</option>
        	<option  value="Chief">Chief</option>
        </select>
      </div>
      </div>
     <div class="form-group">
      <label class="control-label col-sm-2" for="email">Organization:</label>
      <div class="col-sm-10">
        <select id="Organization" name="OrganizationName" class="form-control" style="width: 400px;float: left;">
        	<option value="0">Select Organization</option>
        	<option  value="DPI">DPI</option>
        	<option value="CEO">CEO</option>
        	<option  value="DC">DC</option>
        </select>
      </div>
    </div>
    <div class="form-group">
      <label class="control-label col-sm-2" for="email">Organization Type:</label>
      <div class="col-sm-10">
         <select id="OrganizationType" name="OrganizationType" class="form-control" style="width: 400px;float: left;">
        	<option value="0">Select Organization Type</option>
        	<option  value="Gujranwala">Gujranwala</option>
        	<option value="BWP">BWP</option>
        	<option  value="Gujrat">Gujrat</option>
        </select>
      </div>
    </div>
    <div class="form-group">
      <label class="control-label col-sm-2" for="pwd">File No:</label>
      <div class="col-sm-10">          
        <input type="text" class="form-control" id="fileno" name="FileNo" placeholder="Enter File No" value="${file.getFileNo()}" style="width: 400px;float: left;">
      </div>
    </div>
    <div class="form-group">
      <label class="control-label col-sm-2" for="pwd">Subject:</label>
      <div class="col-sm-10">          
        <input type="text" class="form-control" id="Subject" name="Subject" placeholder="Enter Subject" value="${file.getSubject()}" style="width: 400px;float: left;">
      </div>
    </div>
    <div class="form-group">
      <label class="control-label col-sm-2" for="pwd">File Name:</label>
      <div class="col-sm-10">          
        <input type="text" class="form-control" id="filename" name="FileName" placeholder="Enter File Name" value="${file.getFileName()}" style="width: 400px;float: left;">
      </div>
    </div>
    <div class="form-group">
      <label class="control-label col-sm-2" for="email">Status:</label>
      <div class="col-sm-10">
         <select id="Status" name="FileStatus" class="form-control" style="width: 400px;float: left;">
        	<option value="0">Select Status</option>
        	<option  value="1">Pending</option>
        	<option  value="2">Received</option>
        	
        </select>
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
