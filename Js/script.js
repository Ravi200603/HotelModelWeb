document.addEventListener("DOMContentLoaded", function () {
  var searchButton = document.querySelector(".search");
  var form = document.getElementById("form");
  var checkInDate = document.getElementById("check-indate");
  var checkOutDate = document.getElementById("check-outdate");
  var adults = document.getElementById("adults");
  var errorMessage = document.querySelector(".error");

  errorMessage.style.display = "none";

  searchButton.addEventListener("click", function (e) {
    if (
      checkInDate.value === "" ||
      checkOutDate.value === "" ||
      adults.value === ""
    ) {
      e.preventDefault();
      errorMessage.style.display = "block";
    } else {
      errorMessage.style.display = "none";
    }
  });
});

//Rooms.html
document.addEventListener("DOMContentLoaded", function () {
  var continueButton = document.querySelector(".page2b");
  var checkboxes = document.querySelectorAll(".table-button");

  continueButton.addEventListener("click", function (e) {
    var isChecked = false;
    checkboxes.forEach(function (checkbox) {
      if (checkbox.checked) {
        isChecked = true;
      }
    });

    if (!isChecked) {
      e.preventDefault();
      alert("Please select at least one room to continue.");
    }
  });
});

//Real TIme
document.addEventListener("DOMContentLoaded", function () {
  function real() {
    var RealTime = document.getElementById("lastUpdated");
    var a = new Date();
    var b = String(a.getHours());
    var c = String(a.getMinutes());
    var d = String(a.getSeconds());
    RealTime.textContent = "Time" + ":- " + b + ":" + c + ":" + d;
  }
  setInterval(real, 1000);
});
