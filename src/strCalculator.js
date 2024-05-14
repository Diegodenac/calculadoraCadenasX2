function stringCalculator(string) {
  let string_to_a_number = Number(string);
  if(!isNaN(string_to_a_number)) return string_to_a_number;
  let numbers_in_string = string.split(',');
  let sum = 0;
  for (const number of numbers_in_string){
    sum += Number(number);
  }
  return sum;
}

export default stringCalculator;
