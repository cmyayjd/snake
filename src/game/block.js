
export default class Block{
  constructor(col, row, blockSize){
    this.col = col;
    this.row = row;
    this.blockSize = blockSize;
  }

  drawSquare(ctx, color){
    let blockSize = this.blockSize;
    const x = this.col * blockSize + 1;
    const y = this.row * blockSize + 1;
    ctx.fillStyle = color;
    ctx.fillRect(x, y, blockSize - 2, blockSize - 2);
  }

  drawCircle(ctx, color){
    let blockSize = this.blockSize;
    const centerX = this.col * blockSize + blockSize / 2;
    const centerY = this.row * blockSize + blockSize / 2;
    ctx.fillStyle = color;
    ctx.beginPath();
    ctx.arc(centerX, centerY, blockSize / 2 - 1, 0, Math.PI * 2, false);
    ctx.fill();
  }

  equal(otherBlock){
    return this.col === otherBlock.col && this.row === otherBlock.row
  }
}