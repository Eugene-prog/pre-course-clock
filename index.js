let timerId; // переменная, которая будет хранить ID таймера


const startButton = document.getElementById('start');
startButton.addEventListener('click', function () {
  if (timerId) {
      clearInterval(timerId); // останавливаем предыдущий таймер, если он существует
  }
  timerId = setInterval(updateClock, 1000); // запускаем  updateClock() каждую секунду
});


const stopButton = document.getElementById('stop');
stopButton.addEventListener('click', function () {
    clearInterval(timerId); // останавливаем таймер
    timerId = null;
});


function updateClock() {
    const clock = document.getElementById('clock');
    const now = new Date();
    let hours = now.getHours();

    if (hours < 10) {
      hours = '0' + hours;
    }

    let minutes = now.getMinutes();
    if (minutes < 10) {
      minutes = '0' + minutes;
    }

    let seconds = now.getSeconds();
    if (seconds < 10) {
      seconds = '0' + seconds;
    }
    clock.textContent = hours + ':' + minutes + ':' + seconds;
}