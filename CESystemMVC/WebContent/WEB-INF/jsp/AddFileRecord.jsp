<%@ page language="java" contentType="text/html; charset=ISO-8859-1"
pageEncoding="ISO-8859-1"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<%@page import="com.spring.beans.SysUserSession"%>
<%
SysUserSession us = (SysUserSession)session.getAttribute(session.getId());
if( us != null){
	if(us.getSysuser().getUsertypeid() == 1){%>
<html>
<head>
  <title>College Education File System</title>

  <meta name="viewport" content="width=device-width, initial-scale=1">
  <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css">
  <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.1.1/jquery.min.js"></script>
  <script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js"></script>
  <link rel="stylesheet" href="./css/calendar.css" />
  <SCRIPT src="./js/calander/calendar.js" type=text/javascript></SCRIPT>
  <SCRIPT src="./js/calander/calendar-en.js" type=text/javascript></SCRIPT>
  <SCRIPT src="./js/calander/calendar-setup.js" type=text/javascript></SCRIPT>
  <link href="./css/logo-nav.css" rel="stylesheet">
<style type="text/css">
.txtInput{
	font-size: 11px;
	background:#f8f8f8; border:1px solid #e9ebeb;
	padding-left: 2px;
	height: 34px;
    font-size: 14px;
    color: #555;
    background-color: #fff;
    background-image: none;
    border: 1px solid #ccc;
    border-radius: 4px;
}
</style>
  <script type="text/javascript">
  
  function checkdata(f){
	  
	  document.getElementById("InsertionDate").value=document.getElementById("regyear").value+'-'+document.getElementById("regmonth").value+'-'+document.getElementById("regday").value;
	  if (document.getElementById("InitialReceiving").value == "0"){
			alert("Please enter InitialReceiving");
			return false;
		}else if(document.getElementById("DepartmentName").value == "0"){
			alert("Please enter Department");
			return false;
		}else if(document.getElementById("DepartmentType").value == "0" ){
			alert("Please enter DepartmentType");
			return false;
		}else if(document.getElementById("OrganizationName").value == "0"){
			alert("Please enter Organization");
			return false;
		}else if(document.getElementById("OrganizationType").value == "0"){
			alert("Please enter OrganizationType");
			return false;
		}else if(document.getElementById("FileNo").value == ""){
			alert("Please enter fileno");
			return false;
		}else if(document.getElementById("Subject").value == ""){
			alert("Please enter Subject");
			return false;
		}else if(document.getElementById("FileName").value == ""){
			alert("Please enter filename");
			return false;
		}else if(document.getElementById("FileStatus").value == "0"){
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
                    <img src="http://placehold.it/150x50&text=Logo" alt="">
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
<div class="container" style="margin-top: 70px;">
 
  <h4 align="center">Add File Record</h4>
  <div align="center" style="width: 1000px; margin-left: 220px;">
  <form class="form-horizontal" id="addfile" name="addfile" action="addfilerecord" method="post" onsubmit="return checkdata(addfile)">
  <input type="hidden" name="UserID" id="UserID" path="UserID" value="<%=us.getSysuser().getSysUserID()%>">
  <input type="hidden" name="UserTypeID" path="UserTypeID" id="UserTypeID" value="<%=us.getSysuser().getUsertypeid()%>">
    <div class="form-group">
      <label class="control-label col-sm-2" for="email">Initial Receiving:</label>
      <div class="col-sm-10">          
        <select  path="InitialReceiving" id="InitialReceiving" name="InitialReceiving" class="form-control" style="width: 400px;float: left;">
        	<option value="0">Select Initial Receiving</option>
        	<option value="DS">DS</option>
        	<option value="SSS">SSS</option>
        </select>
      </div>
    </div>
    <div class="form-group">
      <label class="control-label col-sm-2" for="email">Department:</label>
      <div class="col-sm-10">
        <select  path="DepartmentName" id="DepartmentName" name="DepartmentName" class="form-control" style="width: 400px;float: left;">
        	<option value="0">Select Department</option>
        	<option value="P&D">P&D</option>
        	<option value="PPRA">PPRA</option>
        </select>
      </div>
    </div>
    <div class="form-group">
      <label class="control-label col-sm-2" for="email">Department Type:</label>
      <div class="col-sm-10">
         <select  path="DepartmentType" id="DepartmentType" name="DepartmentType" class="form-control" style="width: 400px;float: left;">
        	<option value="0">Select Department Type</option>
        	<option value="Chairmain">Chairmain</option>
        	<option value="Chief">Chief</option>
        </select>
      </div>
      </div>
     <div class="form-group">
      <label class="control-label col-sm-2" for="email">Organization:</label>
      <div class="col-sm-10">
        <select  path="OrganizationName" id="OrganizationName" name="OrganizationName" class="form-control" style="width: 400px;float: left;">
        	<option value="0">Select Organization</option>
        	<option value="DPI">DPI</option>
        	<option value="CEO">CEO</option>
        	<option value="DC">DC</option>
        </select>
      </div>
    </div>
    <div class="form-group">
      <label class="control-label col-sm-2" for="email">Organization Type:</label>
      <div class="col-sm-10">
         <select  path="OrganizationType" id="OrganizationType" name="OrganizationType" class="form-control" style="width: 400px;float: left;">
        	<option value="0">Select Organization Type</option>
        	<option value="Gujranwala">Gujranwala</option>
        	<option value="BWP">BWP</option>
        	<option value="Gujrat">Gujrat</option>
        </select>
      </div>
    </div>
    <div class="form-group">
      <label class="control-label col-sm-2" for="pwd">File No:</label>
      <div class="col-sm-10">          
        <input  path="FileNo" type="text" class="form-control" id="FileNo" name="FileNo" placeholder="Enter File No" style="width: 400px;float: left;">
      </div>
    </div>
    <div class="form-group">
      <label class="control-label col-sm-2" for="pwd">Subject:</label>
      <div class="col-sm-10">          
        <input  path="Subject" type="text" class="form-control" id="Subject" name="Subject" placeholder="Enter Subject" style="width: 400px;float: left;">
      </div>
    </div>
    <div class="form-group">
      <label class="control-label col-sm-2" for="pwd">File Name:</label>
      <div class="col-sm-10">
             
        <input  path="FileName" type="text" class="form-control" id="FileName" name="FileName" placeholder="Enter File Name" style="width: 400px;float: left;">
      </div>
    </div>
    <div class="form-group">
      <label class="control-label col-sm-2" for="email">Status:</label>
      <div class="col-sm-10">
         <select  path="FileStatus" id="Status" name="FileStatus" class="form-control" style="width: 400px;float: left;">
        	<option value="0">Select Status</option>
        	<option value="1">Pending</option>
        	<option value="2">Received</option>
        	
        </select>
      </div>
    </div>
     <input  path="InsertionDate" name="InsertionDate" id="InsertionDate" type="hidden" size="4" value="">
    <div class="form-group">
      <label class="control-label col-sm-2" for="email">Date:</label>
      <div style="margin-right: 640px;">
         <input name="regyear" type="text" id="regyear" size="4" maxlength="4" class="txtInput" value="">
		  <input name="regmonth" type="text" id="regmonth" size="2" maxlength="2" class="txtInput" value="">
		  <input name="regday" type="text" id="regday" size="2" maxlength="2" class="txtInput" value=""> 
		  <input name="regexphour" type="hidden" id="regexphour"> 
		  <input name="regexpmin" type="hidden" id="regexpmin"> 
		  <a id="InsertionDate"><img alt="Pick a date" src="./images/cal.gif" border="0" width="17" height="16"/></a> 
         <script type=text/javascript>Calendar.setup({calYear:"regyear", calMonth:"regmonth", calDay:"regday", calHour:"reghour", calMin:"regmin", button:"InsertionDate"});</script>
      </div>
    </div>
    <div class="form-group">        
      <div class="col-sm-offset-2 col-sm-10" align="left">
        <button type="submit" class="btn btn-primary">Submit</button>
        
      </div>
    </div>
  </form>
</div>
</div>
</body>
</html>
<%}else{
	response.sendRedirect("./index.jsp?Message=You are not authorize to login that page");
	}
}else{
	response.sendRedirect("./index.jsp?Message=You are not authorize to login that page");
	}%>
