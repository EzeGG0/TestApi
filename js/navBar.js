//! Not started
$(document).ready(() => {
  // Get width
  // Event Lister to display the nav
  $('#hambNavMenu').click((e) => {
    console.log(e);
    $('#navBarId').toggleClass('mobileNavBar');
    $('#hambNavMenu').toggleClass('hambMenuShowing');
    $('#navBarId').addClass('navBarHidden');
    $('.navBar__link').removeClass('navBar__link--hover');
  });
  // Functin to get the Width of the window
  function widthGeter() {
    return $(window).width();
  }
  // Get the width in the load
  let sizeLoad = widthGeter();
  // Function for the resize
  function sizeLoadFunc() {
    if (sizeLoad <= 790) {
      $('#navBarId').removeClass('navBar');
      $('#navBarId').addClass('navBarHidden');
      $('#hambNavMenu').removeClass('hidden');
    } else if (sizeLoad > 790) {
      $('#navBarId').addClass('navBar');
      $('#hambNavMenu').addClass('hidden');
      $('#navBarId').removeClass('navBarHidden');
      $('#navBarId').removeClass('mobileNavBar');
      $('#hambNavMenu').removeClass('hambMenuShowing');
    }
    console.log('resize');
  }
  // Event listener in the resize
  $(window).resize(() => {
    sizeLoad = widthGeter();
    sizeLoadFunc(sizeLoad);
  });
  sizeLoadFunc(sizeLoad);

  // Hover in the mobileNavBar
  $('.navBar__link').click((e) => {
    e.preventDefault();
    $(e.currentTarget).toggleClass('navBar__link--hover');
  });
});
