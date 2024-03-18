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
let closeNotiMenu = document.querySelector(".close-notification-menu");

let noNoti = document.querySelector(".noNoti");
let toggleMenu = false;

notificationsIcon.addEventListener("click", function () {
    if (toggleMenu == true) {
        notificationMenu.style.marginRight = "-29%";
        toggleMenu = false
        noNoti.style.opacity = "0";
        closeNotiMenu.style.marginLeft = "4vw";
    }

    else {
        notificationMenu.style.marginRight = "0";
        toggleMenu = true;

        setTimeout(function () {
            noNoti.style.opacity = "1";
            closeNotiMenu.style.marginLeft = "-8vw";

            closeNotiMenu.addEventListener("click", function () {
                notificationMenu.style.marginRight = "-29%";
                closeNotiMenu.style.marginLeft = "4vw";
                noNoti.style.opacity = "0";
                toggleMenu = false;
            })

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

// Window Start Menu
let closeWindowStart = document.querySelector(".close-window-start-menu");
let windowLogo = document.querySelector(".windowLogo");
let windowStartMenu = document.querySelector(".window-start-menu");
let isStartMenu = false;

windowLogo.addEventListener("click", function () {
    if (isStartMenu == false) {
        windowStartMenu.style.marginBottom = "0";
        isStartMenu = true;
    }
    else {
        windowStartMenu.style.marginBottom = "-90%";
        isStartMenu = false;
    }
});

closeWindowStart.addEventListener("click", function () {
    if (isStartMenu == false) {
        windowStartMenu.style.marginBottom = "0";
        isStartMenu = true;
    }
    else {
        windowStartMenu.style.marginBottom = "-90%";
        isStartMenu = false;
    }
})

// Start Menu 
let part1 = document.querySelector(".part-1");
let isBroad = false;

part1.addEventListener("mouseover", function () {
    setTimeout(function () {
        part1.style.width = "40%";
        isBroad = true;
    }, 300)
})

part1.addEventListener("mouseout", function () {
    setTimeout(function () {
        part1.style.width = "8%";
        isBroad = false;
    }, 300)
})

let toggleStart = document.querySelector(".toggle-start");

toggleStart.addEventListener("click", function () {
    if (isBroad == false) {
        part1.style.width = "40%";
        isBroad = true;
    }
    else {
        part1.style.width = "8%";
        isBroad = false;
    }
})

// Locomotive JS ft. Smooth Scroll

const scroll = new LocomotiveScroll({
    el: document.querySelector('.wrapper-of-img'),
    smooth: true
});