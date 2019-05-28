import flatpickr from "flatpickr"
import "flatpickr/dist/themes/airbnb.css"

const dateInputs = () => {
  const dateLoading = document.querySelector('.widget-content')
  if (dateLoading) {
    const unavailableDates = JSON.parse(document.querySelector('.widget-content').dataset.unavailable);
    flatpickr(".datepicker", {minDate: 'today', disable: unavailableDates})
  };
};

const dayBookingDisplay = (dayData, dayElem) => {
  if (dayData) {
    const pendingBookings = JSON.parse(dayData.pending);
    pendingBookings.forEach((bookingDay) => {
      let bookingDayToDate = new Date(bookingDay);
      bookingDayToDate.setHours(0,0,0,0);
      if ((bookingDayToDate - dayElem.dateObj) === 0 ) {
        dayElem.classList.add("experience-pending");
      };
    });
  }

    const confirmedBookings = JSON.parse(dayData.confirmed);

    confirmedBookings.forEach((bookingDay) => {

      let bookingDayToDate = new Date(bookingDay);
      bookingDayToDate.setHours(0,0,0,0);
      if ((bookingDay - dayElem.dateObj) === 0) {
        dayElem.classList.add("experience-confirmed");
      };
  });
};



const dateDashboardExperiences = (dayData, index) => {
  flatpickr(`.datepicker-experiences-${index}`,
    {
    minDate: 'today',
    inline: true,
    onDayCreate: function(dObj, dStr, fp, dayElem) {
      dayBookingDisplay(dayData, dayElem);
    },
    onChange: function(selectedDates, dateStr, instance) {
      //
    }
  });
}

const displayDashboardExperience = () => {
  const dayDatas = document.querySelectorAll('.widget-datepicker');
  let index = 0;
  dayDatas.forEach((dayData) => {
    dateDashboardExperiences(dayData.dataset, index);
    index += 1;
  });
};



export { dateInputs, displayDashboardExperience };

