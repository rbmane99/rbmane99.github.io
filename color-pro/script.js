
let numSquares=6;
let colors = generateRandomColors(numSquares);
let squares = document.querySelectorAll(".square");
let pickedColor = pickColor();
let colorDisplay = document.getElementById("colorDisplay");
let messageDisplay = document.querySelector("#msg");
let h1 = document.querySelector("h1");
let reset = document.querySelector("#reset");
let easybtn = document.querySelector("#easybtn");
let hardbtn = document.getElementById("hardbtn");


easybtn.addEventListener("click", function () {
    hardbtn.classList.remove("selected");
    easybtn.classList.add("selected");
    numSquares=3;
    colors=generateRandomColors(numSquares);
    pickedColor=pickColor();
    colorDisplay.textContent=pickedColor;
    for(let i=0;i<squares.length;i++){
        if(colors[i]){
            squares[i].style.backgroundColor=colors[i];
        }else{
            squares[i].style.display="none";
        }
    }
});

hardbtn.addEventListener("click", function () {
    hardbtn.classList.add("selected");
    easybtn.classList.remove("selected");
    numSquares=6;
    colors=generateRandomColors(numSquares);
    pickedColor=pickColor();
    colorDisplay.textContent=pickedColor;
    for(let i=0;i<squares.length;i++){
        
        squares[i].style.backgroundColor=colors[i];
        squares[i].style.display="block";
        
    }
});

reset.addEventListener("click", function () {
    colors = generateRandomColors(numSquares);
    // pick new color
    pickedColor = pickColor();
    // change color display to match picked color
    colorDisplay.textContent = pickedColor;
    messageDisplay.textContent="";
    this.textContent="New Colors"
    // change colors of squares
    for (let i = 0; i < squares.length; i++) {
        squares[i].style.backgroundColor = colors[i];
    }
    h1.style.backgroundColor = " rgb(59, 100, 126)";
});

colorDisplay.textContent = pickedColor;

for (let i = 0; i < squares.length; i++) {
    // add initial colors
    squares[i].style.backgroundColor = colors[i];

    // add click listner
    squares[i].addEventListener("click", function () {
        // grab color of clicked square and compare
        let clickedColor = this.style.backgroundColor;
        // compare
        if (clickedColor === pickedColor) {
            messageDisplay.textContent = "correct!!"
            reset.textContent = "play again";
            changeColors(clickedColor);
            h1.style.backgroundColor = pickedColor;
        }
        else {
            this.style.backgroundColor = "#232323";
            messageDisplay.textContent = "try again";
        }

    });
}

// changes the color of squares
function changeColors(color) {
    // loop through colors
    for (let i = 0; i < squares.length; i++) {
        // change it to right color
        squares[i].style.backgroundColor = color;
    }

}

// randomly pick color h1
function pickColor() {
    let random = Math.floor(Math.random() * colors.length);
    return colors[random];
}

// generateRandomColors
function generateRandomColors(num) {
    // make array
    let arr = []
    // repeat num times
    for (let i = 0; i < num; i++) {
        arr.push(randomColor())
        // get random colors and add it to the array

    }
    // return that array
    return arr;
}

// generates random colors rgb
function randomColor() {
    // pick a "red" from 0-255
    let r = Math.floor(Math.random() * 256);
    // pick a "red" from 0-255
    let g = Math.floor(Math.random() * 256);

    // pick a "red" from 0-255
    let b = Math.floor(Math.random() * 256);
    // return rgb like rgb(223,123,22)
    return "rgb(" + r + ", " + g + ", " + b + ")";

}