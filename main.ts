
import inquirer from "inquirer";

const answer = await inquirer.prompt([
  { message: "Enter firstnumber ", type: "number", name: "firstnumber" },
  { message: "enter secondnumber", type: "number", name: "secondnumber" },
  {
    message: "seclect one of the opreators to perform action",
    type: "list",
    name: "opreators",
    choices: ["addition" , "subtraction", "multiplation", "division"],
  },
])

if (answer.opreators === "addition"){
  console.log(answer.firstnumber + answer.secondnumber);
  
}else if (answer.opreators === "subtraction") {
  console.log(answer.firstnumber - answer.secondnumber);
}else if (answer.opreators === "multiplation") {
  console.log(answer.firstnumber * answer.secondnumber);
}else if (answer.opreators === "division") {
  console.log(answer.firstnumber / answer.secondnumber);
}else{
  console.log("pleace select valid opreator");
  
}
