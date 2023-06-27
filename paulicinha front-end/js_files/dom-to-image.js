import domtoimage from 'dependencies/node_modules/dom-image-more'

var node = document.getElementByID('mapa');

function printscreen(){
    domtoimage
    .toPng(node)
    .then(function (dataUrl){
        var img = new Image();
        img.src = dataUrl;
        document.getElementById('output').appendChild(img);
    })
    .catch(function (error) {
        console.error('opps, something went wrong', error); 
    });
}

