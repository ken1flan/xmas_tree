var treeImage = new Image();
const interval = 500;                                // 明滅間隔(ミリ秒)
const lightPositions = [                             // 明かりの位置
  [128, 76], [158, 221], [150, 94], [174, 156], [177, 100],
  [203, 161], [193, 224], [116, 140], [105, 195], [225, 224],
  [157, 75], [164, 130], [155, 191], [186, 202], [208, 201],
  [94, 229], [124, 238], [162, 250], [215, 247]
];
const lightRadius = 3;                               // 明かりの半径
const aroundLightRadiusMagnification = 1.7;          // 明かりの近い周辺
const outerLightRadiusMagnification = 3.0;           // 明かりの遠い周辺
const lightRate = 0.6;                               // 明かりが光る割合
const lightColor = 'rgb(255, 255, 255)';             // 明かりの色
const aroundLightColor = 'rgba(255, 255, 255, 0.6)'; // 明かりの近い周辺の色
const outerLightColor = 'rgba(255, 255, 255, 0.2)';  // 明かりの遠い周辺の色

function initialize() {
  treeImage.src = 'tree.png'

  window.setInterval(draw, interval);
}

function draw() {
  var canvas = document.getElementById('tutorial');
  var ctx = canvas.getContext('2d');

  ctx.clearRect(0, 0, 320, 320);

  ctx.beginPath();
  ctx.drawImage(treeImage, 0, 0, 320, 320);

  for(var i = 0; i < lightPositions.length; i++) {
    if(Math.random() > lightRate) { continue; }

    var [x, y] = lightPositions[i];
    drawLight(ctx, x, y);
  }
}

function drawLight(ctx, x, y) {
  ctx.beginPath();
  ctx.fillStyle = outerLightColor;
  ctx.strokeStyle = outerLightColor;
  ctx.arc(x, y, lightRadius * outerLightRadiusMagnification, 0, 2 * Math.PI, false);
  ctx.fill();
  ctx.beginPath();
  ctx.fillStyle = aroundLightColor;
  ctx.strokeStyle = aroundLightColor;
  ctx.arc(x, y, lightRadius * aroundLightRadiusMagnification, 0, 2 * Math.PI, false);
  ctx.fill();
  ctx.beginPath();
  ctx.fillStyle = lightColor;
  ctx.strokeStyle = lightColor;
  ctx.arc(x, y, lightRadius, 0, 2 * Math.PI, false);
  ctx.fill();
}
