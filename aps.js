<!-- scripts -->
<script src="https://ajax.googleapis.com/ajax/libs/jquery/1.7.1/jquery.min.js"></script>  
<script src="http://static.tumblr.com/iuw14ew/VSQma1786/jquery.style-my-tooltips.js"></script>
 
<script>
jQuery.noConflict();
(function($){
$(document).ready(function(){
$("a[title],img[title],[title]").style_my_tooltips({
tip_follows_cursor:true,
tip_delay_time:30,
tip_fade_speed:300,
attribute:"title"
});
});
})(jQuery);
</script>