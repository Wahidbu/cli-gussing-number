#! /usr/bin/env node
import inquirer from "inquirer";
const randomNumber = Math.floor(Math.random()* 10 + 1);
const answer = await inquirer.prompt([
    {
        name : "userGuessedNumber",
        type: "number",
        message: "please guess a number between 1-10"
    },
]);
if (answer.userGuessedNumber === randomNumber){
    console.log("you are win.")
}else{
    console.log("You are lose try again")
}
