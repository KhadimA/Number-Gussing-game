import inquirer from "inquirer";

const randomnumber =Math.floor(Math.random() * 10 + 1 );
let answare;
let usernumber;

console.log("<------------------------------------------>");
console.log("| Welcome To Guessing Game with Khadim Ali |");
console.log("<------------------------------------------>");
do {
    answare = await inquirer.prompt([
        {
            name: "UGN",
            type: "number",
            message: "Guess a Number Between 1 and 10:",
        },
    ]);

    usernumber = answare.UGN;

    if (usernumber === randomnumber) {
        console.log("Congratulations! You guessed the correct number.");
    } else {
        console.log("Sorry, wrong number. Try again.");
    }
} while (usernumber !== randomnumber);
