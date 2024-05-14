function stringCalculator(string) {
  let string_to_a_number = Number(string);
  if(isNaN(string_to_a_number)) {
    let sum = 0;
    let arrayOfNumbers = splitNumbersOfString(string);
    for (const number of arrayOfNumbers)
      sum+= number;
    return sum;
  }
  else return string_to_a_number;
}

function splitNumbersOfString(string){
  const elements_split_by_comas = string.split(',');
  let arrayOfNumbers = [];
  for (const element_comas of elements_split_by_comas){
    if(isNaN(Number(element_comas))){
      const elements_split_by_hyphens = element_comas.split('-');
      for (const element_hyphens of elements_split_by_hyphens){
        arrayOfNumbers.push(Number(element_hyphens));
      }
    }
    else arrayOfNumbers.push(Number(element_comas));
  }
  return arrayOfNumbers;
}

export default stringCalculator;
