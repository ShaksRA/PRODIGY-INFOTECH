let time = 0;
let isRunning = false;
let interval;
let laps = [];

const display = document.getElementById('display');
const startPauseBtn = document.getElementById('startPauseBtn');
const resetBtn = document.getElementById('resetBtn');
const lapBtn = document.getElementById('lapBtn');
const lapsList = document.getElementById('lapslist');

function formatTime(ms) {
    const minutes = Math.floor(ms / 60000);
    const seconds = Math.floor((ms % 60000) / 1000);
    const milliseconds = Math.floor((ms % 1000) / 10);
    return `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}.${milliseconds.toString().padStart(2, '0')}`;
}

function updateDisplay() {
    display.textContent = formatTime(time);
}

function startPause() {
    if (isRunning) {
        clearInterval(interval);
        startPauseBtn.textContent = 'Start';
        lapBtn.disabled = true;
    } else {
        interval = setInterval(() => {
            time += 10;
            updateDisplay();
        }, 10);
        startPauseBtn.textContent = 'Pause';
        lapBtn.disabled = false;
    }
    isRunning = !isRunning;
}

function reset() {
    clearInterval(interval);
    time = 0;
    isRunning = false;
    laps = [];
    updateDisplay();
    startPauseBtn.textContent = 'Start';
    lapBtn.disabled = true;
    lapsList.innerHTML = '';
}

function lap() {
    laps.push(time);
    const lapItem = document.createElement('div');
    lapItem.classList.add('lap-item');
    lapItem.textContent = `Lap ${laps.length}: ${formatTime(time)}`;
    lapsList.appendChild(lapItem);
}

startPauseBtn.addEventListener('click', startPause);
resetBtn.addEventListener('click', reset);
lapBtn.addEventListener('click', lap);

updateDisplay();