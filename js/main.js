/*
    
    TODO:
    
    - xxxxxxxxx IE durchchecken
    - xxxxxxxxx Mobile Version online packen
    - automatische Umleitung erstellen (einmaliger! JS-Redirect m. Cookie und Confirm-Box, Achtung, bei Click auf Std-Website auch Cookie setzen!)
        
    - xxxxxxxxx IE6/7 Fallback und Hinweis
    - xxxxxxxxx Performanceoptimierung (Minify installieren)
    - xxxxxxxxx NoJS
    - xxxxxxxxx Druckversion
    - xxxxxxxxx Validierung und JS-Fehler beachten

    - Navigation verschönern (Bulletpoints, L/R-Pfeile und Tooltips)
    - Reload für Rechliches/Impressum verhindern, One-Pager erstellen, History-Fkt. bedenken
    - href-Attribute der Druckversion auslesen und anzeigen

*/

$(window).load(function() {
    
    // BG-Image
	$("#background").fullBg();

});


$(document).ready(function() {

    // JS is enabled
    $("body").removeClass('nojs');

    // All Colums with equal height
    $("li.col").equalHeights();
    
    // Initialize anything slider
    // https://github.com/ProLoser/AnythingSlider/wiki/
    $('#slider').anythingSlider({
        // Appearance
        width               : null,      // Override the default CSS width
        height              : null,      // Override the default CSS height
        easing              : "easeOutBounce",   

        // Navigation
        buildArrows         : false,
        buildNavigation     : true,      // If true, builds a list of anchor links to link to each panel
        enableNavigation    : true,      // if false, navigation links will still be visible, but not clickable.
        appendControlsTo    : $('#navigation'),      // A HTML element (jQuery Object, selector or HTMLNode) to which the controls will be appended if not null
        autoPlay            : false,
        navigationFormatter : function(index, panel) {
            return panel.attr('title'); 
        },        
        
        // Callbacks
        onBeforeInitialize  : null,      // Callback before the plugin initializes
        onInitialized       : null,      // Callback when the plugin finished initializing
        onShowStart         : null,      // Callback on slideshow start
        onShowStop          : null,      // Callback after slideshow stops
        onShowPause         : null,      // Callback when slideshow pauses
        onShowUnpause       : null,      // Callback when slideshow unpauses - may not trigger properly if user clicks on any controls
        onSlideInit         : null,      // Callback when slide initiates, before control animation
        onSlideBegin        : function() { checkArrowVisibility(); },      // Callback before slide animates
        onSlideComplete     : function() { checkArrowVisibility(); }       // Callback when slide completes       
    });
           
    DHA.init();
    
});


// Check if arrow to Profil-Picture must to be visible
function checkArrowVisibility() {

    $('#navigation a:not(.panel2)').click(function() {
        $('#personalArrow').fadeOut("fast");
        return;
    }); 
    
    if ($('#about').hasClass('activePage')) {
        $('#personalArrow').fadeIn("fast");
    } else {
        $('#personalArrow').fadeOut("fast");
    };
    
};
    
    
var DHA = {
 
    init: function() {

    }
    
}
