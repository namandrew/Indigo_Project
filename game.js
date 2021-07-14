var roundNum = 1;
var time = 60;
// function needs to work every three rounds 
function blockNum(roundNum) {
    if (roundNum == 1) {return 4;}
    else {
        if (roundNum % 3 == 2) {return Math.pow(roundNum + 1, 2);} 
        else if (roundNum % 3 == 0) {return Math.pow(roundNum, 2);}
        else if (roundNum% 3 == 1) { return Math.pow(roundNum - 1, 2);}
    }
}
function randomColor() {
    let red = Math.floor(Math.random() * 256);
    let green = Math.floor(Math.random() * 256);
    let blue = Math.floor(Math.random() * 256);
    return {red: red, green: green, blue: blue};
}
document.getElementById("start-button").addEventListener("click", function () {
    var downloadTimer = setInterval(function(){
        if(time <= 0){ 
          clearInterval(downloadTimer);
        }
        var timerbox = document.getElementById("progressBar")
        timerbox.textContent = time
        time -= 1;
    }, 1000);
        let color = randomColor();
        let red = color.red;
        let green = color.green;
        let blue = color.blue;
        let rgbColor = "rgb(" + red + ", " + green + ", " + blue + ")";
        let offRed = red + 10;
        let offGreen = green + 10;
        let offBlue = blue + 10;
        if (red > 245) {
            offRed -= 20
        }
        if (blue > 245) {
            offBlue -= 20
        }
        if (green > 245) {
            offGreen -= 20
        }
        let offColor = "rgb(" + offRed + ", " + offGreen + ", " + offBlue + ")"
        let boxes = document.getElementsByClassName("size2");
        let offBox = boxes[Math.floor(Math.random() * boxes.length)];
        for (let box of boxes) {
            box.style.setProperty("background-color", rgbColor);
        }
        offBox.style.setProperty("background-color", offColor)
        document.createElement("div")
})