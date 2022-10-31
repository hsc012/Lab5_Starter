// expose.js

window.addEventListener('DOMContentLoaded', init);

function init() {
  // TODO
  // match images & audios to the corresponding options
  var selectedHorns = document.getElementById('horn-select');
  selectedHorns.onchange = function(){
    var img = document.getElementsByTagName('img')[0];
    var aud = document.getElementsByClassName('hidden')[0];
    if(selectedHorns.value == 'air-horn'){
      img.src = "assets/images/air-horn.svg";
      aud.src = "assets/audio/air-horn.mp3";
    }
    if(selectedHorns.value == 'car-horn'){
        img.src = "assets/images/car-horn.svg";
        aud.src = "assets/audio/car-horn.mp3";
    }
    if(selectedHorns.value == 'party-horn'){
        img.src = "assets/images/party-horn.svg";
        aud.src = "assets/audio/party-horn.mp3";
    }
  }
  // change volume on slider
  let audio = document.getElementsByClassName('hidden')[0];
  let volume = document.getElementById('volume-controls');
  volume.addEventListener('change', function(){
    var img = document.getElementsByTagName('img')[1];
    if(volume.value == 0){
      img.src = "assets.icons/volume-level-0.svg";
    }
    if(volume.value >= 1 || volume.value < 33){
      img.src = "assets/icons/volume-level-1.svg";
    }
    if(volume.value >= 33 || volume.value < 67){
      img.src = "assets/icons/volume-level-2.svg";
    }
    if(volume.value >= 67){
      img.src = "assets/icons/volume-level-3.svg";
    }
    audio.volume = volume.value;
  });
  // implement the function of the 'Play Sound' button
  document.getElementsByTagName('button')[0].addEventListener('click', function(){
    document.getElementsByClassName('hidden')[0].play();
  });

}