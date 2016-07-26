document.addEventListener('DOMContentLoaded', function(){

  var socialIcons = document.querySelector('.social-icons');
  var downArrow = document.querySelector('.down-arrow');

  var scrollHandler = function() {
    socialIcons.style.right = '20px';
    downArrow.style.display = 'none';
    window.removeEventListener('scroll', scrollHandler);
  };

  window.addEventListener('scroll', scrollHandler);

});

