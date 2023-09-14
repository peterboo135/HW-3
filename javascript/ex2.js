const name = prompt("What is your name?")
const integer = prompt("How many units have you completed?")




if (typeof name === `string`){
  alert(`Hello ${name}`);

} else{
  alert("Invalid input")
}

if (integer>=0 && integer<=30){
    alert("Your grade standing is Freshman")

}else if(integer>30 && integer<=60){
  alert("Your grade standing is Sophomore")
}else if(integer>60 && integer<=90){
  alert("Your grade standing is Junior")
}else if(integer>91){
  alert("Your grade standing is Senior")
}


