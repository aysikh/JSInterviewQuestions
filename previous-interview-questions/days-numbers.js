
function whatDay(day, number){
  let days = ["Mon", "Tues", "Weds", "Thurs", "Fri", "Sat", "Sun"]
  // get the index number from each day 
  // add number to day 
  // module % 7 
  // return the day 
  let daysIndex = days.indexOf(day)
  // console.log(daysIndex) 
  let newDayIndex = daysIndex + number % 7 
  // console.log(newDayIndex) 
  return days[newDayIndex]
}

console.log(whatDay("Weds", 1))
