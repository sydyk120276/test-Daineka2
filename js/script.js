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

document.querySelector(".burger-block").addEventListener('click', function () {
  document.querySelector(".burger").classList.toggle("active")
  document.querySelector(".burger-span").classList.toggle("active")
  document.querySelector(".burger-menu").classList.toggle("active")
})

document.querySelector("#plus").addEventListener('click', function () {
  document.querySelector(".content__form").classList.add("in-active")
  document.querySelector(".content__description").classList.add("active")
})
document.querySelector("#close").addEventListener('click', function () {
  document.querySelector(".content__form").classList.remove("in-active")
  document.querySelector(".content__description").classList.remove("active")
})


$(".header-link").click(function () {
  $(".header-link").removeClass("active");
  $(this).addClass("active");
});