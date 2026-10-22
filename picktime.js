// State variables
let currentTime = 'Lunch';
let currentPax = 'Any';
let currentBudget = 'Any';
let currentDiet = 'Any';

// ADDED "Drinks" as an independent Time option
const TIME_OPTIONS = ['Breakfast', 'Lunch', 'Dinner', 'Tea Time', 'Supper', 'Drinks'];
const PAX_OPTIONS = ['Any', '1-2', '3-5', 'Above 5'];
const BUDGET_OPTIONS = ['Any', 'RM 0-10', 'RM 11-30', 'RM 31-50', 'Above RM 50'];
const DIET_OPTIONS = ['Any', 'Halal', 'Non-Halal', 'Vegetarian', 'Diet', 'Celebration'];

function renderButtons(containerId, options, type, isDiet = false) {
    const container = document.getElementById(containerId);
    container.innerHTML = ''; 
    
    options.forEach(opt => {
        const btn = document.createElement('button');
        btn.className = `filter-btn ${isDiet ? 'diet' : ''} ${opt === 'Any' || opt === 'Lunch' ? 'active' : ''}`;
        btn.innerText = opt;
        btn.type = 'button';
        
        btn.onclick = () => {
            if (type === 'time') currentTime = opt;
            if (type === 'pax') currentPax = opt;
            if (type === 'budget') currentBudget = opt;
            if (type === 'diet') currentDiet = opt;
            
            const siblings = container.querySelectorAll('.filter-btn');
            siblings.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
        };
        container.appendChild(btn);
    });
}

document.addEventListener("DOMContentLoaded", () => {
    renderButtons('time-filters', TIME_OPTIONS, 'time');
    renderButtons('people-filters', PAX_OPTIONS, 'pax');
    renderButtons('budget-filters', BUDGET_OPTIONS, 'budget');
    renderButtons('diet-filters', DIET_OPTIONS, 'diet', true);
});

function goToResult() {
    sessionStorage.setItem('mealTime', currentTime);
    sessionStorage.setItem('pax', currentPax);
    sessionStorage.setItem('budget', currentBudget);
    sessionStorage.setItem('diet', currentDiet);
    window.location.href = "result.html";
}