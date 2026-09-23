/* DN3008 Generative Art, Ashley Hi 2026
 * Week 6 - Autonomous Agents
 * Game of Life
 */

const CELL = 12;
let cols, rows, grid;

function setup() {
  createCanvas(600, 400);
  cols = floor(width / CELL);
  rows = floor(height / CELL);
  grid = makeGrid();
  randomize();
}

function makeGrid() {
  const g = new Array(cols);
  for (let x = 0; x < cols; x++) g[x] = new Array(rows).fill(0);
  return g;
}

function randomize() {
  for (let x = 0; x < cols; x++)
    for (let y = 0; y < rows; y++) grid[x][y] = random() < 0.25 ? 1 : 0;
}

function countNeighbors(x, y) {
  let n = 0;
  for (let dx = -1; dx <= 1; dx++) {
    for (let dy = -1; dy <= 1; dy++) {
      if (dx === 0 && dy === 0) continue;
      const nx = (x + dx + cols) % cols;
      const ny = (y + dy + rows) % rows;
      n += grid[nx][ny];
    }
  }
  return n;
}

function stepGrid() {
  const next = makeGrid();
  for (let x = 0; x < cols; x++) {
    for (let y = 0; y < rows; y++) {
      const n = countNeighbors(x, y);
      const alive = grid[x][y] === 1;
      // DEAD cell (alive === false) is born if n === 3
      // LIVE cell (alive === true) survives if n === 2 or n === 3, and dies otherwise
      next[x][y] = alive ? (n === 2 || n === 3 ? 1 : 0) : n === 3 ? 1 : 0;
    }
  }
  grid = next;
}

function draw() {
  background(20);
  if (frameCount % 6 === 0) stepGrid();

  noStroke();
  fill(230, 200, 120);
  for (let x = 0; x < cols; x++)
    for (let y = 0; y < rows; y++)
      if (grid[x][y]) rect(x * CELL, y * CELL, CELL - 1, CELL - 1);
}

function mousePressed() {
  const x = floor(mouseX / CELL);
  const y = floor(mouseY / CELL);
  if (x >= 0 && y >= 0 && x < cols && y < rows) {
    grid[x][y] = grid[x][y] ? 0 : 1;
  }
}
