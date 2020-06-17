export default class GamePlay {
  constructor(gameBoard) {
    this.gameBoard = gameBoard;
    this.missedLimit = 5;
    this.points = 0;
    this.viewPoint = document.getElementById('points');
    this.interval = 0;
    this.position = 0;
    this.lastPosition = 0;
    this.gameBoard.drawBoard();
    this.gameStarted = false;
  }

  init() {
    for (let i = 0; i < this.gameBoard.fields.length; i += 1) {
      this.gameBoard.fields.item(i).addEventListener('click', (event) => {
        if (!this.gameStarted) return;
        if (event.target.closest('.goblin')) {
          this.points += 1;
          this.viewPoint.textContent = this.points;
        } else {
          this.missedLimit -= 1;
        }
        if (this.missedLimit < 1) this.stop();
      });
    }
  }

  getPosition() {
    this.lastPosition = this.position;
    do {
      this.position = Math.floor(Math.random() * (this.gameBoard.boardSize));
    } while (this.position === this.lastPosition);
  }

  start() {
    this.interval = setInterval(() => {
      this.getPosition();
      this.gameBoard.fields.item(this.lastPosition).innerHTML = '';
      this.gameBoard.fields.item(this.position).innerHTML = '<img class="goblin" src="goblin.png">';
    }, 1000);
    this.gameStarted = true;
  }

  stop() {
    clearInterval(this.interval);
    this.gameStarted = false;
    // eslint-disable-next-line no-alert
    alert('Игра окончена');
  }
}
