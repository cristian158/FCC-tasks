var text = document.getElementById('txt_lines');
var button = document.getElementById('button');
button.addEventListener('click', dibujoPorClick);

var d = document.getElementById('board');
var canva = d.getContext('2d');
var width = d.width;

function dibujarLinea(color, xi, yi, xf, yf)
{
    canva.beginPath();
    canva.strokeStyle = color;
    canva.moveTo(xi, yi);
    canva.lineTo(xf,yf);
    canva.stroke();
    canva.closePath();
}

function dibujoPorClick()
{
  canva.clearRect(0,0,750,750);
  var lines = parseInt(text.value) //Math.pow(9999, 20);
  var l=0;
  var x0=0,y0=0;
  var space = width/lines;

  for(l=0;l<=lines;l++)
  // 3 parámetros: variable iteradora;condición;lo que ocurre cuando se completa
  {
      dibujarLinea("#ffa9a9", 0, x0, y0, 750);
      dibujarLinea("#ffa9d4", x0, 750, 750, 750 - y0);
      dibujarLinea("#d4a9ff", 750, 750 - x0, 750 - y0, 0);
      dibujarLinea("#218EAE", 750 - x0, 0, 0, y0);
      x0 = x0 + space;
      y0 = x0 + space;
      l++;
  }

}
