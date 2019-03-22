/** Support javascript for the jfps
https://github.com/infinitebuzz/jfps.github.io
*/

function loadTexture(szTextureAddress, nWidth, nHeight) {
	var img = new Image();
	img.src = szTextureAddress;
	var canvas = document.createElement('canvas');
	canvas.width = nWidth;
	canvas.height = nHeight;
	var context = canvas.getContext('2d');
	context.drawImage(img, 0, 0, nWidth, nHeight);
	return context;
}

function getTexturePixel(x, y, texture) {
	return texture.getImageData(x, y, 1, 2).data;
}

