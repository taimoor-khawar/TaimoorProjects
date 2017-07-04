// JavaScript Document
$( document ).ready(function() {
   $('#browser .expandable .folder').click(function(){
	    $('#browser .expandable ul').slideUp();
	$(this).parents("li").children("ul").slideDown("slow", function() {
    // Animation complete.
  });
   $('#browser .expandable .folder.file').click(function(){
	   $("#iframeid").attr("src", $(this).children("a").attr('href'));
	   });
	//$(this).find( "ul" ).slideDown("slow", function() {
//    // Animation complete.
//  });
	return false;
	});
   $('.right-nav .right-nav-button').click(function(){
	  $('.right-nav .hide-part').toggle("slow", function() {
    // Animation complete.
  });
	//$(this).find( "ul" ).toggle();
	return false;
	});
	$('.user-drop').click(function(){
		$('.user-menu').slideToggle( "slow", function() {
    // Animation complete.
  });
		return false;
	});
	$('body, .content-area').click(function(){
		$('.user-menu').slideUp();
  		$('.right-nav .hide-part').slideUp();
	});
$('.content-area iframe').iframeTracker({
		blurCallback: function(){
			$('.user-menu').slideUp();
  		$('.right-nav .hide-part').slideUp();
			
		},
		overCallback: function(element){
			this._overId = $(element).parents('.iframetrack').attr('id'); // Saving the iframe wrapper id
		},
		outCallback: function(element){
			this._overId = null; // Reset hover iframe wrapper id
		},
		_overId: null
	});
});
$(function() {
    $("#datePickerHandle1, #datePickerHandle2, #datePickerHandle3, #datePickerHandle4, #datePickerHandle5, #datePickerHandle6").datepicker({
        showOn: "button",
        buttonImage: "../images/calendar.png",
        buttonImageOnly: true,
        buttonText: "Open Calendar",
        dateFormat: "dd/mm/yy",
        onSelect: function(dateText, datePicker) {
           $(this).parents(".datepicker").children("#dateDay").val(datePicker.selectedDay);
           $(this).parents(".datepicker").children("#dateMonth").val(datePicker.selectedMonth + 1);
           $(this).parents(".datepicker").children("#dateYear").val(datePicker.selectedYear);
        },
        beforeShow: function(datePickerElement, datePicker) {
            var nvl = function(val1, val2) {
                val1 = $.trim(val1);
                return (val1 ? val1 : val2)
            };
            var date = new Date();
 			var selectedDate = nvl($(this).parents(".datepicker").children("#dateDay").val(), date.getDate()) + "/"
                             + nvl($(this).parents(".datepicker").children("#dateMonth").val(), date.getMonth() + 1) + "/"
                             + nvl($(this).parents(".datepicker").children("#dateYear").val(), date.getFullYear());
            //var selectedDate = nvl($(this).parents(".datepicker").children("#dateDay").val(), date.getDate()) + "/"
//                             + nvl($("#dateMonth").val(), date.getMonth() + 1) + "/"
//                             + nvl($("#dateYear").val(), date.getFullYear());
 
            $(this).datepicker("setDate", selectedDate);
        }
    });
});
    (function($){
        $(window).load(function(){
            $(".scroll-form-bdy, .left-sidbar").mCustomScrollbar();
			theme:"dark"
			axis:"x" // vertical and horizontal scrollbar
        });
    })(jQuery);