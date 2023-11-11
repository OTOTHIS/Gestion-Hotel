

// eslint-disable-next-line react-refresh/only-export-components
export function formatedDate(date) {

  return String(date).replace("T" , " ")
}



export function DateNow() {
const currentDateAndTime = new Date();
const formattedDate = currentDateAndTime.toISOString().slice(0, 10);
const formattedTime = currentDateAndTime.toISOString().slice(11, 16);
  return [formattedDate, formattedTime]
}


