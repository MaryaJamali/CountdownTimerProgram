// Find page elements
const date = document.querySelector("input[name='date']");
const time = document.querySelector(".time");


// Add event to button
date.addEventListener("change", currentTime);

function currentTime(e) {
    // Prevent the default behavior of an event in the browser
    e.preventDefault();
    clearInterval(timeInterval);
    // Convert total time to milliseconds
    const temp = new Date(date.value);
    startTime(temp);
};

function startTime(d) {

}

function timeRemaining(d) {
    let currentDate = new Date();
    // Subtract the user's input time from the current time
    let timeLeft = Date.parse(d) - Date.parse(currentDate);

    // Algorithm to convert milliseconds to days, hours, minutes and seconds
    let seconds = Math.floor((timeLeft / 1000) % 60);
    let minutes = Math.floor(((timeLeft / 1000) / 60) % 60);
    let hours = Math.floor((timeLeft / (1000 * 60 * 60)) % 24);
    let days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));

    return { "timeLeft": timeLeft, "days": days, "hours": hours, "minutes": minutes, "seconds": seconds };
}