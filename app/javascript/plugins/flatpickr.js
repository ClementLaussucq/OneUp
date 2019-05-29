import flatpickr from "flatpickr"
import "flatpickr/dist/themes/airbnb.css"


// calendar for new booking creation, greys unavailable dates

const dateInputs = () => {
  const dateLoading = document.querySelector('.widget-content')
  if (dateLoading) {
    const unavailableDates = JSON.parse(document.querySelector('.widget-content').dataset.unavailable);
    flatpickr(".datepicker", {minDate: 'today', disable: unavailableDates})
  };
};

// Booking display functions to make appear pending and confirmed requests in dashboard

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

    const confirmedBookings = JSON.parse(dayData.confirmed);


    confirmedBookings.forEach((bookingDay) => {
      let bookingDayToDate = new Date(bookingDay);
      bookingDayToDate.setHours(0,0,0,0);
      if ((bookingDayToDate - dayElem.dateObj) === 0) {
        dayElem.classList.add("experience-confirmed");
      };
    });
  };
};


const insertHTMLToDashboard = (dateStr, index) => {
  const dashboardDiv = document.querySelector(`.js-booking-selected-${index}`);

  const bookingsArray = JSON.parse(dashboardDiv.dataset.bookings);
  const experiencesArray = JSON.parse(dashboardDiv.dataset.experiences);

  const bookingsArrayExp = bookingsArray[index];

  const experience = experiencesArray[index];


  const bookingObj = bookingsArrayExp.filter((booking) => {
    let bookingDate = new Date(booking.date);
    bookingDate.setHours(0,0,0,0);
    return ((bookingDate - dateStr) === 0) && (booking.experience_id === experience.id);
  });


  const booking = bookingObj[0];

  const usersArray = JSON.parse(dashboardDiv.dataset.users)[index];



  if (bookingObj.length === 0) {
    dashboardDiv.innerHTML = "";
  } else {
    const userObj = usersArray.filter((user) => {
      return ((user.booking_id - booking.id) === 0);
    });

    const user = userObj[0];
    let additional = ``;
    let bookingStatus = ``;

    if (booking.status !== "Confirmed") {
      bookingStatus = `<h4 class="experience-pending">${booking.status}</h4>`
      additional = `<a class="btn btn-success w-50" data-confirm="Please confirm!" data-method="patch" href="/bookings/${booking.id}">Confirm?</a>`
    } else {
      bookingStatus = `<h4 class="experience-confirmed">${booking.status}</h4>`
    };

    const htmlToAdd = `
      <div class="js-card">
      ${bookingStatus}
      <p><strong>${user.name}</strong></p>
      <p>${user.email}</p>
      ${additional}
      <a class="btn btn-danger w-50" data-confirm="Are you sure?" data-method="delete" href="/bookings/${booking.id}">Cancel</a>
      </div>`

    dashboardDiv.innerHTML = "";
    dashboardDiv.insertAdjacentHTML("beforeend", htmlToAdd);
  };

};


const dateDashboardExperiences = (dayData, index) => {
  flatpickr(`.datepicker-experiences-${index}`,
    {
    minDate: 'today',
    inline: true,
    onDayCreate: function(dObj, dStr, fp, dayElem) {
      dayBookingDisplay(dayData, dayElem);
    }, //onDayCreate enables to check and display all dates with pending or confirmed status
    onChange: function(selectedDates, dateStr, instance) {
      insertHTMLToDashboard(selectedDates[0], index);
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

