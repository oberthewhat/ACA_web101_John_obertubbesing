let goals = document.getElementById("goals")
var button = document.getElementById("clickme"),
    count = 0;
button.onclick = function() {
    count += 1;

    console.log(goals);
    goals.innerHTML = count;
};

window.onload = function() {

    var second = 60;
    var minute = 1;

    setInterval(function() {
        document.getElementById("timer").innerHTML = "0:" + second;

        second--;

        if (second == 60) {
            second = 60;
        }
        if (second == 0) {
            document.getElementById("timer").innerHTML = "Buzz!";
            button.onclick = function() {
                count = count;
            }
        }
        if (second <= -1) {
            document.getElementById("timer").innerHTML = "Final";
            button.onclick = function() {
                count = count;
            }

        }
    }, 1000);
}