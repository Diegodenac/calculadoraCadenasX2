function stringCalculator(string) {
  let string_to_a_number = Number(string);
  if(isNaN(string_to_a_number)) {
    let comando = false;
    let sum = 0;
    if(thereComando(string)){
      let comandoAndString = string.split(" ");
      let comando_complete = comandoAndString[0];
      comando = getCharOfComando(comando_complete);
      string = comandoAndString[1];
    }
    let arrayOfNumbers = splitNumbersOfString(string, comando);
    for (const number of arrayOfNumbers)
      sum+= number;
    return sum;
  }
  else return string_to_a_number;
}

function getCharOfComando(comando_complete){
  let comando = comando_complete[3];
  return comando;
}

function thereComando(string){
  return string[0] == "/" && string[1] == "/"
};

function splitNumbersOfString(string, comando){
  let arrayOfNumbers = [];
  const elements_split = string.split(/,|-/);
  for (const element of elements_split){
    if(isNaN(Number(element && comando))){
      const elements_split_by_comando = element.split(comando);
          for (const element_comando of elements_split_by_comando)
            arrayOfNumbers.push(Number(element_comando));
      } 
    else arrayOfNumbers.push(Number(element));
    }
  return arrayOfNumbers;
}

export default stringCalculator;
