import Typed from 'typed.js';

const loadDynamicBannerText = () => {
  new Typed('#banner-typed-text', {
    strings: ["With A Lawyer", "With A Penguin", "With An Entrepreneur", "With A Teacher"],
    typeSpeed: 50,
    loop: true
  });
}

export { loadDynamicBannerText };

