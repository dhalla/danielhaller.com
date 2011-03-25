
$(window).load(function() {
    // BG-Image
	$("#background").fullBg();
});

$(document).ready(function() {

    // All Colums should have an equal height
    $("li.col").equalHeights(100,300);

    $(".imprint a").toggle(
        function() {
            $("ul.content").hide();  
            $(this).text('Zurück zur Homepage');
        }, function() {
            $("ul.content").show();        
            $(this).text('Rechtliches/Impressum');
        }
    );

});

 
