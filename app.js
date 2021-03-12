var canvas = document.getElementById('myCanvas');
var context = canvas.getContext('2d');

var size = 100;
var position = 120;
var difference = 5;

for (var i = 0; i < 30; i++) {
  context.beginPath();
  context.moveTo(position, position);
  context.lineTo(position + size, position);
  context.lineTo(position + size / 2, position - size);
  context.lineTo(position, position);
  context.strokeStyle = 'gray';
  context.stroke();
  position += difference;
}