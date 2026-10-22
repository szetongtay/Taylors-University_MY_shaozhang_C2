// ==========================================
// 1. foodhunter>50）
// ==========================================
const FOODS = [];

// breakfast
const breakfastItems = [
    { name: 'Roti Canai', price: 5, emoji: '🥞', diet: 'Vegetarian', pax: '1-2', halal: true, celebration: false, location: 'Restoran Pelita', openTime: '24 Hours', openDays: 'Everyday' },
    { name: 'Nasi Lemak Ayam', price: 10, emoji: '🍛', diet: 'None', pax: '1-2', halal: true, celebration: false, location: 'Village Park', openTime: '7:00 AM - 2:00 PM', openDays: 'Mon-Sat' },
    { name: 'Half-Boiled Eggs', price: 8, emoji: '🍳', diet: 'Vegetarian', pax: '1-2', halal: true, celebration: false, location: 'Kedai Kopi', openTime: '7:30 AM - 5:00 PM', openDays: 'Everyday' },
    { name: 'Dim Sum Platter', price: 25, emoji: '🥟', diet: 'None', pax: '3-5', halal: false, celebration: true, location: 'Hakka Dim Sum', openTime: '6:30 AM - 2:00 PM', openDays: 'Tue-Sun' },
    { name: 'Big Breakfast', price: 35, emoji: '🥓', diet: 'None', pax: '3-5', halal: false, celebration: true, location: 'Antipodean', openTime: '9:00 AM - 6:00 PM', openDays: 'Everyday' },
    { name: 'Nasi Kerabu', price: 12, emoji: '🍚', diet: 'None', pax: '1-2', halal: true, celebration: false, location: 'Kelantan Delights', openTime: '8:00 AM - 3:00 PM', openDays: 'Mon-Fri' },
    { name: 'Pancakes', price: 18, emoji: '🥞', diet: 'Vegetarian', pax: '1-2', halal: true, celebration: false, location: 'Pancake House', openTime: '8:00 AM - 10:00 PM', openDays: 'Everyday' },
    { name: 'McMuffin', price: 12, emoji: '🥪', diet: 'None', pax: '1-2', halal: true, celebration: false, location: 'McDonald\'s', openTime: '24 Hours', openDays: 'Everyday' },
    { name: 'Kaya Toast', price: 6, emoji: '🍞', diet: 'Vegetarian', pax: '1-2', halal: true, celebration: false, location: 'Ya Kun', openTime: '7:30 AM - 6:00 PM', openDays: 'Everyday' },
    { name: 'Mee Goreng', price: 9, emoji: '🍜', diet: 'None', pax: '1-2', halal: true, celebration: false, location: 'Mamak', openTime: '24 Hours', openDays: 'Everyday' }
];
for(let i=0; i<50; i++) {
    let item = { ...breakfastItems[i % breakfastItems.length] };
    if (i >= breakfastItems.length) item.name = `${item.name} (Set ${Math.floor(i / breakfastItems.length) + 1})`;
    item.time = 'Breakfast';
    FOODS.push(item);
}

