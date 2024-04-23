#! /usr/bin/env node
import inquirer from "inquirer";
async function Calculator() {
    let terminate = 0;
    do {
        console.log("\n\tWelcome to Calculator!\n");
        let answer = await inquirer.prompt([
            {
                name: "Number1",
                type: "number",
                message: "Enter Number 1: ",
            },
            {
                name: "Number2",
                type: "number",
                message: "Enter Number 2: ",
            },
            {
                name: "choice",
                type: "list",
                message: "\nWhat operation would you like to perform?: ",
                choices: [
                    "Addition",
                    "Subtraction",
                    "Multiplication",
                    "Division",
                    "Modulus",
                    "Exponent",
                    "Exit",
                ],
            },
        ]);
        switch (answer.choice) {
            case "Addition": {
                console.log(`\nThe answer is: ${answer.Number1 + answer.Number2}`);
                break;
            }
            case "Subtraction": {
                console.log(`\nThe answer is: ${answer.Number1 - answer.Number2}`);
                break;
            }
            case "Multiplication": {
                console.log(`\nThe answer is: ${answer.Number1 * answer.Number2}`);
                break;
            }
            case "Division": {
                if (answer.Number2 > 0) {
                    console.log(`\nThe answer is: ${answer.Number1 / answer.Number2}`);
                }
                else {
                    console.log("\nMath Error!");
                }
                break;
            }
            case "Modulus": {
                console.log(`\nThe answer is: ${answer.Number1 % answer.Number2}`);
                break;
            }
            case "Exponent": {
                console.log(`\nThe answer is: ${Math.pow(answer.Number1, answer.Number2)}`);
                // console.log(`\nThe answer is: ${answer.Number1 ** answer.Number2)}`);
                break;
            }
            case "Exit": {
                console.log("\nExiting...\n\n");
                terminate = 1;
                break;
            }
        }
    } while (terminate != 1);
}
Calculator();
