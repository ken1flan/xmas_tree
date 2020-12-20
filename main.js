function initialize() {
  draw();
  document.getElementById('downloadLink').addEventListener('click', download);
  document.getElementById('inputText').addEventListener('keyup', draw);
}

function draw() {
  var canvas = document.getElementById('tutorial');
  var ctx = canvas.getContext('2d');
  file://だとcanvasが汚染扱いになってしまうので、コメントアウト。
  どこかサーバに置けば大丈夫とのこと。
  var img = new Image();
  img.src = 'really.png';
  img.onload = function () {
    ctx.drawImage(img, 0, 0, 900, 900);
    ctx.font = '72px serif';
    ctx.fillText('まぢ？', 50, 100);
  };
  ctx.fillStyle = 'white';
  ctx.fillRect(0, 0, 500, 500);
  var text = document.getElementById('inputText').value;
  ctx.fillStyle = 'black';
  ctx.font = '72px serif';
  ctx.fillText(text, 50, 100);

  var twitterHref = 'https://twitter.com/share?ref_src=twsrc%5Etfw';
  twitterHref += '?url=' + canvas.toDataURL();
  console.log(twitterHref);
  var tweetButton = document.getElementById('tweetButton');
  tweetButton.href = twitterHref;
}

function download() {
  var canvas = document.getElementById('tutorial');
  var dataURL = canvas.toDataURL();
  document.getElementById('downloadLink').href = dataURL;
}
