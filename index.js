/*
let giveCat = document.getElementById('cat_btn');

giveCat.addEventListener('click', evt => {
  let catDiv = document.getElementById('cat_container')

  fetch('https://api.thecatapi.com/v1/images/search')
  .then(res => res.json())
  .then(cats => {
    cats.forEach(cat => {
      catDiv.innerHTML = `<h2>Here is a cat to cheer you up! </h2>
      <img src="${cat.url}" alt="kitty" />`
    })
  })
});
*/

$(document).ready(function () {
  const trigger = [
    ['hi', 'hey', 'hello', 'hallo', 'hey'],
    ['how are you', 'how have you been'],
    ['happy', 'good', 'well', 'amazing', 'great', 'not too bad'],
    [
      "i'm bad",
      'not well',
      'terrible',
      'awful',
      'horrible',
      'depressed',
      "i'm tired",
      ' i am sad',
      'down',
      'blue',
      'angry',
      'mad',
      'pissed',
      'furious',
      'anxious',
    ],
    ['cheer me up', 'i need serotonin'],
    ['i need advice', 'could you help me', 'how do i', 'how should i'],
    ['family', 'wife', 'husband', 'kids', 'children', 'daughter', 'son'],
    ['work', 'job', 'business', 'boss', 'employer'],
    ['brain', 'mental health', 'mind', 'head'],
    [
      'suicide',
      'suicidal',
      'kill myself',
      'kms',
      'off myself',
      "i'm just done",
      'done with everything',
    ],
    ['i hate cats', 'i do not like cats', 'cats are the worst'],
    ['thanks', 'thank you'],
    ['bye', 'see you later', 'good bye', 'peace', 'chow', 'tchuss', 'adios'],
    ['what', 'huh', 'bro', 'dude', 'wdym', '???'],
    ['no thanks', 'no thank you', 'no', 'nah', 'nein danke'],
    ['covid', 'coronavirus', 'pandemic', 'quarantine'],
    ['happychat', 'happy chat', 'happy bot', 'happybot'],
  ];

  const replies = [
    ['Hello!', 'Hi!', 'Hey!'],
    [
      'Fine, how are you?',
      "I'm well, and you?",
      "I'm great! How are you feeling today?",
    ],
    [
      "That's so nice to hear! What was your favorite part of your day?",
      "That's awesome!",
      "I'm glad to hear you're doing well. :)",
    ],
    [
      "I'm sorry to hear that, tell me a bit more about your problem?",
      'Could you give me more information?',
      'Could you elaborate for me?',
    ],
    ['Click on the Cat Pictures! button for some serotonin!'],
    [
      'Sure, tell me about your situation',
      'How can you make change in your environment?',
    ],
    [
      'Could you communicate your feelings to them, or set boundaries?',
      'How can you work together to fix the problem?',
    ],
    [
      'Is there anyone you can take your concerns to?',
      'Can you tell a boss or manager?',
    ],
    [
      'Learning about mental health is great. Try googling DBT for mental health, and read about it a bit.',
      "I've heard the brain can be a scary place, but I've also heard that talking to someone can help.",
      'Stress is a horrible thing for the body, try cutting it out as often as possible.',
    ],
    [
      "The National Suicide Hotline number is 800-273-8255. You'll be okay in time. :)",
    ],
    ["Wow, uh, that's a first. :("],
    [
      "You're welcome! I'm here any time.",
      'Of course, is there anything else I can do for you?',
    ],
    ['I mainly give advice and talk about feelings.'],
    ["I'm sorry for being unclear, could you clarify your question for me?"],
    ['Okay, is there anything else I can do for you?'],
    [
      'The pandemic has been tough for almost everyone. Please stay home.',
      'Try to fill your time with meaningful activities, it might help. :)',
    ],
    ["That's me!", 'What can I do for you?', "Hey, that's my name!"],
  ];

  const alternative = [
    "I didn't quite get that.",
    'Could you tell me more?',
    "I'm having a hard time with that one.",
    'Go on...',
  ];

  $('.input').keypress(function (event) {
    if (event.which == 13) {
      const inputField = $('.input');
      const input = inputField.val();
      inputField.value = '';
      output(input);
    } else if (event.which == 13 && $('.input') == '') {
      inputField.value = '';
    }
  });

  function output(input) {
    let product;

    let text = input
      .toLowerCase()
      .replace(/[^\w\s]/gi, '')
      .replace(/[\d]/gi, '')
      .trim();
    text = text
      .replace(/i feel /g, '')
      .replace(/whats/g, 'what is')
      .replace(/please /g, '')
      .replace(/ please/g, '');

    if (compare(trigger, replies, text)) {
      product = compare(trigger, replies, text);
    } else {
      product = alternative[Math.floor(Math.random() * alternative.length)];
    }

    addChat(input, product);
  }

  function compare(triggerArray, repliesArray, string) {
    let reply;
    let replyFound = false;
    for (let i = 0; i < triggerArray.length; i++) {
      for (let j = 0; j < triggerArray[i].length; j++) {
        if (triggerArray[i][j] === string) {
          let replies = repliesArray[i];
          reply = replies[Math.floor(Math.random() * replies.length)];
          replyFound = true;
          break;
        }
      }
      if (replyFound) {
        break;
      }
    }
    return reply;
  }

  function addChat(input, product) {
    const messagesContainer = $('.messages');

    let userDiv = $('<div>', { id: 'user' });
    userDiv.html(`<span>${input}</span>`);
    messagesContainer.append(userDiv);

    let botDiv = $('<div>', { id: 'happybot' });
    // let botText = $(`<span></span>`);

    // botText.innerHTML('Typing...');
    // botDiv.append(botText);

    messagesContainer.append(botDiv);

    messagesContainer.scrollTop =
      messagesContainer.scrollHeight - messagesContainer.clientHeight;

    const synth = window.speechSynthesis;

    const textToSpeech = (string) => {
      let voice = new SpeechSynthesisUtterance(string);
      voice.text = string;
      voice.lang = 'en-US';
      voice.rate = 1;
      voice.pitch = 1;
      synth.speak(voice);
    };

    setTimeout(() => {
      // botText.innerText = `${product}`;
      textToSpeech(product);
    }, 2000);

    function time() {
      var today = new Date();

      var timeToday =
        today.getHours() + ':' + today.getMinutes() + ':' + today.getSeconds();
      // timeToday.appendTo('text_time');
    }

    time();
  }
});
