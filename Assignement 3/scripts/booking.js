/********* create variables *********/
// useful variables might be: the cost per day, the number of days selected, and elements on the screen that will be clicked or will need to be modified. 
// Do any of these variables need to be initialized when the page is loaded? 
// When do they need to be reset or updated?



/********* colour change days of week *********/
// when the day buttons are clicked, we will apply the "clicked" class to that element, and update any other relevant variables. Then, we can recalculate the total cost.
// added challenge: don't update the dayCounter if the same day is clicked more than once. hint: .classList.contains() might be helpful here!

/********* clear days *********/
// when the clear-button is clicked, the "clicked" class is removed from all days, any other relevant variables are reset, and the calculated cost is set to 0.

// when the half-day button is clicked, set the daily rate to $20, add the "clicked" class to the "half" element, remove it from the "full" element, and recalculate the total cost.

// when the full-day button is clicked, the daily rate is set back to $35, the clicked class is added to "full" and removed from "half", and the total cost is recalculated.

/********* calculate *********/
// when a calculation is needed, set the innerHTML of the calculated-cost element to the appropriate value

// Variables
let costPerDay = 35; // Default cost per day
let selectedDays = new Set(); // To keep track of selected days

const dayButtons = document.querySelectorAll('.day-selector li');
const fullDayButton = document.getElementById('full');
const halfDayButton = document.getElementById('half');
const calculatedCostElement = document.getElementById('calculated-cost');
const clearButton = document.getElementById('clear-button');

// Initialize
function initialize() {
    dayButtons.forEach(button => {
        button.addEventListener('click', () => toggleDay(button));
    });

    fullDayButton.addEventListener('click', () => setDayRate(35, fullDayButton, halfDayButton));
    halfDayButton.addEventListener('click', () => setDayRate(20, halfDayButton, fullDayButton));

    clearButton.addEventListener('click', clearDays);
    calculateCost();
}

// Toggle Day Selection
function toggleDay(button) {
    const day = button.id;
    if (selectedDays.has(day)) {
        selectedDays.delete(day);
        button.classList.remove('clicked');
    } else {
        selectedDays.add(day);
        button.classList.add('clicked');
    }
    calculateCost();
}

// Set Day Rate
function setDayRate(rate, clickedButton, otherButton) {
    costPerDay = rate;
    clickedButton.classList.add('clicked');
    otherButton.classList.remove('clicked');
    calculateCost();
}

// Clear Days
function clearDays() {
    selectedDays.clear();
    dayButtons.forEach(button => button.classList.remove('clicked'));
    calculateCost();
}

// Calculate Cost
function calculateCost() {
    const totalCost = selectedDays.size * costPerDay;
    calculatedCostElement.innerHTML = totalCost.toFixed(2);
}

// Initialize the script
initialize();
