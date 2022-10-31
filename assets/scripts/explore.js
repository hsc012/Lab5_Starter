// explore.js

window.addEventListener('DOMContentLoaded', init);

function init() {
  // TODO
  // populate the "Select Voice" dropdown
  const synth = window.speechSynthesis;
  const voiceSelect = document.querySelector('select');
  let voices = [];
  function populateVoiceList() {
    voices = synth.getVoices();
    for (let i = 0; i < voices.length ; i++) {
      const option = document.createElement('option');
      option.textContent = `${voices[i].name} (${voices[i].lang})`;
      if (voices[i].default) {
        option.textContent += ' — DEFAULT';
      }
      option.setAttribute('data-lang', voices[i].lang);
      option.setAttribute('data-name', voices[i].name);
      voiceSelect.appendChild(option);
    }
  }
  populateVoiceList();
  if (speechSynthesis.onvoiceschanged !== undefined) {
    speechSynthesis.onvoiceschanged = populateVoiceList;
  }
  // make the synthesizer speak when "Press to Talk" button is clicked
  document.getElementsByTagName('button')[0].addEventListener('click', function(){
    // set text
    var text = document.getElementsByTagName("textarea")[0].value;
    let utterance = new SpeechSynthesisUtterance(text);
    // change voice
    const selectedOption = voiceSelect.selectedOptions[0].getAttribute('data-name');
    for (let i = 0; i < voices.length; i++) {
      if (voices[i].name === selectedOption) {
        utterance.voice = voices[i];
      }
    }
    // speak
    synth.speak(utterance);
    // adjust face when speaking
    setInterval(function(){
      var img = document.getElementsByTagName('img')[0];
      if(synth.speaking == true){
        img.src = "assets/images/smiling-open.png";
      }
      else{
        img.src = "assets/images/smiling.png";
      }
    }, 100);
  });
}