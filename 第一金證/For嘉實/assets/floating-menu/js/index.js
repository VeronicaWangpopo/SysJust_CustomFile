jQuery('.at-floating-navigation__button').on('click', function(e) {
  e.preventDefault();
  
  jQuery(this).parent().toggleClass('at-floating-navigation--active');
});