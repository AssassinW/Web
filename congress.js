

$("#menu-toggle").click(function() {
        $("#wrapper").toggleClass("toggled");
});

$('#legislators').click(function(){
  $('#page-content-1').show();
  $('#page-content-2').hide();
  $('#page-content-3').hide();
  $('#page-content-4').hide();
});

$('#bills').click(function(){
  $('#page-content-2').show();
  $('#page-content-1').hide();
  $('#page-content-3').hide();
  $('#page-content-4').hide();
});

$('#committees').click(function(){
  $('#page-content-3').show();
  $('#page-content-1').hide();
  $('#page-content-2').hide();
  $('#page-content-4').hide();
});
$('#favorites').click(function(){
  $('#page-content-4').show();
  $('#page-content-1').hide();
  $('#page-content-2').hide();
  $('#page-content-3').hide();
});


$(document).ready(function(){
  $('#page-content-1').show();
  $('#page-content-2').hide();
  $('#page-content-3').hide();
  $('#page-content-4').hide();
});
