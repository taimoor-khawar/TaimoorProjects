/// <reference path="../jquery.js" />
/*
jquery-makeTableScrollable.js
Version 0.1 - 5/30/2011
Make Table Scrollable plug-in

(c) 2011 Rick Strahl, West Wind Technologies 
www.west-wind.com

Licensed under MIT License
http://en.wikipedia.org/wiki/MIT_License
*/
(function ($) {

$.fn.makeTableScrollable = function (options) {
    return this.each(function () {
        var $table = $(this);

        var opt = {
            // height of the table
            height: "400px",
            // right padding added to support the scrollbar
            rightPadding: "0px",
            // cssclass used for the wrapper div
            cssClass: "blackborder"
        }
        $.extend(opt, options);

        var $thead = $table.find("thead");
        var $ths = $thead.find("th");
        var id = $table.attr("id");
        var cssClass = $table.attr("class");
		var $tds = $table.find("tbody tr:first td");
		
        if (!id)
            id = "_table_" + new Date().getMilliseconds().ToString();

        
		$table.width("100%");
		
        // force full sizing on each of the th elemnts
		//var colsWidths = new Array();
        $ths.each(function (index) {
            var $th = $(this);
            $th.css("width", $th.width());
        });
		
		// force full sizing on each of the td elemnts of First Row
		$tds.each(function (index) {
            var $td = $(this);
            $td.css("width", $td.width());
        });
		
        // Create the table wrapper div
        var $tblDiv = $("<div>").css({ position: "relative",
            overflow: "hidden",
            overflowY: "scroll"
        }).addClass(opt.cssClass);

        var width = $table.width();
        $tblDiv.width(width).height(opt.height)
                .attr("id", id + "_wrapper")
                .css("border-top", "none");
        // Insert before $tblDiv
        $tblDiv.insertBefore($table);
        // then move the table into it
        $table.appendTo($tblDiv);

        // Clone the div for header
        var $hdDiv = $tblDiv.clone();
        $hdDiv.empty();
        var width = $table.width();
        $hdDiv.attr("style", "")
                .css("border-bottom", "none")
                .width(width)
                .attr("id", id + "_wrapper_header");

		// Create a copy of the table and remove all children
		var $newTable = $($table).clone(true);
		
        $newTable.empty()
                    .attr("id", $table.attr("id") + "_header")
					.attr("class", cssClass);
		$newTable.css = $table.css;
		
        $thead.appendTo($newTable);
        $hdDiv.insertBefore($tblDiv);
        $newTable.appendTo($hdDiv);
		
		
		/*
		////////////////////////////////////////////////////////////////
		// size the header columns to match the body
		var allBodyCols = $table.find('tbody tr:first td');
		$newTable.find('thead tr th').each(function(index) {
			var desiredWidth = getWidth($(allBodyCols[index]));
			$(this).css({ width: desiredWidth + 'px' });
		});
		////////////////////////////////////////////////////////////////
		*/
    });
	
	
	function getWidth(td) {
		if ($.browser.msie) { return $(td).outerWidth() - 1; }
		if ($.browser.mozilla) { return $(td).width(); }
		if ($.browser.safari) { return $(td).outerWidth(); }
		return $(td).outerWidth();
	};
}
})(jQuery);