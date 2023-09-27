export function content() {
  const canvas = document.createElement("canvas");
  const ctx = canvas.getContext("2d");
  let count = 0;
  requestAnimationFrame(draw);
  
  function draw() {
      const WIDTH = innerWidth;
      const HEIGHT = innerHeight;
      canvas.width = WIDTH;
      canvas.height = HEIGHT;
    ctx.clearRect(0, 0, WIDTH, HEIGHT);
    drawGrid(HEIGHT,WIDTH)
    count++;
    const display = count % WIDTH;
    ctx.fillStyle = "black";
    ctx.fillRect(0, 0, display, 16);
    ctx.fillStyle = "yellow";
    ctx.fillRect(0, 20, 200, 20);
    ctx.closePath();
    ctx.fill();
    requestAnimationFrame(draw);
  }
  function drawGrid(HEIGHT,WIDTH){

      const value =16
    for(let dx=0;dx<WIDTH/value;dx++){
        for(let dy=0;dy<HEIGHT/value;dy++){
            ctx.fillStyle=(dx+dy%2)%2===0?"#808080":"#c0c0c0"
            ctx.fillRect(dx*value,dy*value,value,value)
        }
  }}

  let resizeTimeout;



  return canvas;
}
