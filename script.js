var rgbanswer = [];
var colors = [];
var options = [];

for (i = 0; i < 3; i++) {
  rgbanswer[i] = Math.floor(Math.random() * 255);
}

var answer = "rgb(" + rgbanswer[0] + ", " + rgbanswer[1] + ", " + rgbanswer[2] + ")";

for (i = 0; i < 6; i++) {
  for (j = 0; j < 3; j++) {
    colors[j] = Math.floor(Math.random() * 255);
  }
  options[i] = "rgb(" + colors[0] + ", " + colors[1] + ", " + colors[2] + ")";
}

// var colors = ["rgb(255, 0, 0)", "rgb(0, 255, 0)", "rgb(0, 0, 255)",
//   "rgb(255, 255, 0)", "rgb(255, 0, 255)", "rgb(0, 255, 255)"
// ]

options[Math.floor(Math.random() * 6)] = answer;

var squares = document.getElementsByClassName("square");

var answer_display = document.getElementById("color_display");

var gameover = false;
var newgame = document.getElementById("newgame");

answer_display.textContent = answer.toUpperCase();

var p = document.querySelector("p");

for (i = 0; i < squares.length; i++) {
  squares[i].style.backgroundColor = options[i];

  squares[i].addEventListener("click", function() {
    if (gameover != true) {
      if (this.style.backgroundColor === answer) {
        console.log("correct")
        gameover = true;
        p.textContent = "CORRECT!";
        newgame.textContent = "Play again?"
        for (i = 0; i < squares.length; i++) {
          squares[i].style.backgroundColor = answer;
          squares[i].classList.remove("eliminate");
        }
      } else {
        console.log("incorrect")
        this.classList.add("eliminate");
        p.textContent = "INCORRECT";
      }
    }
  });
}


newgame.addEventListener("click", function() {
  gameover = false;
  newgame.textContent = "New Colors";
  p.textContent = ' ';


  for (i = 0; i < 3; i++) {
    rgbanswer[i] = Math.floor(Math.random() * 255);
  }

  answer = "rgb(" + rgbanswer[0] + ", " + rgbanswer[1] + ", " + rgbanswer[2] + ")";

  for (i = 0; i < 6; i++) {
    for (j = 0; j < 3; j++) {
      colors[j] = Math.floor(Math.random() * 255);
    }
    options[i] = "rgb(" + colors[0] + ", " + colors[1] + ", " + colors[2] + ")";
  }

  // var colors = ["rgb(255, 0, 0)", "rgb(0, 255, 0)", "rgb(0, 0, 255)",
  //   "rgb(255, 255, 0)", "rgb(255, 0, 255)", "rgb(0, 255, 255)"
  // ]

  options[Math.floor(Math.random() * 6)] = answer;

  for (i = 0; i < squares.length; i++) {
    squares[i].style.backgroundColor = options[i];
    squares[i].classList.remove("eliminate");
  }
  answer_display.textContent = answer.toUpperCase();

});
