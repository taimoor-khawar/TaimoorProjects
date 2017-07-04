function GetASRStatisticsIn(dateTime){
	var xmlhttp;
  	//document.getElementById("ajax_loading").style.visibility = 'visible'; 
	var url = "./Dashboard/GetASRStatisticsIn.jsp?dateTime="+dateTime;
	if (window.XMLHttpRequest)
  	{// code for IE7+, Firefox, Chrome, Opera, Safari
  		xmlhttp = new XMLHttpRequest();
  	}
	else
  	{// code for IE6, IE5
  		xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
  	}
	xmlhttp.open("GET", url, true);
	xmlhttp.send();
	
	xmlhttp.onreadystatechange = function()
  	{
  		if (xmlhttp.readyState==4 && xmlhttp.status==200)
    	{
    		var select;
    		
    		//document.getElementById("ajax_loading").style.visibility = 'hidden';
    		select = document.getElementById("ASRIn");
    		var select_2 = document.createElement("div");
    		select_2.innerHTML = xmlhttp.responseText;
    		var responseData = select_2.getElementsByTagName("div");
    		
    		
    		var value = responseData[0].getAttribute("value");
    		if(value == "ASRdata")
    		{
    			fileURL = responseData[0].getAttribute("fileURL");
    			filename = responseData[0].getAttribute("filename");
    			select.innerHTML = "<img src=\"" + fileURL + "\" border=0 usemap=\"#" + filename + "\">";
    		}
    		else if(value == "error")
    		{
    			select.innerHTML = "Graph File Does Not Found";
    		}
    		else
    		{
    			select.innerHTML = "No Record Found";
    		}
    	}
  	}
}


function GetACDStatisticsIn(dateTime){
	var xmlhttp;
  	//document.getElementById("ajax_loading").style.visibility = 'visible'; 
	var url = "./Dashboard/GetACDStatisticsIn.jsp?dateTime="+dateTime;
	if (window.XMLHttpRequest)
  	{// code for IE7+, Firefox, Chrome, Opera, Safari
  		xmlhttp=new XMLHttpRequest();
  	}
	else
  	{// code for IE6, IE5
  		xmlhttp=new ActiveXObject("Microsoft.XMLHTTP");
  	}
	xmlhttp.open("GET", url, true);
	xmlhttp.send();
	
	xmlhttp.onreadystatechange = function()
  	{
  		if (xmlhttp.readyState==4 && xmlhttp.status==200)
    	{
    		var select ;
    		
    		//document.getElementById("ajax_loading").style.visibility = 'hidden';
    		select = document.getElementById("ACDIn");
    		var select_2 = document.createElement("span");
    		select_2.innerHTML = xmlhttp.responseText;
    		var responseData = select_2.getElementsByTagName("div");
    		
    		
    		var value = responseData[0].getAttribute("value");
    		if(value == "ACDdata")
    		{
    			fileURL = responseData[0].getAttribute("fileURL");
    			filename = responseData[0].getAttribute("filename");
    			select.innerHTML = "<img src=\"" + fileURL + "\" border=0 usemap=\"#" + filename + "\">";
    		}
    		else if(value == "error")
    		{
    			select.innerHTML = "Graph File Does Not Found";
    		}
    		else
    		{
    			select.innerHTML = "No Record Found";
    		}
    	}
  	}
}


function GetASRStatisticsEg(dateTime){
	var xmlhttp;
  	//document.getElementById("ajax_loading").style.visibility = 'visible'; 
	var url = "./Dashboard/GetASRStatisticsEg.jsp?dateTime="+dateTime;
	if (window.XMLHttpRequest)
  	{// code for IE7+, Firefox, Chrome, Opera, Safari
  		xmlhttp = new XMLHttpRequest();
  	}
	else
  	{// code for IE6, IE5
  		xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
  	}
	xmlhttp.open("GET", url, true);
	xmlhttp.send();
	
	xmlhttp.onreadystatechange = function()
  	{
  		if (xmlhttp.readyState==4 && xmlhttp.status==200)
    	{
    		var select;
    		
    		//document.getElementById("ajax_loading").style.visibility = 'hidden';
    		select = document.getElementById("ASREg");
    		var select_2 = document.createElement("div");
    		select_2.innerHTML = xmlhttp.responseText;
    		var responseData = select_2.getElementsByTagName("div");
    		
    		
    		var value = responseData[0].getAttribute("value");
    		if(value == "ASRdata")
    		{
    			fileURL = responseData[0].getAttribute("fileURL");
    			filename = responseData[0].getAttribute("filename");
    			select.innerHTML = "<img src=\"" + fileURL + "\" border=0 usemap=\"#" + filename + "\">";
    		}
    		else if(value == "error")
    		{
    			select.innerHTML = "Graph File Does Not Found";
    		}
    		else
    		{
    			select.innerHTML = "No Record Found";
    		}
    	}
  	}
}


