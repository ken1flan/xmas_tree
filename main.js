var treeImage = new Image();

function initialize() {
  treeImage.src = 'tree.png'

  window.requestAnimationFrame(draw);
}

function draw() {
  var canvas = document.getElementById('tutorial');
  var ctx = canvas.getContext('2d');
  ctx.drawImage(treeImage, 0, 0, 320, 320);

  window.requestAnimationFrame(draw);
}
