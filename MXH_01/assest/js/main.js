document.addEventListener("DOMContentLoaded", () => {
    document.querySelector(".menu-toggle").addEventListener("click", function () {
      document.querySelector(".menu-items ul.nav").classList.toggle("show");
      document.querySelector(".wrapper").classList.toggle("activeBg");
    });
  });
  