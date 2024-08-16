document.addEventListener("DOMContentLoaded", () => {
  document.querySelector(".menu-toggle").addEventListener("click", function () {
    document.querySelector(".menu-items ul.nav").classList.toggle("show");
    document.querySelector(".wrapper").classList.toggle("activeBg");
  });
});

const scrollToTopBtn = document.getElementById("scrollToTopBtn");

window.onscroll = function () { scrollFunction() };

function scrollFunction() {
  if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
    scrollToTopBtn.style.display = "block";
  } else {
    scrollToTopBtn.style.display = "none";
  }
}

scrollToTopBtn.onclick = function () {
  window.scrollTo({ top: 0, behavior: 'smooth' });
}
