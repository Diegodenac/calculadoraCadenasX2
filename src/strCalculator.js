function stringCalculator(string) {
  let string_to_a_number = Number(string);
  if(!isNaN(string_to_a_number)) return string_to_a_number;
  const elements_split_by_comas = string.split(',');
  let sum = 0;
  for (const element_comas of elements_split_by_comas){
    if(isNaN(Number(element_comas))){
      const elements_split_by_hyphens = element_comas.split('-');
      for (const element_hyphens of elements_split_by_hyphens){
        sum+= Number(element_hyphens);
      }
    }
    else sum += Number(element_comas);
  }
  return sum;
}

export default stringCalculator;
