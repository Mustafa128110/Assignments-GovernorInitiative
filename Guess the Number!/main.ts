#! /usr/bin/env node

import inquirer from "inquirer";

let randomNumber: number;
let score: number = 100;
let correct: number = 0;

console.log(
    "\n\tWelcome to the Number Guessing Game!\n" +
    "\nInstructions\n" + 
    "  ~ A random number will be generated\n" +
    "  ~ On every wrong guess your score will be deducted\n" +
    "  ~ On every correct guess, you will gain score\n" +
    "  ~ Game ends when your score falls below 0"
);

setTimeout(async() => {

    // ROUND 1
    randomNumber = Math.floor(Math.random() * 10);
    console.log(`\n\n\tROUND 1\n\nA random number has been generated (0-9)`);

    do {

        let answer = await inquirer.prompt([
            {
            name: "guess",
            type: "number",
            message: "Make your guess!  ",
            }
        ]);

        if (randomNumber != answer.guess) {
            score -= 10;
            correct = 0;
            console.log(`\nWrong! Your score is ${score}`);
            if (score > 0) {
                if (randomNumber > answer.guess) {
                    console.log(`Guess Higher!\n`);
                } else {
                    console.log(`Guess Lower!\n`);
                }
            } else {
                console.log("\nGame Over!\n");
            }
        } else {
            correct = 1;
            score += 30;
            console.log("\nCorrect! Lets proceed to Round 2");
        }

    } while (score >0 && correct == 0);

    // ROUND 2
    if (correct == 1) {
        randomNumber = Math.floor(Math.random() * 100);
        console.log(`\n\n\tROUND 2\n\nA random number has been generated (0-99)`);

        do {

            let answer = await inquirer.prompt([
                {
                    name: "guess",
                    type: "number",
                    message: "Make your guess!  ",
                }
            ]);
    
            if (randomNumber != answer.guess) {
                score -= 10;
                correct = 0;
                console.log(`\nWrong! Your score is ${score}`);
                if (score > 0) {
                    if (randomNumber > answer.guess) {
                        console.log(`Guess Higher!\n`);
                    } else {
                        console.log(`Guess Lower!\n`);
                    }
                } else {
                    console.log("\nGame Over!\n");
                }
            } else {
                correct = 1;
                score += 40;
                console.log("\nCorrect! Lets proceed to Round 3");
            }

        } while (score >0 && correct == 0);
    }

    // ROUND 3    
    if (correct == 1) {
        randomNumber = Math.floor(Math.random() * 1000);
        console.log(`\n\n\tROUND 3\n\nA random number has been generated (0-999)`);

        do {

            let answer = await inquirer.prompt([
                {
                    name: "guess",
                    type: "number",
                    message: "Make your guess!  ",
                }
            ]);
    
            if (randomNumber != answer.guess) {
                score -= 10;
                correct = 0;
                console.log(`\nWrong! Your score is ${score}`);
                if (score > 0) {
                    if (randomNumber > answer.guess) {
                        console.log(`Guess Higher!\n`);
                    } else {
                        console.log(`Guess Lower!\n`);
                    }
                } else {
                    console.log("\nGame Over!\n");
                }
            } else {
                correct = 1;
                console.log("\nCorrect! \n\nYou Win!\n");
            }

        } while (score >0 && correct == 0);
    }
    
}, 2000);

