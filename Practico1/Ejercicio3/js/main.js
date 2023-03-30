let canvas = document.getElementById('myCanvas');
let ctx = canvas.getContext('2d');
let width = 100;
let height = 100;
let imgData = ctx.createImageData(width, height);

//instancio el color:
let r = 255;
let g = 0;
let b = 0;
let a = 255;

for (let x = 0; x < width; x++) {//itero en el ancho eje x(ancho)
    for (let y = 0; y < height; y++) {
        setPixel(imgData, x, y, r, g, b, a);
    }
}
ctx.putImageData(imgData, 10, 5); //canvas y cordenadas x e y


function setPixel(imgData, x, y, r, g, b, a) {
    let index = (x + y * imgData.width) * 4;
    imgData.data[index + 0] = r; //r
    imgData.data[index + 1] = g; //g
    imgData.data[index + 2] = b; //b
    imgData.data[index + 3] = a; //a
}