function GetACDStatisticsEg(dateTime){
	var xmlhttp;
  	//document.getElementById("ajax_loading").style.visibility = 'visible'; 
	var url = "./Dashboard/GetACDStatisticsEg.jsp?dateTime="+dateTime;
	if (window.XMLHttpRequest)
  	{// code for IE7+, Firefox, Chrome, Opera, Safari
  		xmlhttp=new XMLHttpRequest();
  	}
	else
  	{// code for IE6, IE5
  		xmlhttp=new ActiveXObject("Microsoft.XMLHTTP");
  	}
	xmlhttp.open("GET", url, true);
	xmlhttp.send();
	
	xmlhttp.onreadystatechange = function()
  	{
  		if (xmlhttp.readyState==4 && xmlhttp.status==200)
    	{
    		var select ;
    		
    		//document.getElementById("ajax_loading").style.visibility = 'hidden';
    		select = document.getElementById("ACDEg");
    		var select_2 = document.createElement("span");
    		select_2.innerHTML = xmlhttp.responseText;
    		var responseData = select_2.getElementsByTagName("div");
    		
    		
    		var value = responseData[0].getAttribute("value");
    		if(value == "ACDdata")
    		{
    			fileURL = responseData[0].getAttribute("fileURL");
    			filename = responseData[0].getAttribute("filename");
    			select.innerHTML = "<img src=\"" + fileURL + "\" border=0 usemap=\"#" + filename + "\">";
    		}
    		else if(value == "error")
    		{
    			select.innerHTML = "Graph File Does Not Found";
    		}
    		else
    		{
    			select.innerHTML = "No Record Found";
    		}
    	}
  	}
}

function GetNoOfCallsEgCarrierWise(dateTime){
	
	var xmlhttp;
  	//document.getElementById("ajax_loading").style.visibility = 'visible'; 
	var url = "./Dashboard/GetNoOfCallsEgCarrierWise.jsp?dateTime="+dateTime;
	
	if (window.XMLHttpRequest)
  	{// code for IE7+, Firefox, Chrome, Opera, Safari
  		xmlhttp = new XMLHttpRequest();
  	}
	else
  	{// code for IE6, IE5
  		xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
  	}
	xmlhttp.open("GET", url, true);
	xmlhttp.send();
	
	xmlhttp.onreadystatechange = function()
  	{
  		if (xmlhttp.readyState==4 && xmlhttp.status==200)
    	{
    		var select ;
    		
    		//document.getElementById("ajax_loading").style.visibility = 'hidden';
    		select = document.getElementById("noOfCallsEg");
    		var select_2 = document.createElement("span");
    		select_2.innerHTML = xmlhttp.responseText;
    		var responseData = select_2.getElementsByTagName("div");
    		
    		
    		var value = responseData[0].getAttribute("value");
    		if(value == "data")
    		{
    			fileURL = responseData[0].getAttribute("fileURL");
    			filename = responseData[0].getAttribute("filename");
    			select.innerHTML = "<img src=\"" + fileURL + "\" border=0 usemap=\"#" + filename + "\">";
    		}
    		else if(value == "error")
    		{
    			select.innerHTML = "Graph File Does Not Found";
    		}
    		else
    		{
    			select.innerHTML = "No Record Found";
    		}
    	}
  	}
}

