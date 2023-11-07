// simulated weather data(you can replace this with actual data)

const weatherData = {
    location:"Mumbai",
    temperature:"34&deg;C"
};
// const currentData = new Date(); // Change "Data" to "Date"

function updateDataTime() {
    const dateTimeContainer = document.getElementById('date-time-container');
    console.log("first")
    const dateElement = document.getElementById('date'); // Define dateElement
    const currentData = new Date(); // Change "Data" to "Date"
    const options = {
        weekday: 'long',
        year: 'numeric',
        month: 'long',
        day: 'numeric',
        hour: '2-digit',
        minute: '2-digit'
    };
    const formattedDate = currentData.toLocaleDateString('en-US', options); // Correct the typo
    dateElement.textContent = formattedDate;
}

// call the function to initially display the date and time
updateDataTime();
// you can call this function periodically to update the date and time

setInterval(updateDataTime, 1000);

// update the content of the HTML element with the simulated weather data

document.getElementById("location").textContent = weatherData.location;
