const toggleBtn = document.getElementById("toggleBtn");
const intervalInput = document.getElementById("intervalInput");

// default 3 seconds
let interval = 3000;
let timer = null;

// Generate a random RGBA color
function randomColor() {
    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);
    const a = 0.3 + Math.random() * 0.4; // alpha between 0.3 and 0.7
    return `rgba(${r}, ${g}, ${b}, ${a})`;
}

// Change background color
function changeBackground() {
    document.body.style.backgroundColor = randomColor();
}

// Start the interval
function startTimer() {
    if (timer) return; // avoid multiple intervals
    timer = setInterval(changeBackground, interval);
    toggleBtn.textContent = "Stop";
    toggleBtn.classList.remove("btn-success");
    toggleBtn.classList.add("btn-danger");
}

// Stop the interval
function stopTimer() {
    clearInterval(timer);
    timer = null;
    toggleBtn.textContent = "Start";
    toggleBtn.classList.remove("btn-danger");
    toggleBtn.classList.add("btn-success");
}

// Toggle button behavior
toggleBtn.addEventListener("click", () => {
    if (timer) {
        stopTimer();
    } else {
        const newInterval = parseFloat(intervalInput.value);

        if (!isNaN(newInterval)) {
            if (newInterval <= 0) {
                alert("Please enter a positive number for the interval.");
                return;
            }
            interval = newInterval * 1000;
        }

        changeBackground(); // immediately change color
        startTimer();
    }
});

// Start automatically on page load
window.addEventListener("load", () => {
    changeBackground();
    startTimer();
});
