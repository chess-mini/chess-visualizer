export class Ruler {
  private inset: number = 20;
  constructor (public axis: 0 | 1) {}

  draw (ctx: CanvasRenderingContext2D) {
    const width = ctx.canvas.width;
    const height = ctx.canvas.height;

    ctx.lineWidth = 2.0;
    ctx.lineCap = 'square';
    ctx.strokeStyle = 'black';
    ctx.lineWidth = 1;
    ctx.beginPath();
    if (this.axis === 0) {
      ctx.moveTo(this.inset, height - this.inset);
      ctx.lineTo(width - this.inset, height - this.inset);
      ctx.stroke();
    } else {
      ctx.moveTo(this.inset, this.inset);
      ctx.lineTo(this.inset, height - this.inset);
      ctx.stroke();
    }
  }
}
