let music = new Audio("ticTacToeMedia/music.mp3");
let audioTurn = new Audio("ticTacToeMedia/ting.mp3");
// let gameover = new Audio("TicTacToe/ticTacToeMedia/gameover.mp3");
// variable x or 0

let turn = "X";
let isgameover = false;
// function to change the turn
const changeTurn = () => {
  return turn === "X" ? "0" : "X";
};
// function to check for a win
const checkWin = () => {
  let wins = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];
  wins.forEach((value) => {
    if (
      cells[value[0]].innerHTML === cells[value[1]].innerHTML &&
      cells[value[2]].innerHTML === cells[value[1]].innerHTML &&
      cells[value[0]].innerHTML != ""
    ) {
      document.getElementsByClassName("info")[0].innerHTML =
        cells[value[0]].innerHTML + " won";
      cells[value[0]].style.cssText = "color: red; font-size:10vw";
      cells[value[1]].style.cssText = "color: red; font-size:10vw";
      cells[value[2]].style.cssText = "color: red; font-size:10vw";
      document.getElementsByTagName("img")[0].style.width = "15vh"

      isgameover = true;
      music.play();
    }
  });
};
// game logic
//
let cells = document.getElementsByClassName("cell");

Array.from(cells).forEach((element) => {
  element.addEventListener("click", () => {
    if (element.innerHTML === "") {
      element.innerHTML = turn;
      turn = changeTurn();
      audioTurn.play();
      checkWin();
      if (isgameover == false) {
        document.getElementsByClassName("info")[0].innerHTML =
          " turn of " + turn;
      }
    }
  });
});
// reset function
function reset() {
  Array.from(cells).forEach((element) => {
    element.innerHTML = "";
  });
  music.pause();
  music.currentTime = 0;
  turn = "X";
  isgameover=false;
  document.getElementsByClassName("info")[0].innerHTML = " turn of " + turn;
  document.getElementsByTagName("img")[0].style.width = "0vh"
  Array.from(cells).forEach((element)=>{
    element.style.cssText = "color: black; font-size:9vw";
  })
  
}
