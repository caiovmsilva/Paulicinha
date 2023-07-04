// Define a function that screenshots a div
function takeshot(){
        // It gets the element from the document HTML with the given ID
        let div = document.getElementById('map');
        

        /*Uses the html2canvas function to take a screenshot
        and append it to the output div*/
        /* html2canvas(div).then(
        function (canvas){
            // Appends the screeshot canvas to the element with the given ID
            document.getElementById('output').appendChild(canvas);
        }) */
    
        html2canvas(div).then(function(canvas) {
            
            var newWindow = window.open();
            newWindow.document.write('<img src="' + canvas.toDataUrl() + '" />');
        });

    // Inicialização do mapa ao carregar a página
    
}