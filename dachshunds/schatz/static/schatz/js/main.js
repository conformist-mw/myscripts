$(document).ready(function(){
	var path = window.location.pathname;
	var page = path.split('/').pop();
	$('nav > ul > li > a[href="'+page+'"]').parent().addClass('active');
});
$('a#skype').click(Skype.tryAnalyzeSkypeUri('call', '0'));
var api_key = 'AIzaSyDm2407SoTzY0fmc3khnW8oGkgd0GtM9mU';
function initMap() {
  var home = {lat: 48.52446699954304, lng: 35.02604320199964};
  var map = new google.maps.Map(document.getElementById('map'), {
    zoom: 14,
    center: home
  });
  var marker = new google.maps.Marker({
  	position: home,
    map: map
  });
}
