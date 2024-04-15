import inquirer from "inquirer";
let color:string [] = ["Red","Blue","White","Black","Brown","Yellow","Indigo","Violet","Orange","Purple","Golden","Silver","Grey","Pink","Green","Sea Green","Parrot Green","Sky Blue","Musturd","Foan"]
let name = await inquirer.prompt(
    {
        message:"Please enter your name",
        type:"input",
        name:"username",
    }
)
let length1 = color.length
let inputLength = name.username.length
let rdmcolor = Math.floor(Math.random()*length1)
let favcolor = color[rdmcolor]
console.log(favcolor)
