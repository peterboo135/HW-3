var counter = 0

 while(counter<=2){

  const passWord = prompt(`Enter the password: `)
  if(passWord === "pass"){
    alert(`You entered the correct password after ${counter} attempt.`)
    
    counter=4
  } else {
    counter++
    alert(`Incorrect` + ` after ${counter} attempts `)
    

    if(counter===3){
      alert(`Your account is locked! You failed to enter the password ${counter} times.`)
     }

  }
 }

