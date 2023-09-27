export function content() {
  const canvas = document.createElement("canvas");
  const ctx = canvas.getContext("2d");
    //global variables ?
  const WIDTH = window.innerWidth
  const HEIGHT =innerHeight
    //console.log(HEIGHT,WIDTH)
  canvas.width = WIDTH
  canvas.height = HEIGHT

let count=0
  requestAnimationFrame(draw)
  function draw() {

    count++
    const display=count%WIDTH

    ctx.clearRect(0,0,WIDTH,HEIGHT)
    ctx.fillStyle="black"
    ctx.fillRect(0, 0,display, 20);
    ctx.fillStyle = "yellow";
    ctx.fillRect(0, 20, 200, 20);
    ctx.closePath();
    ctx.fill();
    requestAnimationFrame(draw)
  }

  return canvas;
}
