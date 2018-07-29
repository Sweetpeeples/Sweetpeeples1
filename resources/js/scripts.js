// call CSS Vars function 
cssVars();

// open and close the nav

$('.nav-prompt').click(function() {

    if($('.nav-inner').attr('aria-expanded') == 'false') {
        $('.nav-inner').attr('aria-expanded', true);
    } else {
        $('.nav-inner').attr('aria-expanded', false);
    }

});