function GetNoOfCallsInCarrierWise(dateTime){
	
	var xmlhttp;
  	//document.getElementById("ajax_loading").style.visibility = 'visible'; 
	var url = "./Dashboard/GetNoOfCallsInCarrierWise.jsp?dateTime="+dateTime;
	
	if (window.XMLHttpRequest)
  	{// code for IE7+, Firefox, Chrome, Opera, Safari
  		xmlhttp = new XMLHttpRequest();
  	}
	else
  	{// code for IE6, IE5
  		xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
  	}
	xmlhttp.open("GET", url, true);
	xmlhttp.send();
	
	xmlhttp.onreadystatechange = function()
  	{
  		if (xmlhttp.readyState==4 && xmlhttp.status==200)
    	{
    		var select ;
    		
    		//document.getElementById("ajax_loading").style.visibility = 'hidden';
    		select = document.getElementById("noOfCallsIn");
    		var select_2 = document.createElement("span");
    		select_2.innerHTML = xmlhttp.responseText;
    		var responseData = select_2.getElementsByTagName("div");
    		
    		
    		var value = responseData[0].getAttribute("value");
    		if(value == "data")
    		{
    			fileURL = responseData[0].getAttribute("fileURL");
    			filename = responseData[0].getAttribute("filename");
    			select.innerHTML = "<img src=\"" + fileURL + "\" border=0 usemap=\"#" + filename + "\">";
    		}
    		else if(value == "error")
    		{
    			select.innerHTML = "Graph File Does Not Found";
    		}
    		else
    		{
    			select.innerHTML = "No Record Found";
    		}
    	}
  	}
}


function GetCallsDurationEgCarrierWise(dateTime){
	
	var xmlhttp;
  	//document.getElementById("ajax_loading").style.visibility = 'visible'; 
	var url = "./Dashboard/GetCallsDurationEgCarrierWise.jsp?dateTime="+dateTime;
	
	if (window.XMLHttpRequest)
  	{// code for IE7+, Firefox, Chrome, Opera, Safari
  		xmlhttp = new XMLHttpRequest();
  	}
	else
  	{// code for IE6, IE5
  		xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
  	}
	xmlhttp.open("GET", url, true);
	xmlhttp.send();
	
	xmlhttp.onreadystatechange = function()
  	{
  		if (xmlhttp.readyState==4 && xmlhttp.status==200)
    	{
    		var select ;
    		
    		//document.getElementById("ajax_loading").style.visibility = 'hidden';
    		select = document.getElementById("CallDurationEg");
    		var select_2 = document.createElement("span");
    		select_2.innerHTML = xmlhttp.responseText;
    		var responseData = select_2.getElementsByTagName("div");
    		
    		
    		var value = responseData[0].getAttribute("value");
    		if(value == "data")
    		{
    			fileURL = responseData[0].getAttribute("fileURL");
    			filename = responseData[0].getAttribute("filename");
    			select.innerHTML = "<img src=\"" + fileURL + "\" border=0 usemap=\"#" + filename + "\">";
    		}
    		else if(value == "error")
    		{
    			select.innerHTML = "Graph File Does Not Found";
    		}
    		else
    		{
    			select.innerHTML = "No Record Found";
    		}
    	}
  	}
}

function GetCallsDurationInCarrierWise(dateTime){
	
	var xmlhttp;
  	//document.getElementById("ajax_loading").style.visibility = 'visible'; 
	var url = "./Dashboard/GetCallsDurationInCarrierWise.jsp?dateTime="+dateTime;
	
	if (window.XMLHttpRequest)
  	{// code for IE7+, Firefox, Chrome, Opera, Safari
  		xmlhttp = new XMLHttpRequest();
  	}
	else
  	{// code for IE6, IE5
  		xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
  	}
	xmlhttp.open("GET", url, true);
	xmlhttp.send();
	
	xmlhttp.onreadystatechange = function()
  	{
  		if (xmlhttp.readyState==4 && xmlhttp.status==200)
    	{
    		var select ;
    		
    		//document.getElementById("ajax_loading").style.visibility = 'hidden';
    		select = document.getElementById("CallDurationIn");
    		var select_2 = document.createElement("span");
    		select_2.innerHTML = xmlhttp.responseText;
    		var responseData = select_2.getElementsByTagName("div");
    		
    		
    		var value = responseData[0].getAttribute("value");
    		if(value == "data")
    		{
    			fileURL = responseData[0].getAttribute("fileURL");
    			filename = responseData[0].getAttribute("filename");
    			select.innerHTML = "<img src=\"" + fileURL + "\" border=0 usemap=\"#" + filename + "\">";
    		}
    		else if(value == "error")
    		{
    			select.innerHTML = "Graph File Does Not Found";
    		}
    		else
    		{
    			select.innerHTML = "No Record Found";
    		}
    	}
  	}
}


