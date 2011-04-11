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
        // Appearance
        width               : null,      // Override the default CSS width
        height              : null,      // Override the default CSS height
        easing              : "easeOutBounce",   

        // Navigation
        buildArrows         : false,      // If true, builds the forwards and backwards buttons
        buildNavigation     : true,      // If true, builds a list of anchor links to link to each panel
        enableNavigation    : true,      // if false, navigation links will still be visible, but not clickable.
        appendControlsTo    : $('#navigation'),      // A HTML element (jQuery Object, selector or HTMLNode) to which the controls will be appended if not null
        autoPlay            : false,
        navigationFormatter : function(index, panel){
          return " Panel #" + index; // This would have each tab with the text 'Panel #X' where X = index
        }        
    });
    
    // External Slider Navigation
/*
    $('#about').click(function() {
        $('#slider').anythingSlider(1);

    });
    $('#more').click(function() {
        $('#slider').anythingSlider(2);
    });
*/


});

 
