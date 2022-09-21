$(function () {
    $('header .navbars .right').click(function(){
        $('.menu').animate({
            "position" : "absolute",
            "right" : "30%"
        } , 1000);
        $(".navbars").css({
            "padding" : "0px"
        });
      
    })
});
$('header .navbars .menu span').click(function(){
    $('.menu').animate({
        "position" : "absolute",
        "right" : "200%",
        "color" : "#fff"
    } , 1000)
})