// Search Bar in The Taskbar -------------------------------------------------------------------------------------
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

// Notification Menu

let notificationsIcon = document.querySelector(".notifications-icon");
let notificationMenu = document.querySelector(".notification-menu");
let noNoti = document.querySelector(".noNoti");
let toggleMenu = false;

notificationsIcon.addEventListener("click", function () {
    if (toggleMenu == true) {
        notificationMenu.style.marginRight = "-29%";
        toggleMenu = false
        noNoti.style.opacity = "0";
    }

    else {
        notificationMenu.style.marginRight = "0";
        toggleMenu = true;

        setTimeout(function () {
            noNoti.style.opacity = "1";
        }, 500)
    }
})

// Features Collapse And Expand
let Collapse = document.querySelector(".collapse");
let featuresParent = document.querySelector(".features-parent");
let isCollapsed = false;

Collapse.addEventListener("click", function () {
    if (isCollapsed == false) {
        featuresParent.style.marginTop = "21vw";
        Collapse.innerHTML = "Expand";
        isCollapsed = true;
    }

    else {
        featuresParent.style.marginTop = "0";
        Collapse.innerHTML = "Collapse";
        isCollapsed = false;
    }
})

// Feature / Box CLick
let features = document.querySelectorAll(".box");
let featureIcon = document.querySelectorAll(".feature-icon");
let isOn = false;

features.forEach(function (box) {
    box.addEventListener("click", function () {
        box.style.transform = "scale(0.95)";

        setTimeout(function () {
            box.style.transform = "scale(1)";
        }, 200);
    });
});
