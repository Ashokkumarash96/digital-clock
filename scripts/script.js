// Function to display current time
function showTime() {
  // Create a new Date object
  let date = new Date();

  // Get the current hour, minute, and second
  let h = date.getHours();
  let m = date.getMinutes();
  let s = date.getSeconds();

  // Set the default session to "AM"
  let session = "AM";

  // Convert hour to 12-hour format and set the session accordingly
  if (h == 0) {
    h = 12;
  }
  if (h > 12) {
    h = h - 12;
    session = "PM";
  }

  // Add leading zeros to minutes and seconds if they are less than 10
  h = h < 10 ? "0" + h : h;
  m = m < 10 ? "0" + m : m;
  s = s < 10 ? "0" + s : s;

  // Create a string representing the current time
  let time = h + ":" + m + ":" + s + " " + session;

  // Update the clock display with the current time
  document.getElementById("MyClockDisplay").innerText = time;
  document.getElementById("MyClockDisplay").textContent = time;

  // Schedule the function to run again after 1 second
  setTimeout(showTime, 1000);
}

// Call the showTime function to start displaying the time
showTime();
