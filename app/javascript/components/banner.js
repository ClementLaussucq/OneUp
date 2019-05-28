import Typed from 'typed.js';

const loadDynamicBannerText = () => {
  const bannerTypedText = document.querySelector('#banner-typed-text');
  if (bannerTypedText) {
    new Typed('#banner-typed-text', {
      strings: ["With A Lawyer", "With A Penguin", "With An Entrepreneur", "With A Teacher"],
      typeSpeed: 30,
      loop: true
    });
  };
};

export { loadDynamicBannerText };

