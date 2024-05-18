import inquirer from 'inquirer';

const answer: { 
    sentence: "string"
} = await inquirer.prompt({
    name: "sentence",
    type: "input",
    message: "please enter your sentence or pragraph we count words:"
})

const word = answer.sentence.trim().split(" ");
console.log(`your sentence word count is  ${word.length}`);
