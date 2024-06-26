const image1 = document.getElementById('image1');
const image2 = document.getElementById('image2');

let x1 = Math.random() * (window.innerWidth - image1.width);
let y1 = Math.random() * (window.innerHeight - image1.height);
let dx1 = 3;
let dy1 = 3;

let x2 = Math.random() * (window.innerWidth - image2.width);
let y2 = Math.random() * (window.innerHeight - image2.height);
let dx2 = -2;
let dy2 = -2;

function moveImages() {
    x1 += dx1;
    y1 += dy1;

    if (x1 + image1.width >= window.innerWidth || x1 <= 0) {
        dx1 = -dx1;
    }

    if (y1 + image1.height >= window.innerHeight || y1 <= 0) {
        dy1 = -dy1;
    }

    x2 += dx2;
    y2 += dy2;

    if (x2 + image2.width >= window.innerWidth || x2 <= 0) {
        dx2 = -dx2;
    }

    if (y2 + image2.height >= window.innerHeight || y2 <= 0) {
        dy2 = -dy2;
    }

    image1.style.left = x1 + 'px';
    image1.style.top = y1 + 'px';
    image2.style.left = x2 + 'px';
    image2.style.top = y2 + 'px';

    requestAnimationFrame(moveImages);
}

window.onload = moveImages;