// lunch
const lunchItems = [
    { name: 'Chicken Rice', price: 15, emoji: '🍗', diet: 'None', pax: '1-2', halal: true, celebration: false, location: 'Nam Heong', openTime: '10:00 AM - 8:00 PM', openDays: 'Everyday' },
    { name: 'Pan Mee', price: 12, emoji: '🍜', diet: 'Vegetarian', pax: '1-2', halal: false, celebration: false, location: 'Jojo Pan Mee', openTime: '10:30 AM - 9:00 PM', openDays: 'Tue-Sun' },
    { name: 'Buddha Bowl', price: 22, emoji: '🥙', diet: 'Vegan', pax: '1-2', halal: true, celebration: false, location: 'Simple Life', openTime: '11:00 AM - 9:00 PM', openDays: 'Everyday' },
    { name: 'Nasi Kandar', price: 18, emoji: '🍛', diet: 'None', pax: '1-2', halal: true, celebration: false, location: 'Pelita', openTime: '24 Hours', openDays: 'Everyday' },
    { name: 'Japanese Bento', price: 28, emoji: '🍱', diet: 'None', pax: '1-2', halal: false, celebration: false, location: 'Sushi Zen', openTime: '12:00 PM - 3:00 PM', openDays: 'Mon-Sat' },
    { name: 'Pizza Set', price: 45, emoji: '🍕', diet: 'None', pax: '3-5', halal: true, celebration: true, location: 'Domino\'s', openTime: '11:00 AM - 10:00 PM', openDays: 'Everyday' },
    { name: 'Korean BBQ', price: 55, emoji: '🥩', diet: 'None', pax: 'Above 5', halal: false, celebration: true, location: 'Seoul Garden', openTime: '11:00 AM - 10:00 PM', openDays: 'Everyday' },
    { name: 'Tom Yum', price: 20, emoji: '🍲', diet: 'None', pax: '1-2', halal: true, celebration: false, location: 'Thai Express', openTime: '11:00 AM - 10:00 PM', openDays: 'Everyday' },
    { name: 'Subway', price: 16, emoji: '🥪', diet: 'Vegetarian', pax: '1-2', halal: true, celebration: false, location: 'Subway', openTime: '10:00 AM - 10:00 PM', openDays: 'Everyday' },
    { name: 'Char Kway Teow', price: 14, emoji: '🍝', diet: 'None', pax: '1-2', halal: false, celebration: false, location: 'Penang CKT', openTime: '11:00 AM - 10:00 PM', openDays: 'Wed-Mon' }
];
for(let i=0; i<50; i++) {
    let item = { ...lunchItems[i % lunchItems.length] };
    if (i >= lunchItems.length) item.name = `${item.name} (Combo ${Math.floor(i / lunchItems.length) + 1})`;
    item.time = 'Lunch';
    FOODS.push(item);
}

// dinner
const dinnerItems = [
    { name: 'Bak Kut Teh', price: 25, emoji: '🍲', diet: 'None', pax: '3-5', halal: false, celebration: true, location: 'Klang BKT', openTime: '5:00 PM - 11:00 PM', openDays: 'Everyday' },
    { name: 'Sushi Platter', price: 45, emoji: '🍣', diet: 'None', pax: '3-5', halal: false, celebration: true, location: 'Tokyo Sushi', openTime: '6:00 PM - 11:30 PM', openDays: 'Tue-Sun' },
    { name: 'Steamboat Buffet', price: 35, emoji: '🍢', diet: 'None', pax: 'Above 5', halal: true, celebration: true, location: 'Steamboat Garden', openTime: '5:30 PM - 11:00 PM', openDays: 'Everyday' },
    { name: 'Pizza Party', price: 60, emoji: '🍕', diet: 'None', pax: 'Above 5', halal: true, celebration: true, location: 'Pizza Hut', openTime: '11:00 AM - 11:00 PM', openDays: 'Everyday' },
    { name: 'Grilled Salmon', price: 42, emoji: '🐟', diet: 'None', pax: '1-2', halal: true, celebration: true, location: 'Fish Grill', openTime: '6:00 PM - 10:30 PM', openDays: 'Tue-Sun' },
    { name: 'Spicy Ramen', price: 19, emoji: '🌶️', diet: 'None', pax: '1-2', halal: false, celebration: false, location: 'Ramen Nagi', openTime: '11:30 AM - 10:00 PM', openDays: 'Everyday' },
    { name: 'Western Steak', price: 65, emoji: '🥩', diet: 'None', pax: '1-2', halal: false, celebration: true, location: 'Steakhouse', openTime: '6:00 PM - 11:00 PM', openDays: 'Everyday' },
    { name: 'Seafood Tomyam', price: 38, emoji: '🦐', diet: 'None', pax: '3-5', halal: true, celebration: true, location: 'Thai Seafood', openTime: '5:00 PM - 12:00 AM', openDays: 'Mon-Sat' },
    { name: 'Family Set Meal', price: 120, emoji: '🍽️', diet: 'None', pax: 'Above 5', halal: true, celebration: true, location: 'Chinese Restaurant', openTime: '11:00 AM - 10:00 PM', openDays: 'Everyday' },
    { name: 'Chicken Chop', price: 22, emoji: '🍗', diet: 'None', pax: '1-2', halal: false, celebration: false, location: 'Western Stall', openTime: '5:00 PM - 12:00 AM', openDays: 'Everyday' }
];
for(let i=0; i<50; i++) {
    let item = { ...dinnerItems[i % dinnerItems.length] };
    if (i >= dinnerItems.length) item.name = `${item.name} (Dinner Set ${Math.floor(i / dinnerItems.length) + 1})`;
    item.time = 'Dinner';
    FOODS.push(item);
}

