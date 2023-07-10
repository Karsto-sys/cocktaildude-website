/* 
 Created on : Jul 4, 2017, 12:43:10 AM
 Author     : Karsten Schott
 */

function myFunction() {
  var x = document.getElementById("myDIV");
  if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }
}
    //init function
    function init() {
        var secondFeature = $('#features').offset().top;
        var scroll = $(window).scrollTop();
        if (scroll >= 150) {
            $('.sticky-navigation').css({"background-color": '#d81b60'});
        } else {
            $('.sticky-navigation').css({"background-color": 'transparent'});
        }
        if (scroll >= secondFeature - 200) {
            $(".mobileScreen").css({'background-position': 'center top'});
        }
        return false;
    }


$('ul.root-tags').mouseleave(function() {
    $(this).find('ul').slideUp('slow');
});

$("ul.root-tags li").hover(function() {
    $(this).find('ul').slideDown('slow');
})