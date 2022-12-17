// function upload() {
//   var fileinput = document.getElementById("finput");
//   var filename = fileinput.value;
//   alert("Choose " + filename);
// }

function upload() {
    var canvas = document.getElementById("d1");
    var fileinput = document.getElementById("finput");
    var image = new SimpleImage(fileinput);
    var filename = fileinput.value;
    alert("You chose: " + filename);
    image.drawTo(canvas);
  }