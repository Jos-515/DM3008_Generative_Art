/* DN3008 Generative Art, Ashley Hi 2026
 * Week 6 - Autonomous Agents
 * Wolfram CA
 */

const RULE_NUMBER = 30;
const ECELL = 4;
let history = [];
let numCols;

function setup() {
  createCanvas(600, 400);
  numCols = floor(width / ECELL);
  const row = new Array(numCols).fill(0);
  row[floor(numCols / 2)] = 1; // single live cell, dead center
  history = [row];
}

// 2^3 = 8 possible 3-cell neighborhoods -> 1 output bit each.
function ruleTable(ruleNum) {
  const bits = ruleNum.toString(2).padStart(8, "0").split("").map(Number);
  const patterns = [
    [1, 1, 1],
    [1, 1, 0],
    [1, 0, 1],
    [1, 0, 0],
    [0, 1, 1],
    [0, 1, 0],
    [0, 0, 1],
    [0, 0, 0],
  ];
  const map = {};
  patterns.forEach((p, i) => {
    map[p.join("")] = bits[i];
  });
  return map;
}

function nextGeneration(row, map) {
  const next = new Array(row.length).fill(0);
  for (let i = 0; i < row.length; i++) {
    const l = row[(i - 1 + row.length) % row.length];
    const c = row[i];
    const r = row[(i + 1) % row.length];
    next[i] = map["" + l + c + r];
  }
  return next;
}

function draw() {
  const map = ruleTable(RULE_NUMBER);
  const maxRows = floor(height / ECELL);

  if (history.length < maxRows) {
    history.push(nextGeneration(history[history.length - 1], map));
  }

  background(11, 13, 12);
  noStroke();
  fill(111, 174, 143);
  for (let y = 0; y < history.length; y++) {
    for (let x = 0; x < history[y].length; x++) {
      if (history[y][x]) rect(x * ECELL, y * ECELL, ECELL - 1, ECELL - 1);
    }
  }
}
