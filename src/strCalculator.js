function stringCalculator(string) {
  let string_to_a_number = Number(string);
  if(isNaN(string_to_a_number)) {
    let comando = false;
    if(string[0]=="/"){
      console.log(string[0] == "/" && string[1] == "/");
      let comandoAndString = string.split(" ");
      comando = comandoAndString[0][3];
      string = comandoAndString[1];
    }
    let sum = 0;
    let arrayOfNumbers = splitNumbersOfString(string, comando);
    for (const number of arrayOfNumbers)
      sum+= number;
    return sum;
  }
  else return string_to_a_number;
}

function splitNumbersOfString(string, comando){
  const elements_split_by_comas = string.split(',');
  let arrayOfNumbers = [];
  for (const element_comas of elements_split_by_comas){
    if(isNaN(Number(element_comas))){
      const elements_split_by_hyphens = element_comas.split('-');
      for (const element_hyphens of elements_split_by_hyphens){
        if(isNaN(Number(element_hyphens) && comando)){
          const elements_split_by_comando = element_hyphens.split(comando);
          for (const element_comando of elements_split_by_comando)
            arrayOfNumbers.push(Number(element_comando));    
        }
        else arrayOfNumbers.push(Number(element_hyphens));
      }
    }
    else arrayOfNumbers.push(Number(element_comas));
  }
  return arrayOfNumbers;
}

export default stringCalculator;
