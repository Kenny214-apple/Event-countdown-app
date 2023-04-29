// coundown Clock

// DOM manipulation
const tagLine = document.getElementById("tagline-input");
const tagLineDescription = document.getElementById("taglineInputDescription");
const tagLineExpired = document.getElementById("tagline-inputExpired");
const tagLineDescriptionExpired = document.getElementById(
  "taglineInputDescriptionExpired"
);
const dateTime = document.getElementById("datetime-input");
const topTagline = document.querySelectorAll(".top-tagline");
const submitBtn = document.getElementById("submit-Btn");
const subBtn = document.getElementById("subscribe-btn");

// Submit Function
submitBtn.addEventListener("click", function () {
  // Get the inputed values
  document.getElementById("tagline-DOM").textContent = tagLine.value;
  document.getElementById("tagline-discription-DOM").textContent =
    tagLineDescription.value;
  if (tagLine.value === "") {
    document.getElementById("error-message-1").textContent =
      "input can't be blank";
  }
  if ((tagLineDescription.value = "")) {
    document.getElementById("error-message-2").textContent =
      "input can't be blank";
  }
  if ((tagLineDescriptionExpired.value = "")) {
    document.getElementById("error-message-3").textContent =
      "input can't be blank";
  }
  if ((tagLineExpired.value = "")) {
    document.getElementById("error-message-3").textContent =
      "input can't be blank";
  }
  if ((dateTime.value = "")) {
    document.getElementById("error-message-5").textContent =
      "input can't be blank";
  }

  // Set the date we're counting down to
  const countDownDate = new Date(dateTime.value).getTime();

  // update the count down every 1 second
  const countDownFunction = setInterval(countDown, 1000);

  function countDown() {
    // Get today's date and time
    const now = new Date().getTime();

    //Find the distance between now and the count down date
    const timeLeft = countDownDate - now;

    // Time calculations for days,hours,minutes and seconds
    var days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
    var hours = Math.floor(
      (timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
    );
    var minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);

    // Output the result in element with id="root"
    document.getElementById("Days-DOM").textContent = days;

    // Ensure output is always to digits
    if (hours < 10 && hours != 0) {
      document.getElementById("Hours-DOM").textContent = `0${hours}`;
    } else {
      document.getElementById("Hours-DOM").textContent = hours;
    }

    if (minutes < 10 && minutes != 0) {
      document.getElementById("Minutes-DOM").textContent = `0${minutes}`;
    } else {
      document.getElementById("Minutes-DOM").textContent = minutes;
    }

    if (seconds < 10 && seconds != 0) {
      document.getElementById("Seconds-DOM").textContent = `0${seconds}`;
    } else {
      document.getElementById("Seconds-DOM").textContent = seconds;
    }
    document.getElementById("first-div").style.display = "none";
    document.getElementById("second-div").style.display = "block";

    // if the count down is over , write some text
    if (timeLeft < 0) {
      clearInterval(countDownFunction);

      //   change DOM values after time expiration
      document.getElementById("tagline-DOM").textContent = tagLineExpired.value;
      document.getElementById("tagline-discription-DOM").textContent =
        tagLineDescriptionExpired.value;

      // Function for topTag after time expiration
      topTagline.forEach((element) => {
        element.textContent = 0;
      });
    }
  }
});

// subscribe button function
subBtn.addEventListener("click", function () {
  const emailData = document.getElementById("email");
});
