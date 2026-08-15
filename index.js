#!/usr/bin/env node

import chalk from 'chalk';
import inquirer from 'inquirer';
import gradient from 'gradient-string';
import chalkAnimation from 'chalk-animation';
import figlet from  'figlet';
import { createSpinner } from 'nanospinner';
import autocomplete from 'inquirer-autocomplete-standalone';

import { searchCountries } from './external-api.js';

let playerName;
let score = 0;

const sleep = (ms = 1000) => new Promise((r) => setTimeout(r, ms));

async function welcome() {
  const rainbowTitle = chalkAnimation.rainbow(
    "Cool people never give up!! \n"
  );

  await sleep();
  rainbowTitle.stop();

  console.log(`
    ${chalk.bgBlue('Need help with application?')}
    ${chalk.green.bold.italic('I am a process on your computer')}.
    Let's gooooooooooooo.......
  `);
  await sleep();
}

async function askName() {
  const answers = await inquirer.prompt({
    name: 'player_name',
    type: 'input',
    message: 'What is your name?',
    default() {
      return 'Player';
    },
  });

  playerName = answers.player_name;

  await sleep();
}


async function question1() {
  const answers = await inquirer.prompt({
    name: 'question_1',
    type: 'list',
    message: '\nIf the code has bugs then?\n',
    choices: [
      'grind',
      'forget it',
      'idk',
      'hihi'
    ],
  });

  return handleAnswer(answers.question_1 == 'grind');
  
  await sleep();
}

async function question2() {
  const answers = await inquirer.prompt({
    name: 'coding_q',
    type: 'list',
    message: '\nWhat is the worst-case time complexity of accessing an element in an Array vs a Hash Table?\n',
    choices: [
      'Array: O(1), Hash Table: O(n)',
      'Array: O(n), Hash Table: O(n)',
      'Array: O(1), Hash Table: O(1)',
      'Array: O(n), Hash Table: O(1)',
    ],
  });

  return handleAnswer(answers.coding_q === 'Array: O(1), Hash Table: O(n)');

  await sleep();
}

async function question3() {
  const answers = await inquirer.prompt({
    name: 'gk_q',
    type: 'list',
    message: '\nWhich protocol is strictly responsible for dynamically assigning IP addresses to devices on a network?\n',
    choices: [
      'DNS (Domain Name System)',
      'DHCP (Dynamic Host Configuration Protocol)',
      'ARP (Address Resolution Protocol)',
      'HTTP (Hypertext Transfer Protocol)',
    ],
  });

  return handleAnswer(answers.gk_q === 'DHCP (Dynamic Host Configuration Protocol)');
  await sleep();
}

async function question4() {
  const answers = await inquirer.prompt({
    name: 'motivation_q',
    type: 'list',
    message: '\nAccording to popular consensus among senior engineers, what is the #1 key to mastering computer science and problem solving?\n',
    choices: [
      'Memorizing syntax documentation line by line',
      'Consistent practice, deep debugging, and never giving up when stuck',
      'Buying the most expensive mechanical keyboard',
      'Copy-pasting solutions without understanding the underlying datapath',
    ],
  });

  return handleAnswer(
    answers.motivation_q === 'Consistent practice, deep debugging, and never giving up when stuck'
  );
  await sleep();
}

async function handleAnswer(isCorrect) {
  const spinner = createSpinner('Checking Answer....').start();
  await sleep();

  if(isCorrect) {
    score = score + 1;
    spinner.success({ text: `Great work ${playerName}. That's a legit answer`});
  } else {
    spinner.error({ text: `💀💀💀 Game Over !!\nYour score ${score}`});
    process.exit(1);
  }
}

function winner() {
  console.clear();
  const msg = `Congrats, ${playerName} ! \n`;

  figlet(msg, (err, data) => {
    console.log(gradient.pastel.multiline(data));
  });
}

await welcome();
await askName();
await question1();
await question2();
await question3();
await question4();
winner();