import flatpickr from "flatpickr"
import "flatpickr/dist/themes/airbnb.css"

const unavailableDates = JSON.parse(document.querySelector('.widget-content').dataset.unavailable);

flatpickr(".datepicker", {minDate: 'today', disable: unavailableDates})
