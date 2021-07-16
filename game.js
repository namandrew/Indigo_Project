var roundNum = 0;
var container = document.getElementById("gridContainer");
var time = 60;
var score = 0;
var scoreDisplay = document.getElementById("scoreBar");
var offBox;
// function needs to work every three rounds 
function side(roundNum) {
    if (roundNum == 1) {return 2;}
    else {
        if (roundNum % 3 == 2) {return roundNum+1;} 
        else if (roundNum % 3 == 0) {return roundNum;}
        else if (roundNum% 3 == 1) { return roundNum-1;}
    }
}
function randomColor() {
    let red = Math.floor(Math.random() * 256);
    let green = Math.floor(Math.random() * 256);
    let blue = Math.floor(Math.random() * 256);
    return {red: red, green: green, blue: blue};
}

document.getElementsByClassName("jumbotron")[0].style.setProperty("background-color", randomColor());

document.getElementById("start-button").addEventListener("click", function () {
    var downloadTimer = setInterval(function(){
        if(time <= 0){ 
          clearInterval(downloadTimer);
        }
        var timerbox = document.getElementById("progressBar")
        timerbox.textContent = time
        time -= 1;
    }, 1000);
    document.getElementById("start-button").style.visibility = "hidden";
    document.getElementById("start-instructions").style.visibility = "hidden";
    createBoxes();
})
function createBoxes() {
    roundNum++;
    var sideLength = side(roundNum);
    for (var r = 0; r < sideLength; r++) {
        let row = document.createElement("div");
        row.className = "row";
        for(var c = 0; c < sideLength; c++) {
            let col = document.createElement("div");
            col.className = "col p-1";
            let colorDiv = document.createElement("div");
            let boxStyle = "width: 100%; height: " + 700 / (sideLength) + "px; border-radius: 15px;";
            colorDiv.style = boxStyle;
            colorDiv.addEventListener("click", checker, false);
            colorDiv.className = "colorDiv";
            col.appendChild(colorDiv);
            row.appendChild(col);
        }
        container.appendChild(row);
    }
    let color = randomColor();
    let red = color.red;
    let green = color.green;
    let blue = color.blue;
    let rgbColor = "rgb(" + red + ", " + green + ", " + blue + ")";
    let offRed = red + 10;
    let offGreen = green + 10;
    let offBlue = blue + 10;
    if (red > 245) {
        offRed -= 40;
    }
    if (blue > 245) {
        offBlue -= 40;
    }
    if (green > 245) {
        offGreen -= 40;
    }
    let offColor = "rgb(" + offRed + ", " + offGreen + ", " + offBlue + ")"
    let boxes = document.getElementsByClassName("colorDiv");
    offBox = boxes[Math.floor(Math.random() * boxes.length)];
    for (let box of boxes) {
        box.style.setProperty("background-color", rgbColor);
    }
    offBox.style.setProperty("background-color", offColor);
}
// document get element id, text content, score
function checker() {
    if (this == offBox) {
        score++;
        scoreDisplay.textContent = score;
        let rows = container.getElementsByClassName("row");
        for (var r = rows.length-1; r >= 0; r--) {
            container.removeChild(rows[r]);
        }
        createBoxes();
    } 
}