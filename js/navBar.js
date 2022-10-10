//! Not started
$(document).ready(() => {
  // Get width
  const sizeLoad = $(window).width();
  if (sizeLoad <= 790) {
    $('#navBarId').removeClass('navBar');
    $('#navBarId').addClass('navBarHidden');
  }
  $(window).resize(() => {
    const size = $(window).width();
    if (size <= 790) {
      $('#navBarId').removeClass('navBar');
      $('#navBarId').addClass('navBarHidden');
    } else if (!$('#navBarId').hasClass('navBar')) {
      $('#navBarId').addClass('navBar');
    } else if ($('#navBarId').hasClass('navBarHidden')) {
      $('#navBarId').removeClass('navBarHidden');
    }
  });
});
