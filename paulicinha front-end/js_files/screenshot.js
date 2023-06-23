
// Define a function that screenshots a div
function takeshot(){
    let div = document.getElementById('mapa');
    

    /*Uses the html2canvas function to take a screenshot
    and append it to the output div*/
    html2canvas(div).then(
        function (canvas){
            document.getElementById('output').appendChild(canvas);
        })
}