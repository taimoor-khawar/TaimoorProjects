              jQuery(document).ready(function() {
      			
      			
                  jQuery("#fromDate").dynDateTime({
                      showsTime: true,
                      ifFormat: "%m/%d/%Y %H:%M",
                      daFormat: "%l;%M %p, %e %m,  %Y",
                      align: "TL",
                      electric: true,
                      singleClick: false,
                      displayArea: ".siblings('.dtcDisplayArea')",
                      button: ".next()" //next sibling
                  });
                  
				      jQuery("#toDate").dynDateTime({
                      showsTime: true,
                      ifFormat: "%m/%d/%Y %H:%M",
                      daFormat: "%l;%M %p, %e %m,  %Y",
                      align: "TL",
                      electric: true,
                      singleClick: false,
                      displayArea: ".siblings('.dtcDisplayArea')",
                      button: ".next()" //next sibling
                  });

				      jQuery("#stHolidayDate").dynDateTime({
	                      showsTime: true,
	                      ifFormat: "%m/%d/%Y %H:%M",
	                      daFormat: "%l;%M %p, %e %m,  %Y",
	                      align: "TL",
	                      electric: true,
	                      singleClick: false,
	                      displayArea: ".siblings('.dtcDisplayArea')",
	                      button: ".next()" //next sibling
	                  });
				      
				      
				      jQuery("#stActivationDate").dynDateTime({
	                      showsTime: true,
	                      ifFormat: "%m/%d/%Y %H:%M",
	                      daFormat: "%l;%M %p, %e %m,  %Y",
	                      align: "TL",
	                      electric: true,
	                      singleClick: false,
	                      displayArea: ".siblings('.dtcDisplayArea')",
	                      button: ".next()" //next sibling
	                  });
  		
              });