// (Tea Time)
const teaItems = [
    { name: 'Cheese Cake', price: 15, emoji: '🍰', diet: 'Vegetarian', pax: '1-2', halal: true, celebration: false, location: 'Secret Recipe', openTime: '10:00 AM - 10:00 PM', openDays: 'Everyday' },
    { name: 'Mango Bingsu', price: 25, emoji: '🍧', diet: 'Vegetarian', pax: '1-2', halal: true, celebration: false, location: 'MyKori', openTime: '12:00 PM - 11:00 PM', openDays: 'Everyday' },
    { name: 'Fluffy Souffle', price: 28, emoji: '🥞', diet: 'Vegetarian', pax: '1-2', halal: true, celebration: false, location: 'Fluffstack', openTime: '11:00 AM - 10:00 PM', openDays: 'Everyday' },
    { name: 'Egg Tart', price: 9, emoji: '🥧', diet: 'Vegetarian', pax: '1-2', halal: true, celebration: false, location: 'Beryl\'s', openTime: '10:00 AM - 10:00 PM', openDays: 'Everyday' },
    { name: 'Waffles', price: 22, emoji: '🧇', diet: 'Vegetarian', pax: '1-2', halal: true, celebration: false, location: 'Inside Scoop', openTime: '1:00 PM - 11:00 PM', openDays: 'Tue-Sun' },
    { name: 'Cendol', price: 6, emoji: '🍧', diet: 'Vegetarian', pax: '1-2', halal: true, celebration: false, location: 'Penang Road', openTime: '10:00 AM - 6:00 PM', openDays: 'Everyday' },
    { name: 'Croissant', price: 12, emoji: '🥐', diet: 'Vegetarian', pax: '1-2', halal: true, celebration: false, location: 'PAUL', openTime: '8:00 AM - 9:00 PM', openDays: 'Everyday' },
    { name: 'Brownie', price: 14, emoji: '🍫', diet: 'Vegetarian', pax: '1-2', halal: true, celebration: false, location: 'Coffee Bean', openTime: '8:00 AM - 11:00 PM', openDays: 'Everyday' },
    { name: 'Ais Kacang', price: 8, emoji: '🍧', diet: 'Vegetarian', pax: '1-2', halal: true, celebration: false, location: 'Food Court', openTime: '10:00 AM - 8:00 PM', openDays: 'Everyday' },
    { name: 'Tiramisu', price: 26, emoji: '🍵', diet: 'Vegetarian', pax: '1-2', halal: true, celebration: false, location: 'Matcha Cafe', openTime: '12:00 PM - 10:00 PM', openDays: 'Everyday' }
];
for(let i=0; i<50; i++) {
    let item = { ...teaItems[i % teaItems.length] };
    if (i >= teaItems.length) item.name = `${item.name} (Flavor ${Math.floor(i / teaItems.length) + 1})`;
    item.time = 'Tea Time';
    FOODS.push(item);
}

//  (Supper)
const supperItems = [
    { name: 'Mamak Noodles', price: 12, emoji: '🍜', diet: 'None', pax: '1-2', halal: true, celebration: false, location: 'Murni', openTime: '24 Hours', openDays: 'Everyday' },
    { name: 'Burger Ramly', price: 15, emoji: '🍔', diet: 'None', pax: '1-2', halal: true, celebration: false, location: 'Ramly Stall', openTime: '6:00 PM - 3:00 AM', openDays: 'Everyday' },
    { name: 'Maggi Goreng', price: 10, emoji: '🍜', diet: 'None', pax: '1-2', halal: true, celebration: false, location: 'Mamak', openTime: '24 Hours', openDays: 'Everyday' },
    { name: 'Kebab Wrap', price: 18, emoji: '🌯', diet: 'None', pax: '1-2', halal: true, celebration: false, location: 'Kebab King', openTime: '5:00 PM - 3:00 AM', openDays: 'Everyday' },
    { name: 'Dim Sum', price: 30, emoji: '🥟', diet: 'None', pax: '3-5', halal: false, celebration: true, location: '24H Dim Sum', openTime: '24 Hours', openDays: 'Everyday' },
    { name: 'Satay', price: 25, emoji: '🍢', diet: 'None', pax: '3-5', halal: true, celebration: true, location: 'Satay Club', openTime: '6:00 PM - 1:00 AM', openDays: 'Mon-Sat' },
    { name: 'Mookata', price: 40, emoji: '🍖', diet: 'None', pax: 'Above 5', halal: false, celebration: true, location: 'Mookata', openTime: '7:00 PM - 2:00 AM', openDays: 'Wed-Mon' },
    { name: 'Nasi Goreng', price: 12, emoji: '🍚', diet: 'None', pax: '1-2', halal: true, celebration: false, location: 'Mamak', openTime: '5:00 PM - 2:00 AM', openDays: 'Everyday' },
    { name: 'Porridge', price: 14, emoji: '🥣', diet: 'None', pax: '1-2', halal: true, celebration: false, location: 'Night Congee', openTime: '8:00 PM - 4:00 AM', openDays: 'Mon-Sat' },
    { name: 'Cheese Naan', price: 9, emoji: '🫓', diet: 'Vegetarian', pax: '1-2', halal: true, celebration: false, location: 'NZ Mamak', openTime: '24 Hours', openDays: 'Everyday' }
];
for(let i=0; i<50; i++) {
    let item = { ...supperItems[i % supperItems.length] };
    if (i >= supperItems.length) item.name = `${item.name} (Late Night Set ${Math.floor(i / supperItems.length) + 1})`;
    item.time = 'Supper';
    FOODS.push(item);
}

