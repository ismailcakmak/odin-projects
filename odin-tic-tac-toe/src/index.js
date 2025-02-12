import promptSync from 'prompt-sync';
const prompt = promptSync();
import { fileURLToPath } from 'url';

//helper functions
function getRowStatus(arr, board){

    //return "none", "player1" or "player2"

    const areArraysEqual = (arr1, arr2) =>
        arr1.length === arr2.length && arr1.every((val, index) => val === arr2[index]);
    
    const row = arr.map((idx)=>board[idx])

    if (areArraysEqual(row, ["X","X","X"])) return "player1";
    else if (areArraysEqual(row, ["O","O","O"])) return "player2";
    else return "none";
}



function isGameBoardFull(board){
    return board.every((element) => {element !== " "})
}


function isThereAWinner(rowStatusList){

    if (rowStatusList.some((rowStatus)=>rowStatus === "player1")){
        //player1 won the game
        return "player1";
    }

    else if(rowStatusList.some((rowStatus)=>rowStatus==="player2")) {
        //player2 won the game
        return "player2";
    }

    else{
        return "none";
    }
}


function GameObject(gameBoard) {
    
    this.isFinished = false,
    this.winner = null,
    this.gameBoard = gameBoard, // Store the reference

    this.evaluate = function(){

        //update isFinished and winner properly
        const rowList = [[0, 1, 2], [3, 4, 5], [6, 7, 8], [0, 4, 8], [2, 4, 6], [0, 3, 6], [1, 4, 7], [2, 5, 8]];
        const rowStatusList = rowList.map((row)=>getRowStatus(row,gameBoard.board));
        
        console.log("rowStatusList", rowStatusList);
        const winnerStatus = isThereAWinner(rowStatusList);
        console.log("winnerStatus", winnerStatus);

        if (winnerStatus==="player1"){
            //player1 won the game
            this.isFinished = true;
            this.winner = "player1";
        }

        if (winnerStatus==="player2"){
            //player1 won the game
            this.isFinished = true;
            this.winner = "player2";
        }

        if (winnerStatus==="none" && isGameBoardFull(gameBoard.board)){
            //player1 won the game
            this.isFinished = true;
            this.winner = "none";
        }
    }
};


function Player(name, symbol){
    this.name = name;
    this.symbol = symbol;
    
    this.play = function(board) {
        let idx = Number(prompt(`${this.name} do your move :`));
        board[idx] = this.symbol; 
    }
}

function GameBoard() {
    this.board = [" ", " ", " ", " ", " ", " ", " ", " ", " "];
    this.display = function() {
        const str = `${this.board[0]}|${this.board[1]}|${this.board[2]}\n${this.board[3]}|${this.board[4]}|${this.board[5]}\n${this.board[6]}|${this.board[7]}|${this.board[8]}`
        console.log(str);
    };
}


function main() {

    console.log("hello there");
    
    const gameBoard = new GameBoard();

    const player1 = new Player("ismail", "X");
    const player2 = new Player("elif", "O");

    const game = new GameObject(gameBoard);
    
    while(!game.isFinished){
        gameBoard.display();
        player1.play(gameBoard.board);
        game.evaluate();

        if(!game.isFinished){
            player2.play(gameBoard.board);
            game.evaluate();
        }
    }

    gameBoard.display();
    console.log(game.winner);
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

export { GameBoard, Player, GameObject, getRowStatus, isGameBoardFull, isThereAWinner};