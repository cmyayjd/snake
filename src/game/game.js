
import Snake from './snake';
import Apple from './apple';
import Block from './block';

export default class Game{
  constructor(gameConfig){
    const { width, height, blockSize, ctx } = gameConfig;
    this.width = width;
    this.height = height;
    this.blockSize = blockSize;
    this.ctx = ctx;
    this.interval = null;
  }

  init(){
    this.snake = new Snake(this);
    this.apple = new Apple(10, 10, this);
    this.snake.segments = [
      new Block(7, 5, this.blockSize),
      new Block(6, 5, this.blockSize),
      new Block(5, 5, this.blockSize),
    ];
  }

  gameStart(){
    this.interval = setInterval(() => {
      this.ctx.clearRect(0, 0, this.width, this.height);
      this.drawGrid();
      this.drawBorder();
      this.snake.draw('Blue');
      this.snake.move();
      this.apple.draw('LimeGreen');
    }, 150)
  }

  gameOver(){
    clearInterval(this.interval);
  }

  drawGrid(){
    const ctx = this.ctx;
    const width = this.width;
    const height = this.height;
    const blockSize = this.blockSize;
    const widthInBlock = width / blockSize;

    ctx.strokeStyle = "Gray";
    ctx.beginPath();
    for(var i = 0; i < widthInBlock - 1; i++){
      ctx.moveTo(0, (i + 1) * blockSize);
      ctx.lineTo(width, (i + 1) * blockSize);
      ctx.moveTo((i + 1) * blockSize, 0);
      ctx.lineTo((i + 1) * blockSize, height);
    }
    ctx.stroke();
  }

  drawBorder(){
    const ctx = this.ctx;
    const width = this.width;
    const height = this.height;
    const blockSize = this.blockSize;

    ctx.fillStyle = "Gray"
    ctx.fillRect(0, 0, width, blockSize)
    ctx.fillRect(0, height - blockSize, width, blockSize)
    ctx.fillRect(0, 0, blockSize, height)
    ctx.fillRect(width - blockSize, 0, blockSize, height)
  }
}