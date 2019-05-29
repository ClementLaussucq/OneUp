import "bootstrap";
import { initUpdateNavbarOnScroll } from '../components/navbar';
initUpdateNavbarOnScroll();
import { loadDynamicBannerText } from '../components/banner';

if (document.querySelector('.home-banner')) {

  loadDynamicBannerText();
}

import { dateInputs, displayDashboardExperience } from '../plugins/flatpickr';
dateInputs();
displayDashboardExperience();

import 'mapbox-gl/dist/mapbox-gl.css'; // <-- you need to uncomment the stylesheet_pack_tag in the layout!

import { initMapbox } from '../plugins/init_mapbox';

initMapbox();
