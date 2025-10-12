document.addEventListener("DOMContentLoaded", () => {
    const menuToggle = document.querySelector(".menu-toggle");
    const nav = document.querySelector(".site-nav");

    if (menuToggle && nav) {
        menuToggle.addEventListener("click", () => {
            nav.classList.toggle("active");
        });
    }
});
// Menu toggle: toggles .active on .site-nav and updates aria-expanded
document.addEventListener('DOMContentLoaded', function () {
    const toggle = document.querySelector('.menu-toggle');
    const nav = document.querySelector('.site-nav');
  
    if (!toggle || !nav) return;
  
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
  });