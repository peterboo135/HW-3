const dayEntered = prompt("Enter Day of the Week:")
let newday


if( (dayEntered.length) <= 3){
  alert(`You entered ${dayEntered}`)
}else{
  alert(`Invalid Input`)
}

switch(dayEntered){
  case "mon":
    alert(`The following day is: tue`)
    break;
  case "tue":
    alert(`The following day is: wed`)
    break;
  case "wed":
    alert(`The following day is: thu`)
    break;
  case "thu":
    alert(`The following day is: fri`)
    break;
  case "fri":
  alert(`The following day is: sat `)
  break;
  case "sat":
    alert(`The following day is: sun `)
}

