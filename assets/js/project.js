// Any project-specific code — listeners and triggers for plugins

$(document).ready(function() {

  // Animate some scrolling for smoother transitions 
  $(function() {
    $('.js-smoothscroll').click(function() {
      if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
        var target = $(this.hash);
        target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
        if (target.length) {
          $('html,body').animate({
            scrollTop: target.offset().top
          }, 500);
        }
      }
    });
  });

});
