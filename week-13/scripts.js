
function initSiteInteractions() {
    const toggle = document.querySelector('.menu-toggle');
    const nav = document.querySelector('.site-nav');
    const toTop = document.getElementById("to-top-link");
  
   
    if (toggle && nav) {
      toggle.addEventListener('click', function (e) {
        const isActive = nav.classList.toggle('active');
        toggle.setAttribute('aria-expanded', isActive ? 'true' : 'false');
      });
  
     
      nav.addEventListener('click', function (e) {
        const link = e.target.closest('a');
        if (!link) return;
        if (window.innerWidth < 768) {
          nav.classList.remove('active');
          toggle.setAttribute('aria-expanded', 'false');
        }
      });
  
     
      document.addEventListener('keydown', function (e) {
        if (e.key === 'Escape' && nav.classList.contains('active')) {
          nav.classList.remove('active');
          toggle.setAttribute('aria-expanded', 'false');
          toggle.focus();
        }
      });
    }

   
    if (toTop) {
      window.addEventListener("scroll", () => {
        if (window.scrollY > 300) {
          toTop.classList.add("show");
        } else {
          toTop.classList.remove("show");
        }
      });
    }
}