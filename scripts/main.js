document.addEventListener('DOMContentLoaded', function () {
    const toggle = document.querySelector('.menu-toggle');
    const nav = document.querySelector('.site-nav');
    const toTop = document.getElementById("to-top-link");
  
    // --- Mobile Menu Toggle ---
    if (toggle && nav) {
      toggle.addEventListener('click', function (e) {
        const isActive = nav.classList.toggle('active');
        toggle.setAttribute('aria-expanded', isActive ? 'true' : 'false');
      });
  
      // Close mobile nav when a link is clicked
      nav.addEventListener('click', function (e) {
        const link = e.target.closest('a');
        if (!link) return;
        if (window.innerWidth < 768) {
          nav.classList.remove('active');
          toggle.setAttribute('aria-expanded', 'false');
        }
      });
  
      // Close nav on Escape key
      document.addEventListener('keydown', function (e) {
        if (e.key === 'Escape' && nav.classList.contains('active')) {
          nav.classList.remove('active');
          toggle.setAttribute('aria-expanded', 'false');
          toggle.focus();
        }
      });
    }

    // --- Back to Top Button Visibility ---
    if (toTop) {
      window.addEventListener("scroll", () => {
        if (window.scrollY > 300) {
          toTop.classList.add("show");
        } else {
          toTop.classList.remove("show");
        }
      });
    }
});