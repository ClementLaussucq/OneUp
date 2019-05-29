import Typed from 'typed.js';

const loadDynamicBannerText = () => {
  const bannerTypedText = document.querySelector('#banner-typed-text');
  console.log(bannerTypedText);
  if (bannerTypedText) {
    new Typed('#banner-typed-text', {
      strings: ["A Lawyer", "A Penguin", "An Entrepreneur", "A Teacher"],
      typeSpeed: 80,
      loop: true,
    });
    console.log(bannerTypedText);
  };
};

export { loadDynamicBannerText };