function GetTotalNoOfCalls(dateTime){
	
	var xmlhttp;
  	//document.getElementById("ajax_loading").style.visibility = 'visible'; 
	var url = "./Dashboard/GetTotalNoOfCalls.jsp?dateTime="+dateTime;
	
	if (window.XMLHttpRequest)
  	{// code for IE7+, Firefox, Chrome, Opera, Safari
  		xmlhttp = new XMLHttpRequest();
  	}
	else
  	{// code for IE6, IE5
  		xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
  	}
	xmlhttp.open("GET", url, true);
	xmlhttp.send();
	
	xmlhttp.onreadystatechange = function()
  	{
  		if (xmlhttp.readyState==4 && xmlhttp.status==200)
    	{
    		var select ;
    		
    		//document.getElementById("ajax_loading").style.visibility = 'hidden';
    		select = document.getElementById("noOfCallsTotal");
    		var select_2 = document.createElement("span");
    		select_2.innerHTML = xmlhttp.responseText;
    		var responseData = select_2.getElementsByTagName("div");
    		
    		
    		var value = responseData[0].getAttribute("value");
    		if(value == "data")
    		{
    			fileURL = responseData[0].getAttribute("fileURL");
    			filename = responseData[0].getAttribute("filename");
    			select.innerHTML = "<img src=\"" + fileURL + "\" border=0 usemap=\"#" + filename + "\">";
    		}
    		else if(value == "error")
    		{
    			select.innerHTML = "Graph File Does Not Found";
    		}
    		else
    		{
    			select.innerHTML = "No Record Found";
    		}
    	}
  	}
}


function GetTotalNoOfMinutes(dateTime){
	
	var xmlhttp;
  	//document.getElementById("ajax_loading").style.visibility = 'visible'; 
	var url = "./Dashboard/GetTotalNoOfMinutes.jsp?dateTime="+dateTime;
	
	if (window.XMLHttpRequest)
  	{// code for IE7+, Firefox, Chrome, Opera, Safari
  		xmlhttp = new XMLHttpRequest();
  	}
	else
  	{// code for IE6, IE5
  		xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
  	}
	xmlhttp.open("GET", url, true);
	xmlhttp.send();
	
	xmlhttp.onreadystatechange = function()
  	{
  		if (xmlhttp.readyState==4 && xmlhttp.status==200)
    	{
    		var select ;
    		
    		//document.getElementById("ajax_loading").style.visibility = 'hidden';
    		select = document.getElementById("CallsDurationTotal");
    		var select_2 = document.createElement("span");
    		select_2.innerHTML = xmlhttp.responseText;
    		var responseData = select_2.getElementsByTagName("div");
    		
    		
    		var value = responseData[0].getAttribute("value");
    		if(value == "data")
    		{
    			fileURL = responseData[0].getAttribute("fileURL");
    			filename = responseData[0].getAttribute("filename");
    			select.innerHTML = "<img src=\"" + fileURL + "\" border=0 usemap=\"#" + filename + "\">";
    		}
    		else if(value == "error")
    		{
    			select.innerHTML = "Graph File Does Not Found";
    		}
    		else
    		{
    			select.innerHTML = "No Record Found";
    		}
    	}
  	}
}


function GetRevenueCarrierWise(dateTime){
	
	var xmlhttp;
  	//document.getElementById("ajax_loading").style.visibility = 'visible'; 
	var url = "./Dashboard/GetRevenueCarrierWise.jsp?dateTime="+dateTime;
	
	if (window.XMLHttpRequest)
  	{// code for IE7+, Firefox, Chrome, Opera, Safari
  		xmlhttp = new XMLHttpRequest();
  	}
	else
  	{// code for IE6, IE5
  		xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
  	}
	xmlhttp.open("GET", url, true);
	xmlhttp.send();
	
	xmlhttp.onreadystatechange = function()
  	{
  		if (xmlhttp.readyState==4 && xmlhttp.status==200)
    	{
    		var select ;
    		
    		//document.getElementById("ajax_loading").style.visibility = 'hidden';
    		select = document.getElementById("Revenue");
    		var select_2 = document.createElement("span");
    		select_2.innerHTML = xmlhttp.responseText;
    		var responseData = select_2.getElementsByTagName("div");
    		
    		
    		var value = responseData[0].getAttribute("value");
    		if(value == "data")
    		{
    			fileURL = responseData[0].getAttribute("fileURL");
    			filename = responseData[0].getAttribute("filename");
    			select.innerHTML = "<img src=\"" + fileURL + "\" border=0 usemap=\"#" + filename + "\">";
    		}
    		else if(value == "error")
    		{
    			select.innerHTML = "Graph File Does Not Found";
    		}
    		else
    		{
    			select.innerHTML = "No Record Found";
    		}
    	}
  	}
}


