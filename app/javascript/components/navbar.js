const initUpdateNavbarOnScroll = () => {
  const navbar = document.querySelector('.navbar-lewagon');
  const navbarTitle= document.querySelector('.navbar-title');
  const navbarHome= document.querySelector('.active');
  if (navbar) {
    window.addEventListener('scroll', () => {
      if (window.scrollY >= 10) {
        navbar.classList.add('navbar-lewagon-white');
        navbarTitle.style.display="block";
        navbarHome.style.display="block";
        navbar.classList.add('active-white');
      } else {
        navbar.classList.remove('navbar-lewagon-white');
        navbarTitle.style.display="none";
        navbarHome.style.display="none";
      }
    });
  }
}

export { initUpdateNavbarOnScroll };
