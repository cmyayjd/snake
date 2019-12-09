
import Block from './block';

export default class Apple extends Block{
  constructor(col, row, game){
    super(col, row, game.blockSize);
    this.gameWidth = game.width;
    this.gameHeight = game.height;
    this.game = game
  }

  draw(color){
    super.drawCircle(this.game.ctx, color)
  }

  move(){
    let widthInBlocks = this.gameWidth / this.blockSize;
    let heightInBlocks = this.gameHeight / this.blockSize;
    this.col = Math.floor(Math.random() * (widthInBlocks - 2)) + 1;
    this.row = Math.floor(Math.random() * (heightInBlocks - 2)) + 1;
  }
}