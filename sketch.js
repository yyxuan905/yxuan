let flowers = [];

function setup() {
  createCanvas(windowWidth, windowHeight); // 全視窗畫布
  background('#a2d9ff'); // 設定背景顏色為淺藍色

  // 生成 40 朵花的初始位置和顏色
  for (let i = 0; i < 40; i++) {
    flowers.push({
      x: random(width),
      y: random(height),
      size: random(30, 100),
      color: color(random(200, 255), random(50, 150), random(100, 200)) // 偏粉紅色系
    });
  }
}

function draw() {
  background('#fae0e4'); // 每次重繪背景為淺藍色

  // 計算花的大小變化
  let sizeOffset = map(mouseX, 0, width, 10, 120);

  // 繪製所有花
  for (let flower of flowers) {
    fill(flower.color);
    noStroke();
    drawFlower(flower.x, flower.y, flower.size + sizeOffset);
  }
}

// 定義繪製花朵的函式
function drawFlower(x, y, size) {
  push();
  translate(x, y);
  for (let i = 0; i < 5; i++) {
    ellipse(0, size / 4, size / 2, size); // 繪製花瓣
    rotate(PI / 2.5); // 旋轉花瓣
  }
  pop();
}

// 當視窗大小改變時調整畫布
function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}
