function addNumbersIn(string) {
  let string_to_a_number = Number(string);
  if(isNaN(string_to_a_number)) {
    let charSplit = false;
    let sum = 0;
    if(isThereAComandoIn(string)){
      const [comando_complete, newString] = getComandoAndString(string);
      string = newString;
      charSplit = getCharOfComando(comando_complete);
    }
    let arrayOfNumbers = splitNumbersOfString(string, charSplit);
    for (const number of arrayOfNumbers)
      sum+= number>1000 ? 0:number;
    return sum;
  }
  else return string_to_a_number;
}

function getComandoAndString(string){
  const comandoAndString = string.split(" ");
  let comando_complete = comandoAndString[0];
  string = comandoAndString[1];
  return [comando_complete, string];
}

function getCharOfComando(comando_complete){
  let charSplit = comando_complete[3];
  return charSplit;
}

function isThereAComandoIn(string){
  return string[0] == "/" && string[1] == "/"
};

function splitNumbersOfString(string, charSplit){
  let arrayOfNumbers = [];
  const elements_split = string.split(/,|-/);
  for (const element of elements_split){
    if(isNaN(Number(element && charSplit))){
      const elements_split_by_comando = element.split(charSplit);
          for (const element_comando of elements_split_by_comando)
            arrayOfNumbers.push(Number(element_comando));
      } 
    else arrayOfNumbers.push(Number(element));
    }
  return arrayOfNumbers;
}

export default addNumbersIn;