//  (Drinks)
const drinkItems = [
    { name: 'Watermelon Juice', price: 8, emoji: '🍉', diet: 'Vegan', pax: '1-2', halal: true, celebration: false, location: 'Juice Works', openTime: '9:00 AM - 9:00 PM', openDays: 'Mon-Sat' },
    { name: 'Orange Juice', price: 9, emoji: '🍊', diet: 'Vegan', pax: '1-2', halal: true, celebration: false, location: 'Juice Bar', openTime: '8:00 AM - 8:00 PM', openDays: 'Everyday' },
    { name: 'Apple Juice', price: 9, emoji: '🍏', diet: 'Vegan', pax: '1-2', halal: true, celebration: false, location: 'Juice Bar', openTime: '8:00 AM - 8:00 PM', openDays: 'Everyday' },
    { name: 'Iced Latte', price: 15, emoji: '☕', diet: 'Vegetarian', pax: '1-2', halal: true, celebration: false, location: 'Starbucks', openTime: '7:00 AM - 11:00 PM', openDays: 'Everyday' },
    { name: 'Bubble Milk Tea', price: 12, emoji: '🧋', diet: 'Vegetarian', pax: '1-2', halal: true, celebration: false, location: 'Tealive', openTime: '10:00 AM - 10:00 PM', openDays: 'Everyday' },
    { name: 'Teh Tarik', price: 3, emoji: '☕', diet: 'Vegetarian', pax: '1-2', halal: true, celebration: false, location: 'Mamak', openTime: '24 Hours', openDays: 'Everyday' },
    { name: 'Matcha Frappe', price: 18, emoji: '🍵', diet: 'Vegetarian', pax: '1-2', halal: true, celebration: false, location: 'Matcha Cafe', openTime: '12:00 PM - 9:00 PM', openDays: 'Wed-Mon' },
    { name: 'Beer Tower', price: 120, emoji: '🍺', diet: 'Vegan', pax: 'Above 5', halal: false, celebration: true, location: 'Hawker Center', openTime: '5:00 PM - 12:00 AM', openDays: 'Everyday' },
    { name: 'Milo Dinosaur', price: 8, emoji: '🥤', diet: 'Vegetarian', pax: '1-2', halal: true, celebration: false, location: 'Mamak', openTime: '24 Hours', openDays: 'Everyday' },
    { name: 'Milkshake', price: 14, emoji: '🥤', diet: 'Vegetarian', pax: '1-2', halal: true, celebration: false, location: 'Fatboy\'s', openTime: '11:00 AM - 11:00 PM', openDays: 'Everyday' }
];
for(let i=0; i<50; i++) {
    let item = { ...drinkItems[i % drinkItems.length] };
    if (i >= drinkItems.length) item.name = `${item.name} (Flavor ${Math.floor(i / drinkItems.length) + 1})`;
    item.time = 'Drinks';
    FOODS.push(item);
}



const mealTime = sessionStorage.getItem('mealTime') || 'Lunch';
const currentPax = sessionStorage.getItem('pax') || 'Any';
const currentBudget = sessionStorage.getItem('budget') || 'Any';
const currentDiet = sessionStorage.getItem('diet') || 'Any';

