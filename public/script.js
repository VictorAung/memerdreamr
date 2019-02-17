var z = 0;
var started = false;
var imgUrl = "";
var audioUrl = "";
function drawImage(event) {
  if (started){
    var old_html = document.getElementById("screen").innerHTML;
    if (old_html.includes("Select audio")){
      old_html = "";
    }
    console.log(old_html);
    var x = event.clientX;
    var y = event.clientY;
    document.getElementById("screen").innerHTML = old_html + '\n <img src="' + imgUrl + '" style="position: absolute; left:' + x + 'px; top:' + y + 'px; z-index: ' + z + ';">';
    z++;
    console.log(z);
  }
}

function start(){
  document.getElementById("screen").style.z_index = 0;
  document.getElementById("menu").style.z_index = -1;
  imgUrl = document.getElementById("myFile").value;
  audioUrl = document.getElementById("myAudio").value;
  document.getElementById("menu").innerHTML = "";
  document.getElementById("menu").className = "";
  started = true;
}