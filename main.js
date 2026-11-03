const counter = document.getElementById('counter');
const plusBtn = document.getElementById('plusBtn');
const resetBtn = document.getElementById('resetBtn');

let count = Number(localStorage.getItem('count')) || 0;

counter.textContent = count;

plusBtn.addEventListener('click', () => {
    count++;
    counter.textContent = count;
    localStorage.setItem('count', count);
});

resetBtn.addEventListener('click', () => {
    count = 0;
    counter.textContent = count;
    localStorage.removeItem('count');
});