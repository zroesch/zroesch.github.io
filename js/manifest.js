const dateInput = document.getElementById('dateInput');
dateInput.addEventListener('change', event => {
  const inputDate = new Date(dateInput.value);
  // Need to add 1 to the date for some reason
  inputDate.setDate(inputDate.getDate() + 1);
  // Set variables for day, month, and year
  var day = inputDate.getDate();
  var month = inputDate.getMonth();
  var year = inputDate.getFullYear();
  console.log(day.toString() + month.toString() + year.toString());})