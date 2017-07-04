$(document).ready(function() {
                $(".chzn-select").chosen(); 
                $(".chzn-select-deselect").chosen({allow_single_deselect:true});
                $("#btn").click(function() {
                    alert("hi");
                    var list=$("#chzn-select").val();
                    alert(list);

                });
                $("#cont tr:odd").css("background-color", "#fff");
                

                $("#isHeadDep").click(function() {
                    
                    if( $('input[name=isHeadDep]').is(':checked')) {
                        $("#reportTo").hide();
                        $("#reportTo1").show();
                        $("#reportTo").attr("disabled","disabled");
                        $("#reportTo1").removeAttr("disabled")
                    }else{
                        $("#reportTo1").hide();  
                        $("#reportTo").show();
                        $("#reportTo1").attr("disabled","disabled")
                        $("#reportTo").removeAttr("disabled")
                    }

                });
                $("#reportTo option:first").attr('selected','selected');

            });