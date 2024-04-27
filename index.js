#! /usr/bin/env node
import inquirer from "inquirer";
const answer = await inquirer.prompt([
    { message: "Enter First number", type: "number", name: "firstnumber" },
    { message: "Enter Second number", type: "number", name: "secondnumber" },
    {
        message: "Select one of the operators to perform operation",
        type: "list",
        name: "operator",
        choices: ["Addition", "Subtraction", "Multiplication", "Division"],
    },
]);
if (answer.operator === "Addition") {
    console.log("Your value is " + (answer.firstnumber + answer.secondnumber));
}
else if (answer.operator === "Subtraction") {
    console.log("Your value is " + (answer.firstnumber - answer.secondnumber));
}
else if (answer.operator === "Multiplication") {
    console.log("Your value is " + (answer.firstnumber * answer.secondnumber));
}
else if (answer.operator === "Division") {
    console.log("Your value is " + (answer.firstnumber / answer.secondnumber));
}
else {
    console.log("Please select valid option.");
}
