const btn = document.querySelector('.talk');
const content = document.querySelector('.content');
const speechrecongnition = window.speechrecongnition || window.webkitSpeechRecognition;
const recoginition = new speechrecongnition();

//few arrays
const greetings = ['sir i am good, and hope you are also having fun today, sir today you wake at seven twenty so your coding time is going to aproximately 12 hours.', 'sir i am good, there is no important message for you today' ];

const weather = [
    'Weather is fine',
    'you need to sleep',
]

recoginition.onstart = function() {
    console.log('voice is activated. you can speak through microphone');
};

recoginition.onresult = function(event){
    const current = event.resultIndex;
    
    const transcript = event.results[current][0].transcript;
    content.textContent = transcript;
    readoutloud(transcript);

};

// add the listener to the button
btn.addEventListener('click', ()=>{
    recoginition.start();
});

function readoutloud(message){
    const speech = new SpeechSynthesisUtterance();
    speech.text = 'i dont know what you said';
    if(message.includes('how are you')){
        const finaltext = greetings[Math.floor(Math.random() * greetings.length)];
        speech.text = finaltext;
    }
    if(message.includes('organisation')){
        const finaltext = 'spaceket organization was founded by sksingh who is the ceo of this aerospace organization, this organization works on cryogenic and scampther propulsion based engine';
        speech.text = finaltext;
    }
    if(message.includes('who I am')){
        const finaltext = 'sir you are founder of me and you are a self taught programmer and ethical hacker and also a rocket propulsionatic expert, you coded me at 5:05 am and you programmed me by using 90 percent javascript, sir thanks for creating me';
        speech.text = finaltext;
    }
    if(message.includes('tell my name')){
        const finaltext = 's u s h i l, sushil';
        speech.text = finaltext;
    }
    if(message.includes('time')){
        const finaltext = 'now time is';
        speech.text = finaltext;
    }
    
    
    speech.volume = 1;
    speech.rate = 1;
    speech.pitch = 1;

    window.speechSynthesis.speak(speech);
}