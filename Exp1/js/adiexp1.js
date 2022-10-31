$(document).ready(function() {
    console.log("Page Loaded"); 
  });
  $("#Butt").click(function(){
    $("#Butt").removeClass("btn-secondary");
    $("#Butt").addClass("btn-primary");
    console.log("Butt clicked");
  });

  $("#Lap").click(function(){
    $("#Lap").removeClass("btn-secondary");
    $("#Lap").addClass("btn-primary");
    console.log("Butt clicked");
  });
  $("#b1").click(function(){
    $("#b1").removeClass("bg-secondary");
    $("#b1").addClass("bg-primary");
    console.log("Butt clicked");
  });