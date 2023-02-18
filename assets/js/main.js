// YOUR COMPANY DROP DOWN MENU
// ALLIANCE DROP DOWN MENU
const logoContainer = document.querySelector(".yourlogo-container");
const dropdownMenu = document.querySelector(".dropdown-menu");
const links = document.querySelectorAll(".dropdown-menu a");

logoContainer.addEventListener("click", function() {
  dropdownMenu.classList.toggle("active");
});

links[2].addEventListener("click", function(event) {
  event.preventDefault();
  if (confirm("Are you sure you want to log out?")) {
    window.location.href = this.href;
  }
});

document.addEventListener("click", function(event) {
  if (!event.target.closest(".yourlogo-container")) {
    dropdownMenu.classList.remove("active");
  }
});

//ACTIVE PAGE HIGHLIGHTED
var currentPage = window.location.pathname;
if (currentPage.endsWith("index.html")) {
    document.getElementById("dashboard-icon-link").classList.add("active");
} else if (currentPage.endsWith("bookings.html")) {
    document.getElementById("calandar-icon-link").classList.add("active");
} else if (currentPage.endsWith("employees.html")) {
    document.getElementById("employees-icon-link").classList.add("active");
} else if (currentPage.endsWith("clients.html")) {
    document.getElementById("clients-icon-link").classList.add("active");
} else if (currentPage.endsWith("timesheets.html")) {
    document.getElementById("timesheets-icon-link").classList.add("active");
} else if (currentPage.endsWith("reports.html")) {
    document.getElementById("reports-icon-link").classList.add("active");
};

