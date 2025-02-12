// game.test.js
import { deserialize } from 'v8';
import { GameBoard, Player, GameObject, getRowStatus, isGameBoardFull, isThereAWinner} from './index.js';

describe('Game Components', () => {
  test('GameBoard initializes empty', () => {
    const board = new GameBoard();
    expect(board.board.every(cell => cell === " ")).toBe(true);
  });

  test('Player can be created with correct properties', () => {
    const board = new GameBoard();
    const player = new Player("Test", "X");
    expect(player.name).toBe("Test");
    expect(player.symbol).toBe("X");
  });

  test('GameObject can run a game', () => {
    const board = new GameBoard();
    const player1 = new Player("P1", "X");
    const player2 = new Player("P2", "O");
    const game = new GameObject(player1, player2, board);
    
    game.doMove();
    expect(game.isFinished).toBe(false);
  });
});


test('Board display properly', ()=>{
  const board = new GameBoard();
  
  board.board.forEach((_,index)=>{
    board.board[index] = "X";
  });

  let targetBoard = `X|X|X\nX|X|X\nX|X|X`;

  expect(console.log(targetBoard)).toBe(board.display());
});


describe("Game Logic", () => {
  
  describe("getting row status correctly (getRowStatus)", () => {
    //this is suite for testing getRowStatus that has return options of "player1", "plater2", "none"
    //therefore there are 
    const rowList = [[0, 1, 2], [3, 4, 5], [6, 7, 8], [0, 4, 8], [2, 4, 6], [0, 3, 6], [1, 4, 7], [2, 5, 8]];
    const boardList = [
      ["X", "X", "X", " ", " ", " ", " ", " ", " "],
      [" ", " ", " ", "X", "X", "X", " ", " ", " "],
      [" ", " ", " ", " ", " ", " ", "X", "X", "X"],
      ["X", " ", " ", " ", "X", " ", " ", " ", "X"],
      [" ", " ", "X", " ", "X", " ", "X", " ", " "],
      ["X", " ", " ", "X", " ", " ", "X", " ", " "],
      [" ", "X", " ", " ", "X", " ", " ", "X", " "],
      [" ", " ", "X", " ", " ", "X", " ", " ", "X"]
    ];
    
    
    rowList.forEach((row, index) => {
      test(`valid row for X(player1)${index}`, () => {
        const board = boardList[index];
        expect(getRowStatus(row, board)).toBe("player1");
      });
    });
    
    rowList.forEach((row, index) => {
      test(`invalid row for O(player2) ${index}`, () => {
        const board = boardList[index];
        expect(getRowStatus(row, board)).not.toBe("player2");
      });
    });
    
    rowList.forEach((row, index) => {
      test(`invalid row for none(no player wins) ${index}`, () => {
        const board = boardList[index];
        expect(getRowStatus(row, board)).not.toBe("none");
      });
    })
  });

  describe("getting board full or not correctly (isGameBoardFull)", ()=>{
    let gameBoard = new GameBoard();

    test("board is not full", ()=>{
      expect(isGameBoardFull(gameBoard.board)).toBe(false)
    });
  });

  test("winner status", ()=>{
    let arr = ['','','','player1']
    expect(isThereAWinner(arr)).toBe("player1");
  });
  
});

