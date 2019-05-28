import flatpickr from "flatpickr"
import "flatpickr/dist/themes/airbnb.css"



const dateInputs = () => {
  const dateLoading = document.querySelector('.widget-content')
  if (dateLoading) {
    const unavailableDates = JSON.parse(document.querySelector('.widget-content').dataset.unavailable);
    flatpickr(".datepicker", {minDate: 'today', disable: unavailableDates, appearance: "bottom"})
  };
};

export { dateInputs }

