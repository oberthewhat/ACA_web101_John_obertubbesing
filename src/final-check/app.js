let goals = document.getElementById("goals")
var button = document.getElementById("clickme"),
    count = 0;
button.onclick = function() {
    count += 1;

    console.log(goals);
    goals.innerHTML = count;
};

window.onload = function() {

    var second = 01;
    var minute = 5;

    setInterval(function() {
        document.getElementById("timer").innerHTML = minute + ":" + second;

        second--;

        if (second == 00) {
            minute--;
            second = 60;
        }
        if (minute == 0 && second == 1) {
            document.getElementById("timer").innerHTML = "Timer Stopped";
        }
        if (minute <= -1) {
            document.getElementById("timer").innerHTML = " ";
        }
    }, 1000);
}