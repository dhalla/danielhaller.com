<?php
/**
 * Groups configuration for default Minify implementation
 * @package Minify
 */

/** 
 * You may wish to use the Minify URI Builder app to suggest
 * changes. http://yourdomain/min/builder/
 **/

return array(

    'css_min' => array(
        '//css/anythingslider.css', 
        '//css/main.css'
    ),
    
    'js_min_all' => array(
        '//js/jquery.equalheights.js', 
        '//js/jquery.fullBg.js',
        '//js/jquery.easing.1.2.js',
        '//js/jquery.anythingslider.min.js',
        '//js/main.js'
    ),

    'js_min_unimportant' => array(
        '//js/jquery.equalheights.js', 
        '//js/jquery.easing.1.2.js',
        '//js/main.js'
    ),
 
);