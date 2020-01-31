$(document).ready(function(){
    
    $('.toggler').live('click',function(){
      $(this).parent().children().toggle();  //swaps the display:none between the two spans
      $(this).parent().parent().find('.toggled_content').slideToggle();  //swap the display of the main content with slide action

  });
    
});