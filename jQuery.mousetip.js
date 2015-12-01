// Plugin: jQuery.mousetip
// Source: github.com/nathco/jQuery.mousetip
// Author: Nathan Rutzky
// Update: 1.00
    
$.fn.mousetip = function(tip, x, y) {
    
    var $this = $(this);
    
    $this.hover(function() {
        
        $(tip, this).show();
    
    }, function() {
    
        $(tip, this).hide().removeAttr('style');
    
    }).mousemove(function(e) {
        var offset = $(this).offset();
        var mouseX = e.pageX + (x || 10) - offset.left;
        var mouseY = e.pageY + (y || 10) - offset.top;
    
        $(tip, this).show().css({
            
            top:mouseY, left:mouseX
            
        });
    });
};
