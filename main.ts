#! /usr/bin/env node

import inquirer from "inquirer";
import chalk from "chalk";

let balance = 20000;
let pin = 123;


const ans = await inquirer.prompt([{

    type: "number",
    name: "code",
    prefix:">",
    message: "Enter the pin-code"

}])

if(ans.code === pin){

    console.log("Correct the pin-Code");
}

const q1 = await inquirer.prompt([{
name: "operation",
type: "list",
prefix:">",
message:"Select the options",
choices:["Balance","withdraw","Fast_Cash"]
}])

 if(q1.operation === "Balance") {

        console.log("Now your current balance is =", balance);
    }

    else if (q1.operation === "withdraw"){
        console.log(chalk.blue("How much money do you want?"));
    
    const q2 = await inquirer.prompt([{
    
        type: "number",
        name: "amount1",
        prefix:">",
        message: "\nEnter the Amount"
    
    }])
    console.log(chalk.green(`Now your remaining balance is: ${balance - q2.amount1}\n`))}
    
    else if (q1.operation === "Fast_Cash"){
    
        const q3 = await inquirer.prompt([{
            name: "option",
            type: "list",
            prefix:">",
            message:"Select the amount",
            choices:["1000","5000","10000","15000"]
            }])
    
        console.log(chalk.yellow(`Now your remaining balance is: ${balance - q3.option}\n`));
        process.exit();
        }