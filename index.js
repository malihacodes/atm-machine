import inquirer from "inquirer";
let CurrentBal = 10000; // balance  in dollars
let Pincode = 1999;
console.log("Your Current balance is: $" + CurrentBal);
const questions = await inquirer.prompt([
    {
        name: "FirstQuestion",
        type: "number",
        message: "Enter your pin number?",
    },
]);
if (questions.FirstQuestion === Pincode) {
    const questions = await inquirer.prompt([
        {
            message: "What would you like to do?",
            type: "list",
            name: "SecondQuestion",
            choices: ["Withdraw", "Check Balance"],
        },
    ]);
    if (questions.SecondQuestion === "Withdraw") {
        const questions = await inquirer.prompt([
            {
                name: "amount",
                type: "number",
                message: "Enter amount",
            },
        ]);
        let NetBal = CurrentBal - questions.amount;
        console.log("Your Remaining balance is :", NetBal);
    }
    else if (questions.SecondQuestion === "Check Balance") {
        console.log("Your Balance is :  ", CurrentBal);
    }
}
else {
    console.log("Invalid password ");
}
