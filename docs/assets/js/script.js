$(document).ready(function () {

  $('#js-buttonHamburger').click(function () {

      $('body').toggleClass('is-drawerActive');
      $('#nav').toggleClass('in');
      
      if ($(this).attr('aria-expanded') == 'false') {
        $(this).attr('aria-expanded', true);
      } else {
        $(this).attr('aria-expanded', false);
      }
    });
  });