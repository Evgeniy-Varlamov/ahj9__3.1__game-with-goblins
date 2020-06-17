import GameBoard from './GameBoard';
import GamePlay from './GamePlay';

const gamesBoard = new GameBoard(4);
const gamePlay = new GamePlay(gamesBoard);
gamePlay.init();
gamePlay.start();
