let timer;
let isRunning = false;
let minutes = 0;
let seconds = 0;

const timerDisplay = document.getElementById("timer");
const startStopButton = document.getElementById("startStop");
const resetButton = document.getElementById("reset");

startStopButton.addEventListener("click", () => {
  if (isRunning) {
    // Pausar o cronômetro
    clearInterval(timer);
    startStopButton.textContent = "Iniciar";
  } else {
    // Iniciar o cronômetro
    timer = setInterval(updateTimer, 1000);
    startStopButton.textContent = "Pausar";
  }
  isRunning = !isRunning;
});

resetButton.addEventListener("click", () => {
  // Zerar o cronômetro
  clearInterval(timer);
  isRunning = false;
  minutes = 0;
  seconds = 0;
  timerDisplay.textContent = "00:00";
  startStopButton.textContent = "Iniciar";
});

function updateTimer() {
  seconds++;

  if (seconds >= 60) {
    seconds = 0;
    minutes++;
  }

  timerDisplay.textContent = formatTime(minutes, seconds);
}

function formatTime(minutes, seconds) {
  const formattedMinutes = minutes < 10 ? `0${minutes}` : minutes;
  const formattedSeconds = seconds < 10 ? `0${seconds}` : seconds;
  return `${formattedMinutes}:${formattedSeconds}`;
}
