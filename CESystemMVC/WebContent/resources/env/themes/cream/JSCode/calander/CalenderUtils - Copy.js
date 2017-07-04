//////////////////  UTILS ////////////////////////////
function isLeapYear(y)
{
	return !(y % 4) && (y % 100) || !(y % 400) ? true : false;
}

function getNextDate(date, month, year)
{
	var dateToReturn = "";
	mon_30 = ["4", "6", "9", "11"];
	if (mon_30.indexOf(parseInt(month+"")+"") != -1)
	{
		if(date == 30)
		{
			date = 1;
			month++;
		}
		else
		{
			date++;
		}
	}
	else if(month == 2)
	{
		if((isLeapYear(year) && date == 29) || date == 28)
		{
			date = 1;
			month++;
		}
		else
			date++;
	}
	else
	{
		if(date == 31 && month == 12)
		{
			date = 1;
			month = 1;
			year++;
		}
		else if(date == 31)
		{
			date = 1;
			month++;
		}
		else
		{
			date++;
		}
	}
	dateToReturn += year + "-";
	if(parseInt(month).length < 2)
	{
		dateToReturn += "0" + month + "-";
	}
	else
	{
		dateToReturn += month + "-";
	}
		
	if(parseInt(date).length < 2)
	{
		dateToReturn += "0" + date;
	}
	else
	{
		dateToReturn += date;
	}	
	return dateToReturn;
}

function getPrevDate(date, month, year)
{
	var dateToReturn = "";
	mon_30 = ["4", "6", "9", "11"];
	if (mon_30.indexOf(parseInt(month-1+"")+"") != -1)
	{
		if(date == 1)
		{
			date = 30;
			month--;
		}
		else
		{
			date--;
		}
	}
	else if(month - 1 == 2)
	{
		if(isLeapYear(year) && date == 1)
		{
			date = 29;
			month--;
		}
		else if (date == 1)
			date = 28;
		else
			date--;
	}
	else
	{
		if(date == 1 && month == 1)
		{
			date = 31;
			month = 12;
			year--;
		}
		else if(date == 1)
		{
			date = 31;
			month--;
		}
		else
		{
			date--;
		}
	}
	dateToReturn += year + "-";
	if(month.length < 2)
		dateToReturn += "0" + month + "-";
	else
		dateToReturn += month + "-";
		
	if(date.length < 2)
		dateToReturn += "0" + date;
	else
		dateToReturn += date;
	return dateToReturn;
}

//////////////////////////////////////////////////////