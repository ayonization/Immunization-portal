function openPage(pageName, elmnt, color) {
  // Hide all elements with class="tabcontent" by default */
  var i, tabcontent, tablinks;
  tabcontent = document.getElementsByClassName("tabcontent");
  for (i = 0; i < tabcontent.length; i++) {
    // tabcontent[i].style.display = "none";
    tabcontent[i].classList.remove("current-content");
  }

  // Remove the background color of all tablinks/buttons
  tablinks = document.getElementsByClassName("tablink");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].style.backgroundColor = "";
  }

  // Show the specific tab content
  document.getElementById(pageName).classList.add("current-content");

  // Add the specific color to the button used to open the tab content
  elmnt.style.backgroundColor = '#84a3c3';
}

// Get the element with id="defaultOpen" and click on it
document.getElementById("defaultOpen").click();



//functions and variables to display search content on search bar focus
var searchMenu = document.getElementById('search-menu');

function displayItems() {
  searchMenu.classList.add('is-visible');
}

function hideItems() {
  searchMenu.classList.remove('is-visible');
}


