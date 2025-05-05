/** Support javascript for the jfps
https://github.com/infinitebuzz/jfps.github.io
*/

function loadTexture(szTextureAddress) {
    return new Promise((resolve, reject) => {
        var img = new Image();
        img.onload = function() {
            var canvas = document.createElement('canvas');
            canvas.width = img.width;
            canvas.height = img.height;
            var context = canvas.getContext('2d');
            context.drawImage(img, 0, 0, canvas.width, canvas.height);
            resolve({
                width: canvas.width,
                height: canvas.height,
                texture: context.getImageData(0, 0, canvas.width, canvas.height)
            });
        };
        img.onerror = function() {
            reject(new Error('Failed to load image at ' + szTextureAddress));
        };
        img.src = szTextureAddress;
    });
}

function getTexturePixel(x, y, texture) {
    const index = (y * texture.width + x) * 4;
    const data = texture.texture.data;
    return {
        r: data[index],
        g: data[index + 1],
        b: data[index + 2],
        a: data[index + 3]
    };
}
