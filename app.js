setInterval(() =>{ // Updating Time
    var date = new Date();
    var hour = date.getHours(); // Fetching Hours
    var minute = date.getMinutes(); // Fetching Minutes
    var second = date.getSeconds(); // Fetching Seconds
    
    // Adding 0 before each number if the time is less than 0
    hour = hour < 10 ? "0" + hour : hour;
    minute = minute < 10 ? "0" + minute : minute;
    second = second < 10 ? "0" + second : second;

    document.querySelector(".time").innerHTML = hour + " : " + minute + " : " + second;
}), 1000