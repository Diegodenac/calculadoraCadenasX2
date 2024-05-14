function stringCalculator(string) {
  let string_to_a_number = Number(string);
  if(!isNaN(string_to_a_number)) return string_to_a_number;
  let numbers_in_string = string.split(',');
  return Number(numbers_in_string[0])+Number(numbers_in_string[1]);
}

export default stringCalculator;
