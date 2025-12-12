function initSiteInteractions() {
  const toggle = document.querySelector('.menu-toggle');
  const nav = document.querySelector('.site-nav');
  const toTop = document.getElementById("to-top-link");

  if (toggle && nav) {
    toggle.addEventListener('click', function (e) {
      const isActive = nav.classList.toggle('active');
      toggle.setAttribute('aria-expanded', isActive ? 'true' : 'false');
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

  highlightActivePage();
}

function highlightActivePage() {

  const currentPage = window.location.pathname.split("/").pop() || "index.html";
  
  
  const links = document.querySelectorAll('.site-nav a');
  
  links.forEach(link => {
    
      const linkPage = link.getAttribute('href');

      if (linkPage === currentPage) {
          link.classList.add('current-page');
      }
  });
}