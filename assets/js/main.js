//INPUTS
const inputDay = document.getElementById('day');
const inputMonth = document.getElementById('month');
const inputYear = document.getElementById('year');

//OUTPUTS
const outputDay = document.getElementById('DD');
const outputMonth = document.getElementById('MM');
const outputYear = document.getElementById('YYYY');

//FORM ELEMENT
const form = document.querySelector('form');

//ADDING THE SUBMIT EVENTLISTENER TO FORM
form.addEventListener('submit', handleSubmit);

const date = new Date();
let day = date.getDate();
let month = 1 + date.getMonth();
let year = date.getFullYear();

const months = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

function validate() {
    const inputs = document.querySelectorAll('input');
    let validator = true;
    inputs.forEach((i) => {
        const parent = i.parentElement;
        if (!i.value) {
            i.style.borderColor = "red";
            parent.querySelector('small').innerText = "This field is requiered.";
            validator = false;
        } else if (inputYear.value > year) {
            inputYear.style.borderColor = "red";
            inputYear.parentElement.querySelector('small').innerText = "Must be in the past.";
        } else if (inputMonth.value > 12) {
            inputMonth.style.borderColor = "red";
            inputMonth.parentElement.querySelector('small').innerText = "Must be a valid month.";
            validator = false;
        } else if (inputDay.value > 31) {
            inputDay.style.borderColor = "red";
            inputDay.parentElement.querySelector('small').innerText = "Must be a valid day.";
            validator = false;
        } else {
            i.style.borderColor = 'black';
            parent.querySelector('small').innerText = "";
            validator = true;
        }
    })
    return validator;
}

function handleSubmit(e) {
    e.preventDefault();
    if(validate()) {
        if (inputDay.value > day) {
            day = day + months[month - 1];
            month = month -1;
        }
        if (inputMonth.value > month) {
            month = month + 12;
            year = year - 1;
        }
        
        const d = day - inputDay.value;
        const m = month - inputMonth.value;
        const y = year - inputYear.value;

        outputDay.innerHTML = d;
        outputMonth.innerHTML = m;
        outputYear.innerHTML = y;
    }
}