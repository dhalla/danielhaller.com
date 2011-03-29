$(window).load(function() {
    
    // BG-Image
	$("#background").fullBg();

});

$(document).ready(function() {

    // All Colums with equal height
    $("li.col").equalHeights();

    // Initialize anything slider
    // see options http://css-tricks.com/examples/AnythingSlider/
    $('#slider').anythingSlider({
        buildArrows         : false, 
        buildNavigation     : false,
        autoPlay            : false,
        easing              : "easeOutBounce"
    });
    
    // External Slider Navigation
    $('#about').click(function() {
        $('#slider').anythingSlider(1);

    });
    $('#more').click(function() {
        $('#slider').anythingSlider(2);
    });


});

 
