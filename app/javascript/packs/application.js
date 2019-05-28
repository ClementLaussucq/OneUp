import "bootstrap";
import { initUpdateNavbarOnScroll } from '../components/navbar';
initUpdateNavbarOnScroll();
import { loadDynamicBannerText } from '../components/banner';
loadDynamicBannerText();

if (document.querySelector('.home-banner')) {

  loadDynamicBannerText();
}

import "../plugins/flatpickr";
import { dateInputs } from '../plugins/flatpickr';
dateInputs();



import 'mapbox-gl/dist/mapbox-gl.css'; // <-- you need to uncomment the stylesheet_pack_tag in the layout!

import { initMapbox } from '../plugins/init_mapbox';

if (document.querySelector('.home-banner')) {

  loadDynamicBannerText();
}

initMapbox();
