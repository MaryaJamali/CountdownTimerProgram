// Find page elements
const date = document.querySelector("input[name='date']");
const time = document.querySelector(".time");


// Add event to button
date.addEventListener("change", currentTime);

function currentTime(t) {
    // Prevent the default behavior of an event in the browser
    t.preventDefault();
    clearInterval(timeInterval);
    // Convert total time to milliseconds
    const temp = new Date(date.value);
    startTime(temp);
};

