export default class GameBoard {
  constructor(size) {
    this.boardSize = size ** 2;
    this.gameBoard = document.getElementsByClassName('game-board').item(0);
    this.fields = undefined;
  }

  drawBoard() {
    let html = '';
    for (let i = 1; i <= this.boardSize; i += 1) {
      html += '<div class="field"></div>';
    }
    this.gameBoard.innerHTML = html;
    this.fields = this.gameBoard.getElementsByClassName('field');
  }
}
