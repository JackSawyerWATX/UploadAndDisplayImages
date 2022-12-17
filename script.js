// function upload() {
//   var fileinput = document.getElementById("finput");
//   var filename = fileinput.value;
//   alert("Choose " + filename);
// }

function upload() {
    var imgcanvas = document.getElementById("can");
    var fileinput = document.getElementById("finput");
    var image = new SimpleImage(fileinput);
    image.drawTo(imgcanvas);
    alert("You chose: " + filename);
  }
  