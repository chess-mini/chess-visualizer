import { Ruler } from "./ruler";

const canvas = document.getElementById('canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');

if (!ctx) {
  throw new Error('Failed to get 2D context');
}

// const width = canvas.width;
// const height = canvas.height;

const rulerX = new Ruler(0);
const rulerY = new Ruler(1);

rulerX.draw(ctx);
rulerY.draw(ctx);

// ctx.fillStyle = "gray";
// ctx.fillRect(0, 0, width, height);

// const data = [3, 5, 6, 2, 8];
// const barWidth = 30;
// const gap = 10;

// const styles = ['red', 'blue', 'green', 'orange', 'purple'];
// data.forEach((value, index) => {
//   const barHeight = value * 50;
//   ctx.fillStyle = styles[index % styles.length]!;
//   ctx.fillRect(index * (barWidth + gap), height - barHeight, barWidth, barHeight);
// });
