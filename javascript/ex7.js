let hours = prompt(`Enter hour:`)
let min = prompt(`Enter min`)
let sec = prompt(`Enter sec`)

if(hours>=0 && hours<=23|| min>=0 && min<=59 || sec>=0 && sec<=59){
  alert(`Time input: ${hours}h ${min}m ${sec}s`)

} else {
  alert(`Invalid Input or Inputs.`)
}



if(sec=59){
  min++
  sec=0
  //alert(`Time input: ${hours}h ${min}m ${sec}s`)
}

if(min=59){
  hours++
  min=0
  sec=0
  alert(`Time input: ${hours}h ${min}m ${sec}s`)
}

if(hour>=23){
  hours=0
  min=0
  sec=0
  alert(`Time input: ${hours}h ${min}m ${sec}s`)
}



