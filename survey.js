const readline = require('readline');

const r1 = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

const q1 = 'What is your name? (Nicknames are also acceptable :)) ';
const q2 = 'What\'s an activity you like doing? ';
const q3 = 'What do you listen to while doing that activity? ';
const q4 = 'Which mealtime is your favourite (i.e. breakfast, brunch, dinner, etc)? ';
const q5 = 'What\'s your favourite dish? ';
const q6 = 'What is your favourite sport and why? ';
const q7 = 'What is your favourite board game? ';
const q8 = 'What is you personal superpower? ';

r1.question(q1, (answer1) => {
  r1.question(q2, (answer2) => {
    r1.question(q3, (answer3) => {
      r1.question(q4, (answer4) => {
        r1.question(q5, (answer5) => {
          r1.question(q6, (answer6) => {
            r1.question(q7, (answer7) => {
              r1.question(q8, (answer8) => {
                console.log(`My name is ${answer1}. I like ${answer2}. I usually listen to ${answer3} while ${answer2}. My favourite mealtime is ${answer4}. ${answer5} is my favourite dish. My favourite sport is ${answer6}. I love to play ${answer7}. I think that ${answer8} is my personal superpower.`);
                r1.close();
              });
            });
          });
        });
      });
    });
  });
});
