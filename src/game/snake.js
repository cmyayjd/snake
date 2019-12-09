
import Block from './block';

export default class Snake{
  constructor(game){
    this.game = game;
    this.segments = [];
    this.direction = 'right';
    this.nextDirection = 'right';
  }

  draw(color){
    const ctx = this.game.ctx;
    for(var i = 0; i < this.segments.length; i++){
      this.segments[i].drawSquare(ctx, color);
    }
  }

  move(){
    const head = this.segments[0];
    let newHead;
    const blockSize = this.game.blockSize;

    this.direction = this.nextDirection;

    if(this.direction == 'right'){
      newHead = new Block(head.col + 1, head.row, blockSize);
    }else if(this.direction == 'down'){
      newHead = new Block(head.col, head.row + 1, blockSize);
    }else if(this.direction == 'left'){
      newHead = new Block(head.col - 1, head.row, blockSize);
    }else if(this.direction == 'up'){
      newHead = new Block(head.col, head.row - 1, blockSize);
    }

    if(this.checkCollision(newHead)){
      this.game.gameOver();
      return
    }

    this.segments.unshift(newHead);

    if(newHead.equal(this.game.apple)){
      this.game.apple.move();
    }else{
      this.segments.pop()
    }
  }

  checkCollision(head){
    const game = this.game;
    const leftCollision = (head.col === 0);
    const topCollision = (head.row === 0);
    const rightCollision = (head.col === game.width / game.blockSize - 1);
    const bottomCollision = (head.row === game.height / game.blockSize - 1);

    let wallCollision = leftCollision || topCollision || rightCollision || bottomCollision;
    let selfCollision = false;

    for(var i = 0; i < this.segments.length; i++){
      if(head.equal(this.segments[i])){
        selfCollision = true;
      }
    }

    return wallCollision || selfCollision;
  }

  setDirection(newDirection){
    if(this.direction == 'up' && newDirection == 'down'){
      return
    }else if(this.direction == 'right' && newDirection == 'left'){
      return
    }else if(this.direction == 'down' && newDirection == 'up'){
      return 
    }else if(this.direction == 'left' && newDirection == 'right'){
      return
    }

    this.nextDirection = newDirection;
  }
}