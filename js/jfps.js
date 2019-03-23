/** Support javascript for the jfps
https://github.com/infinitebuzz/jfps.github.io
*/

function loadTexture(szTextureAddress) {
	var img = new Image();
	img.src = szTextureAddress;
	var canvas = document.createElement('canvas');
	canvas.width = img.width;
	canvas.height = img.height;
	var context = canvas.getContext('2d');
	context.drawImage(img, 0, 0, canvas.width, canvas.height);
	return {
		width : canvas.width,
		height : canvas.height,
		texture : context.getImageData(0, 0, canvas.width, canvas.height)
	};
}

function getTexturePixel(x, y, texture) {
	return texture.getImageData(x, y, 1, 2).data;
}
