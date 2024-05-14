function stringCalculator(string) {
  if(Number(string) || Number(string)===0) return Number(string);
  let numbers = string.split(',');
  return Number(numbers[0])+Number(numbers[1]);
}

export default stringCalculator;
