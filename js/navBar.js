//! Not started
$(document).ready(() => {
  // Get width
  const sizeLoad = $(window).width();
  if (sizeLoad <= 790) {
    $('#navBarId').removeClass('navBar');
    $('#navBarId').addClass('navBarHidden');
    $('#hambNavMenu').removeClass('hidden');
    //   $('#navBarId').addClass('mobileNavBar');
    $('#hambNavMenu').click((e) => {
      console.log(e);
      $('#navBarId').toggleClass('mobileNavBar');
      $('#hambNavMenu').toggleClass('hambMenuShowing');
    });
  }
  $(window).resize(() => {
    const size = $(window).width();
    if (size <= 790) {
      $('#navBarId').removeClass('navBar');
      $('#navBarId').addClass('navBarHidden');
      $('#hambNavMenu').removeClass('hidden');
      //   $('#navBarId').addClass('mobileNavBar');
      $('#hambNavMenu').click((e) => {
        console.log(e);
        $('#navBarId').toggleClass('mobileNavBar');
        $('#hambNavMenu').toggleClass('hambMenuShowing');
      });
    } else if (!$('#navBarId').hasClass('navBar')) {
      $('#navBarId').addClass('navBar');
      $('#navBarId').removeClass('navBarHidden');
      $('#hambNavMenu').addClass('hidden');
      $('#hambNavMenu').addClass('transition');
      $('#navBarId').removeClass('mobileNavBar');
    }
  });
});
