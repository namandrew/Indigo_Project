var roundNum = 1;
var time = 60;

// function needs to work every three rounds 
function blockNum(roundNum) {
    if (roundNum == 1) {return 2;}
    else {
        
        return Math.pow(roundNum, 2);
    }
}

// while (timer > 0) {
//     boxes = blockNum(roundNum);
// }
document.getElementById("start-button").addEventListener("click", function () {
    var downloadTimer = setInterval(function(){
        if(time <= 0){
          clearInterval(downloadTimer);
        }
        var timerbox = document.getElementById("progressBar")
        timerbox.textContent = time
        time -= 1;
    }, 1000);
})

