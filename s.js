var voiceBtn = document.getElementById("sS")
var content = document.querySelector(".content")

const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition

const recognition = new SpeechRecognition()
content.innerHTML = "Touch MyMoon to Listen Voice Command";

recognition.onstart = function () {
    console.log("start speaking")
    content.innerHTML = "listening";
    
    
}
recognition.onresult = function (event) {
    console.log(event)
    var current = event.resultIndex;
    const transcript = event.results[current][0].transcript;
    content.innerHTML = transcript
    readOutLoad(transcript)
    console.log(transcript)
    content.innerHTML = "Touch MyMoon to Listen Voice Command";
    
  

}
voiceBtn.addEventListener("click", () => {
    recognition.start();
    console.log("addevent")
    
})
voiceBtn.addEventListener("keydown", function (event) {

    if (event.keyCode === 13) {
        recognition.start();
        console.log("addevent")
    }

})



// Remove any existing event listeners before adding a new one
voiceBtn.removeEventListener("click", startRecognition);

// Add event listener to the button
voiceBtn.addEventListener("click", startRecognition);

// Function to start recognition
function startRecognition() {
    recognition.start();
    console.log("addevent");
}


function resetRecognition() {
    
    recognition.start();
}

function readOutLoad(message) {

    const greetings = "I'm fine";

    const weatherQ = "what's the weather tomorrow";

    const weather = 'The weather is fine';

    const intro = 'Hi, im Jarvis. Your Voice Assistant. Im here to help you.';

    const meQ = [
        'who made you',
        'who coded you',
        'who created you',
        'who made Jarvis',
        'who coded jarvis',
        'who created Jarvis'
    ]
    const kkQ = [
        'Jarvis',
        'jarvis',
        'hello jarvis',
        'hi jarvis',
        'hello Jarvis',
        'hi Jarvis'

    ]
    var k = new Date()
    const kk = 'yes sir. What can i do for you'
    const me = 'the programmer created me'

    // const introQ = 'who are you', 'what is this', 'say about yourself','intro'

    const timeQ = [
        "what is the time now",
        "can you tell me the time",
        "what the time",
        "time"
    ]
    const time = 'well, i dont know the time master';
    ;

    const speech = new SpeechSynthesisUtterance();

    speech.text = "I Don't Understand But Keep Enjoy My moon";
    content.textContent = message;

    if (message.includes("how are you")) {
        speech.text = greetings;
    }
    else if (message.includes('who are you') ||
    message.includes('what is this') ||
    message.includes('say about yourself')) {
    speech.text = 'Hi, im Jarvis. Your Voice Assistant. Im here to help you.';
}
else if (message.includes("what's the weather tomorrow") ||
message.includes("what's the weather today")) {
speech.text = weather;
}
else if (message.includes('who made you') ||
message.includes('who coded you') ||
message.includes('who made Jarvis') ||
message.includes('who coded jarvis') ||
message.includes('who created Jarvis')) {
speech.text = me;
}

else if (message.includes("my moon") || message.includes("mind machine") || message.includes("psychological mind machine")) {
speech.text = "Opening MyMoon";
window.open("https://mymoon.pages.dev", "_blank");
}
else if (message.includes("God") || message.includes("true God") || message.includes("psychological god")) {
speech.text = "Opening Psychological GOD";
window.open("https://mymoon.pages.dev/elements/metaphysics/psychological_god", "_blank");
}
else if (message.toLowerCase().includes("mind map") || message.includes("mind planning") || message.includes("mind plan")) {
speech.text = "Opening Mind Map";
window.open("https://mymoon.pages.dev/elements/guide/mind_map", "_blank");
}





else if (message.includes("confident") || 
message.includes("confidence") || 
message.includes("self confidence") || 
message.includes("self confident")) {
speech.text = "Opening Self Confidence Guide";
window.open("https://mymoon.pages.dev/elements/guide/self_confidence", "_blank");
} 
else if (message.includes("meditation")) {
speech.text = "Opening Meditation Guide";
window.open("https://mymoon.pages.dev/elements/guide/meditation", "_blank");
} 
else if (message.includes("mind control")) {
speech.text = "Opening Mind Control Guide";
window.open("https://mymoon.pages.dev/elements/guide/mind_control", "_blank");
} 
else if (message.includes("fail") || 
message.includes("failure") || 
message.includes("success")) {
speech.text = "Opening Failure Solution Guide";
window.open("https://mymoon.pages.dev/elements/guide/failure_solution", "_blank");
} 
else if (message.includes("life goals") || 
message.includes("goal") || 
message.includes("goals") || 
message.includes("career") || 
message.includes("career goal") || 
message.includes("ambition") || 
message.includes("life ambition")) {
speech.text = "Opening Successful Life Guide";
window.open("https://mymoon.pages.dev/elements/guide/successful_life", "_blank");
} 
else if (message.includes("what's happening on me") || 
message.includes("what's happening to me") || 
message.includes("problem in myself") || 
message.includes("self investigation")) {
speech.text = "Opening Self Exploration Guide";
window.open("https://mymoon.pages.dev/elements/solutions/self_exploration", "_blank");
} 
else if (message.includes("mood off") || 
message.includes("sorrow") || 
message.includes("mood off solution")) {
speech.text = "Opening Mood Off Solution";
window.open("https://mymoon.pages.dev/elements/solutions/mood_off_solution", "_blank");
} 
else if (message.includes("mood swing") || 
message.includes("mood swings") || 
message.includes("mood swing Solution")) {
speech.text = "Opening Mood Swing Solution";
window.open("https://mymoon.pages.dev/elements/solutions/mood_swing_solution", "_blank");
} 


else if (message.includes("loneliness") || 
        //  message.toLowerCase().includes("singleness") || 
         message.includes("alone") || 
         message.includes("loneliness solution")) {
    speech.text = "Opening Loneliness Solution";
    window.open("https://mymoon.pages.dev/elements/solutions/loneliness", "_blank");
} 
else if (message.includes("depression") || 
         message.includes("sadness") || 
         message.includes("depression solution")) {
    speech.text = "Opening Depression Solution";
    window.open("https://mymoon.pages.dev/elements/solutions/depression_solution", "_blank");
} 
else if (message.includes("introvert") || 
        //  message.includes("introvercy") || 
         message.includes("introvert solution")) {
    speech.text = "Opening Introvert Solution";
    window.open("https://mymoon.pages.dev/elements/solutions/introversy_solution", "_blank");
} 
else if (message.includes("rude") || 
         message.includes("rude behavior") || 
         message.includes("rude behave")) {
    speech.text = "Opening Rude Behavior Solution";
    window.open("https://mymoon.pages.dev/elements/solutions/rude_behavior", "_blank");
} 
else if (message.includes("drug") || 
         message.includes("drugs") || 
         message.includes("drug addiction") || 
         message.includes("addiction") || 
         message.includes("free from drug addiction") || 
         message.includes("drug addiction solution")) {
    speech.text = "Opening Drug Addiction Solution";
    window.open("https://mymoon.pages.dev/elements/solutions/drug_addition_solution", "_blank");
} 
else if (message.includes("tension") || 
         message.includes("tensions") || 
         message.includes("tension Solution") || 
         message.includes("tension free")) {
    speech.text = "Opening Tension Solution";
    window.open("https://mymoon.pages.dev/elements/solutions/tension_solution", "_blank");
} 
else if (message.includes("idea") || 
         message.includes("ideas") || 
         message.includes("thought")) {
    speech.text = "Opening Thinking Facts";
    window.open("https://mymoon.pages.dev/elements/facts/thinking", "_blank");
} 
else if (message.includes("happy") || 
         message.includes("happiness") || 
         message.includes("joy") || 
        //  message.includes("bless") || 
         message.includes("pleasure") || 
         message.includes("delight")) {
    speech.text = "Opening Happiness Facts";
    window.open("https://mymoon.pages.dev/elements/facts/happiness", "_blank");
}


else if (message.includes("magic mind")) {
    speech.text = "Opening Magic Mind Guide";
    window.open("https://mymoon.pages.dev/elements/applications/magic_mind", "_blank");
} 

else if (message.includes("magic") || 
         message.includes("black magic") || 
         message.includes("psycho magic")) {
    speech.text = "Opening Magic Facts";
    window.open("https://mymoon.pages.dev/elements/facts/psycho_magic", "_blank");
} 
else if (message.includes("non ethical thinking") || 
         message.includes("crime") || 
        //  message.includes("sin") || 
         message.includes("criminal") || 
         message.toLowerCase().includes("criminal mind") || 
         message.includes("criminal thinking")) {
    speech.text = "Opening Non Ethical Thinking Guide";
    window.open("https://mymoon.pages.dev/elements/stimulative_simulation/non_ethical_thinking", "_blank");
}
else if (message.includes("think") || 
         message.includes("thinking")) {
    speech.text = "Opening Thinking Applications";
    window.open("https://mymoon.pages.dev/elements/applications/thinking", "_blank");
} 
else if (message.includes("mind reading") || 
         message.includes("mind read")) {
    speech.text = "Opening Mind Reading Applications";
    window.open("https://mymoon.pages.dev/elements/applications/mind_reading", "_blank");
} 
else if (message.includes("music") || 
         message.includes("music mind") || 
        //  message.includes("binaural beats") || 
        //  message.includes("binaural beat") || 
        //  message.includes("binaural beat music") || 
        //  message.includes("binaural beats music") || 
         message.includes("brain music") || 
         message.includes("brain wave music")) {
    speech.text = "Opening Music Mind Applications";
    window.open("https://mymoon.pages.dev/elements/applications/music_mind", "_blank");
} 
else if (message.includes("mind meter")) {
    speech.text = "Opening Mind Meter Applications";
    window.open("https://mymoon.pages.dev/elements/applications/mind_meter", "_blank");
} 
else if (message.toLowerCase().includes("crypto mind") || 
         message.includes("hidden message") || 
         message.includes("secret message") || 
         message.includes("top secret") || 
         message.includes("secret")) {
    speech.text = "Opening Crypto Mind Applications";
    window.open("https://mymoon.pages.dev/elements/applications/crypto_mind", "_blank");
} 
else if (message.includes("mind download") || 
         message.includes("brain download") || 
         message.includes("brain data download")) {
    speech.text = "Opening Mind Download Applications";
    window.open("https://mymoon.pages.dev/elements/applications/mind_download", "_blank");
}



else if (message.includes("mind transplantation") || 
message.includes("brain transplantation")) {
speech.text = "Opening Mind Transplantation Guide";
window.open("https://mymoon.pages.dev/elements/applications/mind_transplantation", "_blank");
} 
else if (message.includes("immortality") || 
message.includes("immortal") || 
message.includes("deathless") || 
message.includes("no die")) {
speech.text = "Opening Immortal Mind Guide";
window.open("https://mymoon.pages.dev/elements/applications/immortal_mind", "_blank");
} 
else if (message.includes("mind wave") || 
message.includes("telepathy") || 
message.toLowerCase().includes("esp") 
 
) {
speech.text = "Opening Mind Wave Guide";
window.open("https://mymoon.pages.dev/elements/applications/mind_wave", "_blank");
} 
else if (message.includes("psychological time travel") || 
message.includes("time travel") || 
message.includes("time machine")) {
speech.text = "Opening Psychological Time Travel Guide";
window.open("https://mymoon.pages.dev/elements/applications/psychological_time_travel", "_blank");
} 
else if (message.includes("unconscious mind")) {
speech.text = "Opening Unconscious Mind Access Guide";
window.open("https://mymoon.pages.dev/elements/applications/unconscious_mind_access", "_blank");
} 
else if (message.includes("mind master") || 
message.includes("master mind")) {
speech.text = "Opening Mind Master Guide";
window.open("https://mymoon.pages.dev/elements/applications/mind_master", "_blank");
}

  
    else if (message.includes("shock") || 
             message.includes("trauma")  
             ) {
        speech.text = "Opening Psychological Shock Guide";
        window.open("https://mymoon.pages.dev/elements/applications/psychological_shock", "_blank");
    } 
    else if (message.toLowerCase().includes("zero therapy") || 
             message.includes("therapy")  
            //  message.includes("placebo") || 
             ) {
        speech.text = "Opening Zero Therapy Guide";
        window.open("https://mymoon.pages.dev/elements/applications/zero_therapy", "_blank");
    } 
    else if (message.includes("blank mind") || 
             message.includes("zero mind") || 
             message.includes("nothing mind") || 
             message.includes("mind refreshing") || 
             message.includes("mind refreshment")) {
        speech.text = "Opening Blank Mind Guide";
        window.open("https://mymoon.pages.dev/elements/applications/blank_mind", "_blank");
    } 
    else if (message.includes("relief") || 
             message.includes("psychological relief")) {
        speech.text = "Opening Psychological Relief Guide";
        window.open("https://mymoon.pages.dev/elements/applications/psychological_relief", "_blank");
    }
    
    
    
    else if (message.includes("moment") || 
    message.includes("time realisation") || 
    message.includes("time velocity")) {
speech.text = "Opening Moment Guide";
window.open("https://mymoon.pages.dev/elements/stimulative_simulation/moment", "_blank");
} 
else if (message.includes("life") || 
    message.toLowerCase().includes("life time") || 
    message.includes("life calculator")) {
speech.text = "Opening Life Calculator";
window.open("https://mymoon.pages.dev/elements/stimulative_simulation/life_time", "_blank");
} 
else if (message.includes("relation") || 
    message.includes("relations") || 
    message.includes("relationship") || 
    message.includes("friendship") || 
    message.includes("love") || 
    message.includes("affair")) {
speech.text = "Opening Bondhon Guide";
window.open("https://mymoon.pages.dev/elements/stimulative_simulation/bondhon", "_blank");
} 
else if (message.includes("smile") || 
    message.includes("smiling")) {
speech.text = "Opening Smiling Guide";
window.open("https://mymoon.pages.dev/elements/stimulative_simulation/smiling", "_blank");
} 
else if (message.includes("emotion") || 
    message.includes("emotions") || 
    message.includes("emotional") || 
    message.includes("emotion on mind")) {
speech.text = "Opening Emotion Guide";
window.open("https://mymoon.pages.dev/elements/stimulative_simulation/mon_maya", "_blank");
} 
else if (message.includes("mind candle") || 
    message.includes("candle")) {
speech.text = "Opening Mind Candle Guide";
window.open("https://mymoon.pages.dev/elements/stimulative_simulation/mind_candle", "_blank");
} 

else if (message.includes("psychedelic") || 
message.includes("brain jerk")) {
speech.text = "Opening Brain Jerk Guide";
window.open("https://mymoon.pages.dev/elements/stimulative_simulation/brain_jerk", "_blank");
}
else if (message.includes("rain") || 
    message.includes("rain in night") || 
    message.includes("rain sleep")) {
speech.text = "Opening Rain Guide";
window.open("https://mymoon.pages.dev/elements/stimulative_simulation/rain");
} 
else if (message.toLowerCase().includes("thunder")) {
    speech.text = "Opening Thunder Guide";
    window.open("https://mymoon.pages.dev/elements/stimulative_simulation/bijli", "_blank");
}
    
    
else if (
    message.includes("hope of light")) {
    speech.text = "Opening Hope of Light Guide";
    window.open("https://mymoon.pages.dev/elements/stimulative_simulation/hope_light", "_blank");
    }   
    
    
    
else if (message.includes("light") || 
message.includes("mind light") || 
message.includes("mind lighting") || 
message.includes("lighting")) {
speech.text = "Opening Mind Lighting Guide";
window.open("https://mymoon.pages.dev/elements/stimulative_simulation/mind_lighting", "_blank");
} 
else if (message.toLowerCase().includes("canvas")) {
speech.text = "Opening Canvas Guide";
window.open("https://mymoon.pages.dev/elements/stimulative_simulation/canvas", "_blank");
} 
 
else if (message.includes("squid")) {
speech.text = "Opening Obedient Squid Guide";
window.open("https://mymoon.pages.dev/elements/stimulative_simulation/obedient_squid", "_blank");
} 
else if (message.includes("ghost") || 
message.includes("ghost fear") || 
message.includes("fear") || 
message.includes("paranormal") || 
message.toLowerCase().includes("paranormal activity")) {
speech.text = "Opening Creepy Guide";
window.open("https://mymoon.pages.dev/elements/stimulative_simulation/creepy", "_blank");
} 
 
else if (message.includes("hypnotism") || 
message.includes("hypnotic") || 
message.includes("hypnotize") || 
message.includes("hypnosis")) {
speech.text = "Opening Hypnosis Guide";
window.open("https://mymoon.pages.dev/elements/stimulative_simulation/hypnotize", "_blank");
} 

else if (message.includes("psycho") || 
message.includes("psyco satisfaction") || 
message.includes("crazy") || 
message.includes("revenge") || 
message.includes("anger") ) {
speech.text = "Opening Psycho Satisfaction Guide";
window.open("https://mymoon.pages.dev/elements/stimulative_simulation/psycho_satisfaction", "_blank");
} 
else if (message.includes("death") || 
message.includes("suicide") || 
message.includes("die")) {
speech.text = "Opening Death Delusion Guide";
window.open("https://mymoon.pages.dev/elements/stimulative_simulation/death_delusion", "_blank");
}



else if (message.includes("open YouTube") || message.includes("open youtube")) {
    window.open("https://youtube.com", "_blank");
    speech.text = "opening youtube";
}
else if ( message.includes("time")) {
    var currentTime = new Date();
    speech.text = "It is " + currentTime.getHours() + ":" + currentTime.getMinutes() + " right now";
    console.log("It is " + currentTime.getHours() + ":" + currentTime.getMinutes() + " right now");
}
else if (message.includes("play believer") || 
         message.includes("hello beliver") || 
         message.includes("play beliver") || 
         message.includes("play believer")) {
    speech.text = "Playing Believer";
    window.open("https://www.youtube.com/watch?v=7wtfhZwyrcc", "_blank");
}
else if (message.includes("nice to meet you")) {
    speech.text = 'Nice to meet you, sir';
}
else if (message.includes("yes")) {
    var lowercaseMessage = message.toLowerCase();
    var parts = lowercaseMessage.split("yes ");
    speech.text = parts[1]; // Assuming you want to capture what follows "yes"
}
else if (message.includes("Lemon Tree") || 
         message.includes("lemon tree") || 
         message.includes("lemon")) {
    speech.text = "Playing Lemon Tree";
    window.open("https://www.youtube.com/watch?v=l2UiY2wivTs", "_blank");
}
else if (message.includes("play Thunder") || 
         message.includes("play thunder")) {
    speech.text = "Playing Thunder";
    window.open("https://www.youtube.com/watch?v=fKopy74weus", "_blank");
}
else if (message.includes("date") || message.includes("Date")) {
    var currentDate = new Date();
    speech.text = currentDate;
}




else if (message.includes("play cheap thrills") || message.includes("play Cheap Thrills")) {
    speech.text = "Playing Cheap Thrills";
    window.open("https://www.youtube.com/watch?v=nYh-n7EOtMA", "_blank");
}
else if (message.includes("play alone") || message.includes("play Alone")) {
    speech.text = "Playing Alone";
    window.open("https://www.youtube.com/watch?v=ALZHF5UqnU4", "_blank");
}
else if (message.includes("play faded") || message.includes("play Faded")) {
    speech.text = "Playing Faded";
    window.open("https://www.youtube.com/watch?v=60ItHLz5WEA", "_blank");
}
else if (message.includes("play it") || message.includes("play It")) {
    speech.text = "Playing Waiting for Love";
    window.open("https://www.youtube.com/watch?v=cHHLHGNpCSA", "_blank");
}
else if (message.includes("ringtone") || message.includes("Ringtone")) {
    speech.text = "Playing Dre";
    window.open("https://www.youtube.com/watch?v=j5LzEASx4YM", "_blank");
}
else if (message.includes("play old town road") || message.includes("play Old Town Road")) {
    speech.text = "Playing Old Town Road";
    window.open("https://www.youtube.com/watch?v=w2Ov5jzm3j8", "_blank");
}
else if (message.includes("rick roll") || message.includes("Rick Roll")) {
    speech.text = "Getting Rick Rolled";
    window.open("https://www.youtube.com/watch?v=dQw4w9WgXcQ", "_blank");
}
else if (message.includes("play blinding lights") || message.includes("play Blinding Lights")) {
    speech.text = "Playing Blinding Lights";
    window.open("https://www.youtube.com/watch?v=fHI8X4OXluQ", "_blank");
}





else if (message.includes("play Vadivel vox") || message.includes("play vadivel")) {
    speech.text = "Playing Vadivel Vox Tenet Version";
    window.open("https://www.youtube.com/watch?v=AYtC-_PPwiM", "_blank");
}
else if (message.includes("play Bad") || message.includes("play Bad Guy")) {
    speech.text = "Playing Bad Guy";
    window.open("https://www.youtube.com/watch?v=DyDfgMOUjCI", "_blank");
}
else if (message.includes("play Shape Of You") || message.includes("play Shape of You")) {
    speech.text = "Playing Shape of You";
    window.open("https://www.youtube.com/watch?v=JGwWNGJdvx8", "_blank");
}
else if (message.includes("open picture in picture")) {
    window.open("https://kishore-kumar-the-coder.github.io/Picture-in-Picture-Mode/index.html", "_blank");
    speech.text = "Opening Picture in Picture Mode";
}
else if (message.includes("play despacito")) {
    window.open("https://www.youtube.com/watch?v=kJQP7kiw5Fk", "_blank");
    speech.text = "Playing Despacito";
}
else if (message.includes("open BMI export") || 
         message.includes("open BMI expert")) {
    window.open("https://kishore-kumar-the-coder.github.io/BMI-EXPERT/bmi.html", "_blank");
    speech.text = "Opening BMI Expert";
}
else if (message.includes("play song") || 
         message.includes("play Samy Pattu")) {
    speech.text = "Playing Devotional Song";
    window.open("https://www.youtube.com/watch?v=pFLu9n1StDM&list=TLPQMTcxMTIwMjAD6FVzl3ID1A&index=1", "_blank");
}
else if (message.includes("what special today") && k.getMonth() === 4 && k.getDate() === 8) {
    speech.text = "Today is the birthday of the creator of Jarvis. Happy birthday!";
}



    else if (message.includes("search") || message.includes("Search")) {


        var searchcutter = message;
        var searchcutterk = message.toLowerCase()
        var res = searchcutter.split("search ");
        var rescutt = "searching  " + res;
        var linke = "https://www.google.com/search?q=";
        var linkekk = linke + res;
        speech.text = rescutt;
        console.log(speech.text)
        console.log(linkekk)
        console.log(rescutt)
        console.log(res)
        window.open(linkekk, "_blank");

    }
    else if (message.includes("YouTube") || message.includes("youtube")) {


        var searchcutter = message;
        var searchcutterk = message.toLowerCase()
        console.log(searchcutterk)
        var res = searchcutterk.split("youtube ");
        var rescutt = "searching  " + res;
        var linke = "https://www.youtube.com/results?search_query=";
        var linkekk = linke + res;
        speech.text = rescutt;
        console.log(speech.text)
        window.open(linkekk, "_blank");

    }
    
    
    
        window.speechSynthesis.speak(speech);
        window.open("https://mymoon.pages.dev", "_blank");
    
    
    
   
    
}
function show() {
    var divs = document.getElementById("divs").style.visibility = "visible"

}
function hide() {
    var divs = document.getElementById("divs").style.visibility = "hidden"

}

