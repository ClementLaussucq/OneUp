import "bootstrap";
import { initUpdateNavbarOnScroll } from '../components/navbar';
initUpdateNavbarOnScroll();
import { loadDynamicBannerText } from '../components/banner';
loadDynamicBannerText();

import "../plugins/flatpickr";
import { dateInputs, displayDashboardExperience } from '../plugins/flatpickr';
dateInputs();
displayDashboardExperience();

