let speech = new SpeechSynthesisUtterance();

let voices = [];
let voiceSelect = document.querySelector("select");
window.speechSynthesis.onvoiceschanged = () =>{
    voices = window.speechSynthesis.getVoices();

    voices.forEach((voice, i) => (voiceSelect.options[i] = new Option(voice.name, i)));
};

voiceSelect.addEventListener('change', ()=>{
    speech.voice = voices[voiceSelect.value];
});

// Trigger the event when the page loads
window.speechSynthesis.onvoiceschanged();

document.querySelector("button").addEventListener('click', () =>{
    speech.text = document.querySelector("textarea").value;
    window.speechSynthesis.speak(speech);
});