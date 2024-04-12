// Find page elements
const date = document.querySelector("input[name='date']");
const time = document.querySelector(".time");
let timeInterval;
let timeStop = true;
const saveValue = localStorage.getItem("countdown") || false;
if (saveValue) {
    startClock(saveValue);
    let inputValue = new Date(saveValue);
    endDate.valueAsDate = inputValue;
}
// Add event to button
date.addEventListener("change", currentTime);

function currentTime(e) {
    // Prevent the default behavior of an event in the browser
    e.preventDefault();
    // Every time the time is changed, the timer will start from the beginning
    clearInterval(timeInterval);
    // Convert total time to milliseconds
    const temp = new Date(date.value);
    localStorage.setItem("countdown", temp);
    startTime(temp);
    timeStop = true;
};

function startTime(d) {
    function updateCounter() {
        let clockLeft = (timeRemaining(d));
        // Negative time control
        if (clockLeft.total <= 0) {
            timeStop = false;
        }
        for (let clock in clockLeft) {
            // Find page elements
            let element = time.querySelector("." + clock);
            if (element) {
                element.innerHTML = clockLeft[clock];
            }
        }
    }
    updateCounter();
    if (timeStop) {
        // Every 1000 milliseconds (that is, every second) the updateCounter function is called and its result is stored in timeInterval.
        timeInterval = setInterval(updateCounter, 1000);
    }
    else {
        clearInterval(timeInterval);
    }
}

function timeRemaining(d) {
    let currentDate = new Date();
    // Subtract the user's input time from the current time
    let timeLeft = Date.parse(d) - Date.parse(currentDate);

    // Algorithm to convert milliseconds to days, hours, minutes and seconds
    let days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
    let hours = Math.floor((timeLeft / (1000 * 60 * 60)) % 24);
    let mintues = Math.floor(((timeLeft / 1000) / 60) % 60);
    let seconds = Math.floor((timeLeft / 1000) % 60);


    return { "timeLeft": timeLeft, "days": days, "hours": hours, "mintues": mintues, "seconds": seconds };
}