let currentDeck = []; 
let lastPick = null; // 

function matchBudget(food, budget) {
    if (budget === 'Any') return true;
    if (budget === 'RM 0-10') return food.price <= 10;
    if (budget === 'RM 11-30') return food.price >= 11 && food.price <= 30;
    if (budget === 'RM 31-50') return food.price >= 31 && food.price <= 50;
    if (budget === 'Above RM 50') return food.price > 50;
    return true;
}

function matchPax(food, pax) {
    if (pax === 'Any') return true;
    if (pax === 'Above 5') return food.pax === 'Above 5';
    if (pax === '3-5') return food.pax === '3-5' || food.pax === 'Above 5';
    if (pax === '1-2') return food.pax === '1-2' || food.pax === '3-5';
    return true;
}

function matchDiet(food, diet) {
    if (diet === 'Any') return true;
    if (diet === 'Halal') return food.halal === true;
    if (diet === 'Non-Halal') return food.halal === false;
    if (diet === 'Celebration') return food.celebration === true;
    if (diet === 'Vegetarian') return food.diet === 'Vegetarian' || food.diet === 'Vegan';
    if (diet === 'Diet') return food.price <= 25 && (food.diet === 'Vegan' || food.diet === 'Vegetarian');
    return true;
}


function buildDeck() {
  
    const timePool = FOODS.filter(food => food.time === mealTime);


    let filtered = timePool.filter(food => 
        matchBudget(food, currentBudget) && 
        matchPax(food, currentPax) && 
        matchDiet(food, currentDiet)
    );

    if (filtered.length < 50) {
        filtered = timePool;
    }

    //  (Fisher-Yates)
    for (let i = filtered.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [filtered[i], filtered[j]] = [filtered[j], filtered[i]];
    }

    currentDeck = filtered;
}

// ==========================================
// 4. UI 
// ==========================================
function pickLunch() {

    if (currentDeck.length === 0) {
        buildDeck();
    }

    let selectedFood;
    
  
    selectedFood = currentDeck.pop();


    if (lastPick && selectedFood && selectedFood.name === lastPick.name && currentDeck.length > 0) {

        currentDeck.unshift(selectedFood);
        selectedFood = currentDeck.pop();
    }
 
    lastPick = selectedFood;

    if (!selectedFood) {
        selectedFood = { name: 'Error', price: 0, emoji: '❓', pax: '1-2', location: 'None', openTime: 'None', openDays: 'None' };
    }

    const content = document.getElementById('result-content');
    content.style.animation = 'none';
    content.offsetHeight;
    content.style.animation = 'zoomIn 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275)';

    fireConfetti();

    //  UI
    let displayTime = mealTime === 'Drinks' ? 'BEVERAGE' : mealTime.toUpperCase();
    document.getElementById('r-time').innerText = displayTime;
    document.getElementById('r-emoji').innerText = selectedFood.emoji;
    document.getElementById('r-name').innerText = selectedFood.name;
    document.getElementById('r-price').innerText = `RM ${selectedFood.price}`;
    document.getElementById('r-pax').innerText = `${selectedFood.pax} pax`;
    document.getElementById('r-diet').innerText = currentDiet !== 'Any' ? currentDiet : 'Food';
    
    document.getElementById('r-location').innerText = selectedFood.location;
    document.getElementById('r-time-detail').innerText = selectedFood.openTime;
    document.getElementById('r-days').innerText = selectedFood.openDays;

    // Google Maps
    const mapsLink = document.getElementById('google-maps-link');
    mapsLink.href = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(selectedFood.location + ' Malaysia')}`;
}

function fireConfetti() {
    const container = document.getElementById('confetti-container');
    container.innerHTML = '';
    const colors = ['#FF4757', '#FFD32A', '#2ECC71', '#4DABF7', '#FF7F50'];
    for (let i = 0; i < 60; i++) {
        const confetti = document.createElement('div');
        confetti.classList.add('confetti');
        confetti.style.left = Math.random() * 100 + '%';
        confetti.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
        confetti.style.animationDelay = Math.random() * 0.3 + 's';
        confetti.style.animationDuration = Math.random() * 2 + 1.5 + 's';
        if (Math.random() > 0.5) confetti.style.borderRadius = '50%';
        container.appendChild(confetti);
    }
}

window.addEventListener('DOMContentLoaded', () => {
    buildDeck();
    pickLunch();
});