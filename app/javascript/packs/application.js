import "bootstrap";
import { initUpdateNavbarOnScroll } from '../components/navbar';
initUpdateNavbarOnScroll();
import { loadDynamicBannerText } from '../components/banner';
loadDynamicBannerText();

if (document.querySelector('.home-banner')) {

  loadDynamicBannerText();
}

