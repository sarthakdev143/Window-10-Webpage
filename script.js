// Search Bar --------------------------------------------------------------------------------------
var searchBarDiv = document.querySelector(".searchBarDiv");
var searchBar = document.querySelector(".searchBar");
var searchIcon = document.querySelector(".searchIcon");

searchBarDiv.addEventListener("focusin", function () {
    searchIcon.style.color = "#000";
    searchBarDiv.style.background = "#fff";
});

searchBarDiv.addEventListener("focusout", function () {
    searchIcon.style.color = "#fff";
    searchBarDiv.style.background = "#696969";
});

// Date and Time --------------------------------------------------------------------------------------
var timeSpan = document.querySelector(".time");
var dateSpan = document.querySelector(".date");

function updateTime() {
    var now = new Date();
    var time = now.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
    var date = now.toDateString();
    timeSpan.textContent = time;
    dateSpan.textContent = date;
}

setInterval(updateTime, 1000);
updateTime();

timeSpan.innerHTML = timeSpan.textContent.replace(/^0+/, '');
dateSpan.innerHTML = dateSpan.textContent.replace(/^0+/, '');

