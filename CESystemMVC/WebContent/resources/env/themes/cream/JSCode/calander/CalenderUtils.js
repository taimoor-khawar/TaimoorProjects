//////////////////  UTILS ////////////////////////////
function isLeapYear(y)
{
	return !(y % 4) && (y % 100) || !(y % 400) ? true : false;
}
//01,08,2011
function getNextDate(day, mon, yr)
{	
	var date = parseInt(day);
	var month = parseInt(mon);
	var year = parseInt(yr);
	
	var dateToReturn = "";
	if (month == 4 || month == 6 || month == 9 || month == 11)
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
	else if(parseInt(month) == 2)
	{
		if(isLeapYear(year) == false && date == 28)
		{
			date = 1;
			month++;
		}
		else if((isLeapYear(year) && date == 29))
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
			date = parseInt(date) + 1;
			//date++;
		}
	}
	dateToReturn += year + "-";
	if(parseInt(month) < 10)
	{
		dateToReturn += "0" + parseInt(month) + "-";
	}
	else
	{
		dateToReturn += month + "-";
	}
		
	if(parseInt(date) < 10)
	{
		dateToReturn += "0" + parseInt(date);
	}
	else
	{
		dateToReturn += date;
	}	
	return dateToReturn;
}

function getPrevDate(day, mon, yr)
{
	var date = parseInt(day);
	var month = parseInt(mon);
	var year = parseInt(yr);
	
	var dateToReturn = "";
	if (month - 1 == 4 || month - 1 == 6 || month - 1 == 9 || month - 1 == 11)
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
	if(parseInt(month) < 10)
	{
		dateToReturn += "0" + parseInt(month) + "-";
	}
	else
	{
		dateToReturn += month + "-";
	}
		
	if(parseInt(date) < 10)
	{
		dateToReturn += "0" + parseInt(date);
	}
	else
	{
		dateToReturn += date;
	}	
	return dateToReturn;
}

//////////////////////////////////////////////////////