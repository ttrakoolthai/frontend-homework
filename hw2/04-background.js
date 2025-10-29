const toggleBtn = document.getElementById("toggleBtn");
const intervalInput = document.getElementById("intervalInput");

let interval = null;
let timer = null;

// Generate a random RGBA color
function randomColor() {
    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);
    const a = 0.3 + Math.random() * 0.4;
    return `rgba(${r}, ${g}, ${b}, ${a})`;
}

// Change background color
function changeBackground() {
    document.body.style.backgroundColor = randomColor();
}

// Start the interval
function startTimer() {
    // do nothing if interval not set
    if (!interval) return;
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
        if (!isNaN(newInterval) && newInterval > 0) {
            interval = newInterval * 1000;
            changeBackground(); // immediately change color
            startTimer();
        } else {
            alert("Please enter a valid interval in seconds.");
        }
    }
});
