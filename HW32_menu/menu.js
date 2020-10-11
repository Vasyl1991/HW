let menuBtn = document.getElementById('menuBtn');
let menuContainer = document.getElementById('menuContainer');

let menuIconClosed = "menu-icon closed";
let menuIconOpened = "menu-icon opened";
let menuContClosed = "menu-container closed";
let menuContOpened = "menu-container opened";

menuBtn.onclick = function() {
  if (menuBtn.className == menuIconClosed) {
    menuBtn.className = menuIconOpened;
    menuContainer.className = menuContOpened;
  } else if (menuBtn.className == menuIconOpened) {
    menuBtn.className = menuIconClosed;
    menuContainer.className = menuContClosed;
  }
}