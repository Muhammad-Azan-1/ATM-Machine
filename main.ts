#!/usr/bin/env node

import inquirer from "inquirer";
import chalk from "chalk";

console.log(`Enter any of the following pin.

1) 1111                               
2) 2221
3) 0000 \n `);

let myBalance = 20000;
let mypin = 2221;

// checking if user enters a correct pin
while (true) {
    let checkMyPin = await inquirer.prompt([
        {
            message: "Please enter your 4 digits pin : ",
            type: "number",
            name: "pin",
        },
    ]);

    if (checkMyPin.pin == mypin) {
        console.log(chalk.bgGreen("\ncorrect pin\n"));
        break;
    } else if (checkMyPin.pin !== mypin) {
        console.log(chalk.bgRed("\nIncorrect pin please try again\n"));
    }

    }
        // asking user what he wants to do
        let answer = await inquirer.prompt([
            {
                message: "Please select any option",
                name: "option",
                type: "list",
                choices: ["cash withdraw","Fast cash" , "check balance"],
            },
        ]);

        //opt 1
        if (answer.option === "cash withdraw") {
            let cash = await inquirer.prompt([
                {
                    message: "Please enter the cash you want to withdraw: ",
                    name: "amount",
                    type: "number",
                },
            ]);

            // checking if user enters amount within the limit or not
            while (true) {
                if (cash.amount <= myBalance) {
                    console.log(chalk.bold(`\nYou have successfully withdrawn = ${chalk.bgGreenBright(cash.amount,"Rs")}\n`));
                    myBalance -= cash.amount;
                    console.log(chalk.bold(`Now your current balance is = ${chalk.bgBlueBright(myBalance,"Rs")}`));
                    break;
                } else if (cash.amount > myBalance) {
                    console.log(chalk.bold(`Please Apni hesiyat main reh kr amount nikale`));
                    cash = await inquirer.prompt([
                        {
                            message: "Please enter the cash you want to withdraw: ",
                            name: "amount",
                            type: "number",
                        },
                    ]);
                }
            }
        } 
        //opt2
        else if (answer.option === "Fast cash"){
        
        let fastCash = await inquirer.prompt([

            {

            message: "Please select amount you want to withdraw",
            type:"list",
            name:"cashtype",
            choices:["500","1000","3000","5000",]
        
            }

      ]);

        if(fastCash.cashtype === "500"){
        console.log(chalk.bold(`\nYou have succssesfully withdrawn = ${chalk.bgGreen(500,"Rs")}\n`))
        myBalance -= 500
        console.log(chalk.bold(`Your current balance is = ${chalk.bgBlueBright(myBalance,"Rs")}`))

        }
        else if(fastCash.cashtype === "1000"){
            console.log(chalk.bold(`\nYou have succssesfully withdrawn = ${chalk.bgGreen(1000,"Rs")}\n`))
            myBalance -= 1000
            console.log(chalk.bold(`Your current balance is = ${chalk.bgBlueBright(myBalance,"Rs")}`))

        }
        else if (fastCash.cashtype === "3000"){
            console.log(chalk.bold(`\nYou have succssesfully withdrawn = ${chalk.bgGreen(3000,"Rs")}\n`))
            myBalance -= 3000
            console.log(chalk.bold(`Your current balance is = ${chalk.bgBlueBright(myBalance,"Rs")}`))

        }
        else if(fastCash.cashtype === "5000"){
            console.log(chalk.bold(`\nYou have succssesfully withdrawn = ${chalk.bgGreen(5000,"Rs")}\n`))
            myBalance -= 5000
            console.log(chalk.bold(`Your current balance is = ${chalk.bgBlueBright(myBalance,"Rs")}`))
        }

        }
        //opt5
        else if (answer.option === "check balance") {
            console.log(chalk.bold(`Your balance is = ${chalk.bgBlueBright(myBalance,"Rs")}`));
        }
   




































































