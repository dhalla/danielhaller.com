    <!-- JS -->    
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/1/jquery.min.js" type="text/javascript"></script>
    
    <?php if (!$_GET['print']): ?>
    
    <script type="text/javascript" src="/js/jquery.fullBg.js"></script>
    <script type="text/javascript" src="/js/jquery.anythingslider.min.js"></script>  
    <script type="text/javascript" src="/js/jquery.equalheights.js"></script>
    <script type="text/javascript" src="/js/jquery.easing.1.2.js"></script>   
    <script type="text/javascript" src="/js/main.js"></script> 
          
    <!-- Use minified versions instead of single Files 
    <script type="text/javascript" src="/min/?g=js_min_all"></script>
    -->
    
    <?php else: ?>
     
        <script type="text/javascript">
            window.print();
        </script>
    
    <?php endif; ?>   
    
    <!-- Analytics -->
    <script type="text/javascript">
      var _gaq = _gaq || [];
      _gaq.push(['_setAccount', 'UA-22659114-1']);
      _gaq.push(['_setDomainName', '.danielhaller.com']);
      _gaq.push(['_trackPageview']);

      (function() {
        var ga = document.createElement('script'); ga.type = 'text/javascript'; ga.async = true;
        ga.src = ('https:' == document.location.protocol ? 'https://ssl' : 'http://www') + '.google-analytics.com/ga.js';
        var s = document.getElementsByTagName('script')[0]; s.parentNode.insertBefore(ga, s);
      })();
    </script>    
    


    