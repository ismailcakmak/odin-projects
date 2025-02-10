import gameBoard2 from ".";

test('display board', () => {

    const gameBoardd = new gameBoard2();
    gameBoardd.board.forEach((index)=>gameBoardd.board[index]=="X");
    const displayedBoard = board.display();

    const targetBoard =    `X X X
                            X X X
                            X X X`;
                           
    console.log(displayedBoard);
    expect(displayedBoard).toBe(targetBoard);
  });
