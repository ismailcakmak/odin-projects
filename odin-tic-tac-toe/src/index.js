
const prompt = require('prompt-sync')();


//helper functions
function getRowWinner(arr){

    //return "none", "player1" or "player2"

    const areArraysEqual = (arr1, arr2) =>
        arr1.length === arr2.length && arr1.every((val, index) => val === arr2[index]);
    
    const row = arr.map((idx)=>board[idx])

    if (row.some((element)=> element===" ")) return "none";

    return (areArraysEqual(row, ["x","x","x"])) ?  "player1" : "player2";
}


function isGameBoardFull(){
    return board.every((element) => {element!==" "})
}


function gameObject(player1, player2, board) {
    
    this.players = [player1,player2],
    this.isFinished = false,
    this.winner = null,

    this.evaluate = function(){

        //update isFinished and winner properly

        const idxToCheck = [[0,1,2], [3,4,5], [6,7,8], [0,4,8], [6,7,8]];
        const rowStatusList = idxToCheck.map((row)=>getRowWinner(row));

        if (rowStatusList.some((rowStatus)=>{rowStatus==="player1"})){
            //player1 won the game

            this.isFinished = true;
            this.winner = this.players[0];
        }

        else if(rowStatusList.some((rowStatus)=>{rowStatus==="player2"})) {
            //player2 won the game

            this.isFinished = true;
            this.winner = this.players[1];
        }

        else if (isGameBoardFull() && rowStatusList.every((rowStatus)=>(rowStatus==="null"))) {
            //there is a draw

            this.isFinished = true;
            this.winner = "draw";
        }

        else {
            //no winner yet, game is still continue
        }
    }
};


function Player(name, board, sign){
    this.name = name;
    
    this.play = function() {
        let idx = Number(prompt(`${name} do your move :`));
        board[idx] = sign; 
    }
}

function gameBoard2() {
    this.board = [" ", " ", " ", " ", " ", " ", " ", " ", " "];
    this.display = function() {
        const str = `${this.board[0]} ${this.board[1]} ${this.board[2]}
                     ${this.board[3]} ${this.board[4]} ${this.board[5]}
                     ${this.board[6]} ${this.board[7]} ${this.board[8]}`
        console.log(str);
    }
}

function main() {

    console.log("hello there");
    
    const gameBoard = new gameBoard2();

    const player1 = new Player("ismail", gameBoard.board, "X");
    const player2 = new Player("elif", gameBoard.board, "O");

    const game = new gameObject(player1, player2, gameBoard.board);
    
    while(!game.isFinished){
        player1.play();
        player2.play();
        gameBoard.display();
        game.evaluate();
    }

    console.log(gameObject.winner.name);
}

main();

    /*
    0 1 2
    3 4 5
    6 7 8
    */

    /*
    game object -> manages gameBoard and players
    */

export default gameBoard2;