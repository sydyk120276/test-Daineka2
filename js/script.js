// InputMask
(function ($) {
  $('input[type="tel"]').inputmask("+7 ( 9 9 9) 9 9 9 - 9 9 - 9 9");
})(jQuery);

// MODAL
var modal = document.getElementById("myModal");

var btn = document.getElementById("myBtn");
var span = document.getElementsByClassName("close")[0];

btn.onclick = function () {
  modal.style.opacity = 1;
  modal.style.zIndex = 1;
};

span.onclick = function () {
  modal.style.opacity = 0;
  modal.style.zIndex = 0;
};
window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.opacity = 0;
    modal.style.zIndex = 0;
  }
};
