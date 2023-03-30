let canvas = document.getElementById('myCanvas');
let ctx = canvas.getContext('2d');
let width = 100;
let height = 100;
let imgData = ctx.createImageData(width, height);

//instancio el color:
let r = 0;
let g = 0;
let b = 0;
let a = 255;

function drawRect(imgData, r, g, b, a){
    for (let x = 0; x < width; x++) {//itero en el ancho eje x(ancho)
        for (let y = 0; y < height; y++) {
            let coeficiente = (y-width/2)/(width/2);
            if(y <= width / 2){
                color = 255 * (1 + coeficiente);
                r = color;
                g = color;
                b = 0;
              }else{
                color = 255 * (1 - coeficiente);
                r = 255;
                g = color;
                b = 0;
             }
            setPixel(imgData, x, y, r, g, b, a);
        }
    }
}

function setPixel(imgData, x, y, r, g, b, a) {
    let index = (x + y * imgData.width) * 4;
    imgData.data[index + 0] = r; //r
    imgData.data[index + 1] = g; //g
    imgData.data[index + 2] = b; //b
    imgData.data[index + 3] = a; //a
}

drawRect(imgData, r, g, b, a);//creo el rectangulo
ctx.putImageData(imgData, 10, 5); //canvas y cordenadas x e y