function GetCostCarrierWise(dateTime){
	
	var xmlhttp;
  	//document.getElementById("ajax_loading").style.visibility = 'visible'; 
	var url = "./Dashboard/GetCostCarrierWise.jsp?dateTime="+dateTime;
	
	if (window.XMLHttpRequest)
  	{// code for IE7+, Firefox, Chrome, Opera, Safari
  		xmlhttp = new XMLHttpRequest();
  	}
	else
  	{// code for IE6, IE5
  		xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
  	}
	xmlhttp.open("GET", url, true);
	xmlhttp.send();
	
	xmlhttp.onreadystatechange = function()
  	{
  		if (xmlhttp.readyState==4 && xmlhttp.status==200)
    	{
    		var select ;
    		
    		//document.getElementById("ajax_loading").style.visibility = 'hidden';
    		select = document.getElementById("Cost");
    		var select_2 = document.createElement("span");
    		select_2.innerHTML = xmlhttp.responseText;
    		var responseData = select_2.getElementsByTagName("div");
    		
    		
    		var value = responseData[0].getAttribute("value");
    		if(value == "data")
    		{
    			fileURL = responseData[0].getAttribute("fileURL");
    			filename = responseData[0].getAttribute("filename");
    			select.innerHTML = "<img src=\"" + fileURL + "\" border=0 usemap=\"#" + filename + "\">";
    		}
    		else if(value == "error")
    		{
    			select.innerHTML = "Graph File Does Not Found";
    		}
    		else
    		{
    			select.innerHTML = "No Record Found";
    		}
    	}
  	}
}


function GetTotalRevenueHourWise(dateTime){
	
	var xmlhttp;
  	//document.getElementById("ajax_loading").style.visibility = 'visible'; 
	var url = "./Dashboard/GetTotalRevenueHourWise.jsp?dateTime="+dateTime;
	
	if (window.XMLHttpRequest)
  	{// code for IE7+, Firefox, Chrome, Opera, Safari
  		xmlhttp = new XMLHttpRequest();
  	}
	else
  	{// code for IE6, IE5
  		xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
  	}
	xmlhttp.open("GET", url, true);
	xmlhttp.send();
	
	xmlhttp.onreadystatechange = function()
  	{
  		if (xmlhttp.readyState==4 && xmlhttp.status==200)
    	{
    		var select ;
    		
    		//document.getElementById("ajax_loading").style.visibility = 'hidden';
    		select = document.getElementById("totalRevenue");
    		var select_2 = document.createElement("span");
    		select_2.innerHTML = xmlhttp.responseText;
    		var responseData = select_2.getElementsByTagName("div");
    		
    		
    		var value = responseData[0].getAttribute("value");
    		if(value == "data")
    		{
    			fileURL = responseData[0].getAttribute("fileURL");
    			filename = responseData[0].getAttribute("filename");
    			select.innerHTML = "<img src=\"" + fileURL + "\" border=0 usemap=\"#" + filename + "\">";
    		}
    		else if(value == "error")
    		{
    			select.innerHTML = "Graph File Does Not Found";
    		}
    		else
    		{
    			select.innerHTML = "No Record Found";
    		}
    	}
  	}
}


function GetTotalCostHourWise(dateTime){
	
	var xmlhttp;
  	//document.getElementById("ajax_loading").style.visibility = 'visible'; 
	var url = "./Dashboard/GetTotalCostHourWise.jsp?dateTime="+dateTime;
	
	if (window.XMLHttpRequest)
  	{// code for IE7+, Firefox, Chrome, Opera, Safari
  		xmlhttp = new XMLHttpRequest();
  	}
	else
  	{// code for IE6, IE5
  		xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
  	}
	xmlhttp.open("GET", url, true);
	xmlhttp.send();
	
	xmlhttp.onreadystatechange = function()
  	{
  		if (xmlhttp.readyState==4 && xmlhttp.status==200)
    	{
    		var select ;
    		
    		//document.getElementById("ajax_loading").style.visibility = 'hidden';
    		select = document.getElementById("totalCost");
    		var select_2 = document.createElement("span");
    		select_2.innerHTML = xmlhttp.responseText;
    		var responseData = select_2.getElementsByTagName("div");
    		
    		
    		var value = responseData[0].getAttribute("value");
    		if(value == "data")
    		{
    			fileURL = responseData[0].getAttribute("fileURL");
    			filename = responseData[0].getAttribute("filename");
    			select.innerHTML = "<img src=\"" + fileURL + "\" border=0 usemap=\"#" + filename + "\">";
    		}
    		else if(value == "error")
    		{
    			select.innerHTML = "Graph File Does Not Found";
    		}
    		else
    		{
    			select.innerHTML = "No Record Found";
    		}
    	}
  	}
}

