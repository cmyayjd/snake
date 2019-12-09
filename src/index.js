import "@babel/polyfill";

import Game from './game/game';

const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');
const width = canvas.width;
const height = canvas.height;
const BLOCK_SIZE = 10;

const DIRECTIONS = {
  37: 'left',
  38: 'up',
  39: 'right',
  40: 'down'
}

const game = new Game({
  width: width,
  height: height,
  blockSize: BLOCK_SIZE,
  ctx: ctx
});

game.init();
game.gameStart();

document.onkeydown = function(e){
  let newDirection = DIRECTIONS[e.keyCode];
  if(newDirection != undefined){
    game.snake.setDirection(newDirection);
  }
}