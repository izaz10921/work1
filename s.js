var voiceBtn = document.getElementById("sS")
var content = document.querySelector(".content")

const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition

const recognition = new SpeechRecognition()

recognition.onstart = function () {
    console.log("start speaking")
    content.innerHTML = "listening"
}
recognition.onresult = function (event) {
    console.log(event)
    var current = event.resultIndex;
    const transcript = event.results[current][0].transcript;
    content.innerHTML = transcript
    readOutLoad(transcript)
    console.log(transcript)

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

    speech.text = 'I dont know what to say';

    if (message.includes("how are you")) {
        speech.text = greetings;
    }
    else if (message.includes('who are you',
        'what is this',
        'say about yourself')) {
        speech.text = 'Hi, im Jarvis. Your Voice Assistant. Im here to help you.';
    }
    else if (message.includes("what's the weather tomorrow",
        "what's the weather today")) {
        speech.text = weather;
    }
    else if (message.includes('who made you',
        'who coded you',
        'who created you',
        'who made Jarvis',
        'who coded jarvis',
        'who created Jarvis')) {
        speech.text = me;
    }
    else if (message.includes('hello', 'hai')) {
        speech.text = kk;
    }


    else if (message.includes("what is the time now",
        "can you tell me the time",
        "what the time",
        "time",
        "what's the time now")) {
        speech.text = time;
    }
    else if (message.includes("my moon", "mind machine", "psychological mind machine")) {
        speech.text = "Opening MyMoon";
        window.open("https://mymoon.pages.dev", "_blank");
    }

    else if (message.includes("God", "true God", "psychological god")) {
        speech.text = "Opening Psychological GOD";
        window.open("https://mymoon.pages.dev/elements/metaphysics/psychological_god", "_blank");
    }

    else if (message.includes("mind map", "mind planning", "mind plan")) {
        speech.text = "Opening Mind Map";
        window.open("https://mymoon.pages.dev/elements/guide/mind_map", "_blank");
    }
    else if (message.includes("confident", "confidence", "self confidence", "self confident")) {
        speech.text = "Opening Self Confidence Guide";
        window.open("https://mymoon.pages.dev/elements/guide/self_confidence", "_blank");
    } else if (message.includes("meditation")) {
        speech.text = "Opening Meditation Guide";
        window.open("https://mymoon.pages.dev/elements/guide/meditation", "_blank");
    } else if (message.includes("mind control")) {
        speech.text = "Opening Mind Control Guide";
        window.open("https://mymoon.pages.dev/elements/guide/mind_control", "_blank");
    } else if (message.includes("fail", "failure", "success")) {
        speech.text = "Opening Failure Solution Guide";
        window.open("https://mymoon.pages.dev/elements/guide/failure_solution", "_blank");
    } else if (message.includes("life goals", "goal", "goals", "career", "career goal", "ambition", "life ambition")) {
        speech.text = "Opening Successful Life Guide";
        window.open("https://mymoon.pages.dev/elements/guide/successful_life", "_blank");
    } else if (message.includes("what's happening on me", "what's happening to me", "problem in myself", "self investigation")) {
        speech.text = "Opening Self Exploration Guide";
        window.open("https://mymoon.pages.dev/elements/solutions/self_exploration", "_blank");
    } else if (message.includes("mood off", "sorrow", "mood off solution")) {
        speech.text = "Opening Mood Off Solution";
        window.open("https://mymoon.pages.dev/elements/solutions/mood_off_solution", "_blank");
    } else if (message.includes("mood swing", "mood swings", "mood swing Solution")) {
        speech.text = "Opening Mood Swing Solution";
        window.open("https://mymoon.pages.dev/elements/solutions/mood_swing_solution", "_blank");
    } else if (message.includes("loneliness", "singleness", "alone", "loneliness solution")) {
        speech.text = "Opening Loneliness Solution";
        window.open("https://mymoon.pages.dev/elements/solutions/loneliness", "_blank");
    } else if (message.includes("depression", "sadness", "depression solution")) {
        speech.text = "Opening Depression Solution";
        window.open("https://mymoon.pages.dev/elements/solutions/depression_solution", "_blank");
    } else if (message.includes("introvert", "introvercy", "introvert solution")) {
        speech.text = "Opening Introvert Solution";
        window.open("https://mymoon.pages.dev/elements/solutions/introversy_solution", "_blank");
    } else if (message.includes("rude", "rude behavior", "rude behave")) {
        speech.text = "Opening Rude Behavior Solution";
        window.open("https://mymoon.pages.dev/elements/solutions/rude_behavior", "_blank");
    } else if (message.includes("drug", "drugs", "drug addiction", "addiction", "free from drug addiction", "drug addiction solution")) {
        speech.text = "Opening Drug Addiction Solution";
        window.open("https://mymoon.pages.dev/elements/solutions/drug_addition_solution", "_blank");
    } else if (message.includes("tension", "tensions", "tension Solution", "tension free")) {
        speech.text = "Opening Tension Solution";
        window.open("https://mymoon.pages.dev/elements/solutions/tension_solution", "_blank");
    } else if (message.includes("idea", "ideas", "thought")) {
        speech.text = "Opening Thinking Facts";
        window.open("https://mymoon.pages.dev/elements/facts/thinking", "_blank");
    } else if (message.includes("happy", "happiness", "joy", "bless ness", "pleasure", "delight")) {
        speech.text = "Opening Happiness Facts";
        window.open("https://mymoon.pages.dev/elements/facts/happiness", "_blank");
    } else if (message.includes("magic", "black magic", "psycho magic")) {
        speech.text = "Opening Magic Facts";
        window.open("https://mymoon.pages.dev/elements/facts/psycho_magic", "_blank");
    } else if (message.includes("think", "thinking")) {
        speech.text = "Opening Thinking Applications";
        window.open("https://mymoon.pages.dev/elements/applications/thinking", "_blank");
    } else if (message.includes("mind reading", "mind read")) {
        speech.text = "Opening Mind Reading Applications";
        window.open("https://mymoon.pages.dev/elements/applications/mind_reading", "_blank");
    } else if (message.includes("music", "music mind", "binaural beats", "binaural beat", "binaural beat music", "binaural beats music", "brain music", "brain wave music")) {
        speech.text = "Opening Music Mind Applications";
        window.open("https://mymoon.pages.dev/elements/applications/music_mind", "_blank");
    } else if (message.includes("mind meter")) {
        speech.text = "Opening Mind Meter Applications";
        window.open("https://mymoon.pages.dev/elements/applications/mind_meter", "_blank");
    } else if (message.includes("crypto mind", "hidden message", "secret message", "top secret", "secret")) {
        speech.text = "Opening Crypto Mind Applications";
        window.open("https://mymoon.pages.dev/elements/applications/crypto_mind", "_blank");
    } else if (message.includes("mind download", "brain download", "brain data download")) {
        speech.text = "Opening Mind Download Applications";
        window.open("https://mymoon.pages.dev/elements/applications/mind_download", "_blank");
    }
    else if (message.includes("mind transplantation", "brain transplantation")) {
        speech.text = "Opening Mind Transplantation Guide";
        window.open("https://mymoon.pages.dev/elements/applications/mind_transplantation", "_blank");
    } else if (message.includes("immortality", "immortal", "deathless", "no die")) {
        speech.text = "Opening Immortal Mind Guide";
        window.open("https://mymoon.pages.dev/elements/applications/immortal_mind", "_blank");
    } else if (message.includes("mind wave", "telepathy", "esp", "thought transference", "extrasensory perception", "brain to brain thinking transfer")) {
        speech.text = "Opening Mind Wave Guide";
        window.open("https://mymoon.pages.dev/elements/applications/mind_wave", "_blank");
    } else if (message.includes("psychological time travel", "time travel", "time machine")) {
        speech.text = "Opening Psychological Time Travel Guide";
        window.open("https://mymoon.pages.dev/elements/applications/psychological_time_travel", "_blank");
    } else if (message.includes("unconscious mind")) {
        speech.text = "Opening Unconscious Mind Access Guide";
        window.open("https://mymoon.pages.dev/elements/applications/unconscious_mind_access", "_blank");
    } else if (message.includes("mind master", "master mind")) {
        speech.text = "Opening Mind Master Guide";
        window.open("https://mymoon.pages.dev/elements/applications/mind_master", "_blank");
    }
    else if (message.includes("magic mind")) {
        speech.text = "Opening Magic Mind Guide";
        window.open("https://mymoon.pages.dev/elements/applications/magic_mind", "_blank");
    } else if (message.includes("shock", "trauma", "psychological shock")) {
        speech.text = "Opening Psychological Shock Guide";
        window.open("https://mymoon.pages.dev/elements/applications/psychological_shock", "_blank");
    } else if (message.includes("zero therapy", "therapy", "placebo", "placebo effect")) {
        speech.text = "Opening Zero Therapy Guide";
        window.open("https://mymoon.pages.dev/elements/primary", "_blank");
    } else if (message.includes("blank mind", "zero mind", "nothing mind", "mind refreshing", "mind refreshment")) {
        speech.text = "Opening Blank Mind Guide";
        window.open("https://mymoon.pages.dev/elements/primary", "_blank");
    } else if (message.includes("relief", "psychological relief")) {
        speech.text = "Opening Psychological Relief Guide";
        window.open("https://mymoon.pages.dev/elements/applications/psychological_relief", "_blank");
    } else if (message.includes("moment", "time realisation", "time velocity")) {
        speech.text = "Opening Moment Guide";
        window.open("https://mymoon.pages.dev/elements/stimulative_simulation/moment", "_blank");
    } else if (message.includes("life", "life time", "life calculator")) {
        speech.text = "Opening Life Guide";
        window.open("https://mymoon.pages.dev/elements/stimulative_simulation/life_time", "_blank");
    }
    else if (message.includes("relation", "relations", "relationship", "friendship", "love", "affair")) {
        speech.text = "Opening Bondhon Guide";
        window.open("https://mymoon.pages.dev/elements/stimulative_simulation/bondhon", "_blank");
    } else if (message.includes("smile", "smiling")) {
        speech.text = "Opening Smiling Guide";
        window.open("https://mymoon.pages.dev/elements/stimulative_simulation/smiling", "_blank");
    } else if (message.includes("emotion", "emotions", "emotional", "emotion on mind")) {
        speech.text = "Opening Emotion Guide";
        window.open("https://mymoon.pages.dev/elements/stimulative_simulation/mon_maya", "_blank");
    } else if (message.includes("mind candle", "candle")) {
        speech.text = "Opening Mind Candle Guide";
        window.open("https://mymoon.pages.dev/elements/stimulative_simulation/mind_candle", "_blank");
    } else if (message.includes("rain", "rain in nigh", "rain sleep")) {
        speech.text = "Opening Rain Guide";
        window.open("https://mymoon.pages.dev/elements/stimulative_simulation/rain", "_blank");
    } else if (message.includes("thunder")) {
        speech.text = "Opening Thunder Guide";
        window.open("https://mymoon.pages.dev/elements/stimulative_simulation/bijli", "_blank");
    } else if (message.includes("light", "mind light", "nind lighting", "lighting")) {
        speech.text = "Opening Mind Lighting Guide";
        window.open("https://mymoon.pages.dev/elements/stimulative_simulation/mind_lighting", "_blank");
    } else if (message.includes("canvas")) {
        speech.text = "Opening Canvas Guide";
        window.open("https://mymoon.pages.dev/elements/stimulative_simulation/canvas", "_blank");
    } else if (message.includes("hope", "hope of light")) {
        speech.text = "Opening Hope of Light Guide";
        window.open("https://mymoon.pages.dev/elements/stimulative_simulation/hope_light", "_blank");
    } else if (message.includes("squid")) {
        speech.text = "Opening Obedient Squid Guide";
        window.open("https://mymoon.pages.dev/elements/stimulative_simulation/obedient_squid", "_blank");
    } else if (message.includes("ghost", "ghost fear", "fear", "paranormal", "paranormal activity")) {
        speech.text = "Opening Creepy Guide";
        window.open("https://mymoon.pages.dev/elements/stimulative_simulation/creepy", "_blank");
    } else if (message.includes("psycodelic", "brain jerk")) {
        speech.text = "Opening Brain Jerk Guide";
        window.open("https://mymoon.pages.dev/elements/stimulative_simulation/brain_jerk", "_blank");
    } else if (message.includes("hypnotism", "hypnotic", "hypnotize", "hypnosis")) {
        speech.text = "Opening Hypnosis Guide";
        window.open("https://mymoon.pages.dev/elements/stimulative_simulation/hypnotize", "_blank");
    } else if (message.includes("non ethical thinking", "crime", "sin", "criminal", "criminal mind", "criminal thinking")) {
        speech.text = "Opening Non Ethical Thinking Guide";
        window.open("https://mymoon.pages.dev/elements/stimulative_simulation/non_ethical_thinking", "_blank");
    } else if (message.includes("psycho", "psyco satisfaction", "crazy", "revenge", "anger", "distraction")) {
        speech.text = "Opening Psycho Satisfaction Guide";
        window.open("https://mymoon.pages.dev/elements/stimulative_simulation/psycho_satisfaction", "_blank");
    } else if (message.includes("death", "suicide", "die")) {
        speech.text = "Opening Death Delusion Guide";
        window.open("https://mymoon.pages.dev/elements/stimulative_simulation/death_delusion", "_blank");
    }

    else if (message.includes("open YouTube") || message.includes("open youtube")) {
        window.open("https://youtube.com", "_blank")
        speech.text = "opening youtube"
    }
    else if (message.includes("what's the time now", "time")) {
        speech.text = "it is " + new Date().getHours() + new Date().getMinutes() + " right now"
        console.log("it is " + new Date().getHours() + ":" + new Date().getMinutes() + " right now")
    }
    else if (message.includes("play believer", "hello beliver", "play beliver", "play believer")) {
        speech.text = "Playing beliver"
        window.open("https://www.youtube.com/watch?v=7wtfhZwyrcc", "_blank")

    }
    else if (message.includes("nice to meet you")) {
        speech.text = 'nice to meet you sir'
    }
    else if (message.includes("yes")) {
        var lbk = message.toLowerCase()
        var lk = lbk.split("yes ")
        speech.text = lk
    }
    else if (message.includes("Lemon Tree", " lemon tree", "lemon")) {
        speech.text = "Playing lemon tree"
        window.open("https://www.youtube.com/watch?v=l2UiY2wivTs", "_blank")
    }
    else if (message.includes("play Thunder", "play thunder")) {
        speech.text = "Playing Thunder"
        window.open("https://www.youtube.com/watch?v=fKopy74weus", "_blank")
    }
    else if (message.includes("date") || message.includes("Date")) {
        var kk1 = new Date();
        speech.text = kk1
    }
    else if (message.includes("play cheap thrills", "play cheap thrills")) {
        speech.text = "Playing Cheap Thrills"
        window.open("https://www.youtube.com/watch?v=nYh-n7EOtMA", "_blank")

    }
    else if (message.includes("play alone", "play Alone")) {
        speech.text = "Playing Alone"
        window.open("https://www.youtube.com/watch?v=ALZHF5UqnU4", "_blank")

    }
    else if (message.includes("play faded", "play Faded")) {
        speech.text = "Playing Faded"
        window.open("https://www.youtube.com/watch?v=60ItHLz5WEA", "_blank")

    }
    else if (message.includes("play it", "play it")) {
        speech.text = "Playing Waiting for love"
        window.open("https://www.youtube.com/watch?v=cHHLHGNpCSA", "_blank")

    }
    else if (message.includes("ringtone", "Ringtone")) {
        speech.text = "Playing dre"
        window.open("https://www.youtube.com/watch?v=j5LzEASx4YM", "_blank")

    }

    else if (message.includes("play old twon road", "play Old Twon Road")) {
        speech.text = "Playing Old Town"
        window.open("https://www.youtube.com/watch?v=w2Ov5jzm3j8", "_blank")

    }
    else if (message.includes("Rick roll", "rick roll")) {
        speech.text = "get rick rollled"
        window.open("https://www.youtube.com/watch?v=dQw4w9WgXcQ", "_blank")

    }
    else if (message.includes("play blinding lights", "play blinding lights")) {
        speech.text = "Playing blinding lights"
        window.open("https://www.youtube.com/watch?v=fHI8X4OXluQ", "_blank")

    }
    else if (message.includes("play Vadivel vox ", "play vadivel")) {
        speech.text = "Playing vadivel vox tenet version"
        window.open("https://www.youtube.com/watch?v=AYtC-_PPwiM", "_blank")

    }
    else if (message.includes("play Bad", "play Bad")) {
        speech.text = "Playing Bad Guy"
        window.open("https://www.youtube.com/watch?v=DyDfgMOUjCI", "_blank")
        // https://www.youtube.com/watch?v=JGwWNGJdvx8
    }
    else if (message.includes("play Shape Of You", "play Shape Of You")) {
        speech.text = "Playing Shape of you"
        window.open("https://www.youtube.com/watch?v=JGwWNGJdvx8", "_blank")
        // https://www.youtube.com/watch?v=JGwWNGJdvx8
    }
    else if (message.includes("open picture in picture",)) {
        window.open("https://kishore-kumar-the-coder.github.io/Picture-in-Picture-Mode/index.html", "_blank")
        speech.text = "Opening picture in picture mode "


    }
    else if (message.includes("play despacito")) {
        window.open("https://www.youtube.com/watch?v=kJQP7kiw5Fk", "_blank")

        speech.text = "Playing despacito"
    }
    else if (message.includes("open BMI export",
        "open BMI expert",
        "open BMI export")) {
        window.open("https://kishore-kumar-the-coder.github.io/BMI-EXPERT/bmi.html", "_blank")
        speech.text = "Opening BMI expert "

    }
    else if (message.includes("play song", "play Samy Pattu")) {
        speech.text = "Playing devotional song"
        window.open("https://www.youtube.com/watch?v=pFLu9n1StDM&list=TLPQMTcxMTIwMjAD6FVzl3ID1A&index=1", "_blank")

    }

    else if (message.includes("what special today") && k.getMonth() === 4 && k.getDate() === 8) {
        speech.text = "today is the birthday of creator of jarvis. happpy birthday"

    }
    else if (message.includes("what special today") && k.getMonth() === 1 && k.getDate() === 15) {
        speech.text = "today is the birthday of vinu. happpy birthday"

    }
    else if (message.includes("what special today") && k.getMonth() === 8 && k.getDate() === 26) {
        speech.text = "today is the birthday of karthikeyan. happpy birthday"

    }
    else if (message.includes("what special today") && k.getMonth() === 3 && k.getDate() === 15) {
        speech.text = "today is the birthday of mariyammal. happpy birthday"

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




    window.speechSynthesis.speak(speech)
}
function show() {
    var divs = document.getElementById("divs").style.visibility = "visible"

}
function hide() {
    var divs = document.getElementById("divs").style.visibility = "hidden"

}









// var bbk = k
// console.log(typeof k)
// console.log(bbk)
// Thu Nov 19 2020 14:47:21 GMT+0530 (India Standard Time
// if (k.includes("May 8")) {
//     console.log("njkgjh")
// }





// var SpeechRecognition = SpeechRecognition || webkitSpeechRecognition
// var SpeechGrammarList = SpeechGrammarList || webkitSpeechGrammarList
// var SpeechRecognitionEvent = SpeechRecognitionEvent || webkitSpeechRecognitionEvent






// var recognition = new SpeechRecognition();
// var speechRecognitionList = new SpeechGrammarList();

