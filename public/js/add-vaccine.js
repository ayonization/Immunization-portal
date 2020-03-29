'use strict';


const addVaccineButtonDOM = document.querySelector('[data-action="add-vaccine"]');
var vaccineNumber = 0;
let vaccineArray = [];


addVaccineButtonDOM.addEventListener('click', function() {
    const addVaccineGroup = addVaccineButtonDOM.parentNode;
    const vaccineList = document.querySelector('.vaccines');
    
    const vaccine = {
        name: addVaccineGroup.querySelector('#vaccine-search').value,
        date: addVaccineGroup.querySelector('#vaccine-date').value
    };


    if(vaccine.name!="" && vaccine.date!="") {
        vaccineArray.push(vaccine);
        vaccineNumber = vaccineNumber + 1;

        vaccineList.insertAdjacentHTML('beforeend', `
        <div class="added-vaccine">
            <span>${vaccineNumber}</span>
            <span>${vaccine.name}</span>
            <span>${vaccine.date}</span>
        </div>
    `)
    }
});




//function to implement custom search completion
const input = document.getElementById('vaccine-search');
var filter = input.value.toUpperCase();
var ul = document.getElementById('search-content');
var  li = ul.getElementsByTagName('li');
function searchQuery() {
  for(let i=0; i<li.length; i++) {
    var searchText = li[i].innerText;
    if(searchText.toUpperCase().indexOf(filter) > -1) {
        li[i].style.display = "";
    } else {
      li[i].style.display = "none";
    }
  }
}

//function to display phone number
const phone = document.getElementById('contact-no');
function inputSTDCode() {
    phone.value = "+91 ";
}
function displayPhoneNumber() {
    if(phone.value.length < 5) {
        console.log(phone.value.length);
        inputSTDCode();
        console.log(phone.value.length);
    }
    if(phone.value.length == 9) {
        phone.value = phone.value + " ";
    }
}