function GetTotalProfitHourWise(dateTime){
	
	var xmlhttp;
  	//document.getElementById("ajax_loading").style.visibility = 'visible'; 
	var url = "./Dashboard/GetTotalProfitHourWise.jsp?dateTime="+dateTime;
	
	if (window.XMLHttpRequest)
  	{// code for IE7+, Firefox, Chrome, Opera, Safari
  		xmlhttp = new XMLHttpRequest();
  	}
	else
  	{// code for IE6, IE5
  		xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
  	}
	xmlhttp.open("GET", url, true);
	xmlhttp.send();
	
	xmlhttp.onreadystatechange = function()
  	{
  		if (xmlhttp.readyState==4 && xmlhttp.status==200)
    	{
    		var select ;
    		
    		//document.getElementById("ajax_loading").style.visibility = 'hidden';
    		select = document.getElementById("totalProfit");
    		var select_2 = document.createElement("span");
    		select_2.innerHTML = xmlhttp.responseText;
    		var responseData = select_2.getElementsByTagName("div");
    		
    		
    		var value = responseData[0].getAttribute("value");
    		if(value == "data")
    		{
    			fileURL = responseData[0].getAttribute("fileURL");
    			filename = responseData[0].getAttribute("filename");
    			select.innerHTML = "<img src=\"" + fileURL + "\" border=0 usemap=\"#" + filename + "\">";
    		}
    		else if(value == "error")
    		{
    			select.innerHTML = "Graph File Does Not Found";
    		}
    		else
    		{
    			select.innerHTML = "No Record Found";
    		}
    	}
  	}
}


function GetRatingStatistics(dateTime){
	
	var xmlhttp;
  	document.getElementById("rating_loading").style.display = 'block';
	var url = "./Dashboard/GetRatingStatistics.jsp?dateTime="+dateTime;
	
	if (window.XMLHttpRequest)
  	{// code for IE7+, Firefox, Chrome, Opera, Safari
  		xmlhttp = new XMLHttpRequest();
  	}
	else
  	{// code for IE6, IE5
  		xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
  	}
	xmlhttp.open("GET", url, true);
	xmlhttp.send();
	
	xmlhttp.onreadystatechange = function()
  	{
  		if (xmlhttp.readyState==4 && xmlhttp.status==200)
    	{
			document.getElementById("rating_loading").style.display = 'none'; 
			var tableToShow = document.getElementById("RatingData");
    		tableToShow.innerHTML = xmlhttp.responseText;
			
			
			var jQNC = jQuery.noConflict();
			jQNC("table.tablesorter tr:even").addClass("d1");
			jQNC("table.tablesorter tr:odd").addClass("d0");
    	}
  	}
}
function setAllIntervals(dateTime, Interval)
{
	setInterval("GetMediationStatistics('" + dateTime + "')", Interval * 1000);
}

function GetMediationStatistics(dateTime){
	
	var xmlhttp;
	
	document.getElementById("MediationData").style.display = 'none'; 
  	document.getElementById("mediation_loading").style.display = 'block';
	
	var url = "./Dashboard/GetMediationStatistics.jsp?dateTime="+dateTime;
	
	if (window.XMLHttpRequest)
  	{// code for IE7+, Firefox, Chrome, Opera, Safari
  		xmlhttp = new XMLHttpRequest();
  	}
	else
  	{// code for IE6, IE5
  		xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
  	}
	xmlhttp.open("GET", url, true);
	xmlhttp.send();
	
	xmlhttp.onreadystatechange = function()
  	{
  		if (xmlhttp.readyState==4 && xmlhttp.status==200)
    	{
			document.getElementById("mediation_loading").style.display = 'none'; 
			var tableToShow = document.getElementById("MediationData");
    		tableToShow.innerHTML = xmlhttp.responseText;
			document.getElementById("MediationData").style.display = 'block'; 
			
			
			var jQNC = jQuery.noConflict();
			jQNC("table.tablesorter tr:even").addClass("d1");
			jQNC("table.tablesorter tr:odd").addClass("d0");
    	}
  	}
}



