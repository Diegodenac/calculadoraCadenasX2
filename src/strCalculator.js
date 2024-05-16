function addNumbersIn(string) {
  let string_to_a_number = Number(string);
  if(isNaN(string_to_a_number)) {
    let comando = false;
    let sum = 0;
    if(thereComando(string)){
      const [comando_complete, newString] = getComandoAndString(string);
      string = newString;
      comando = getCharOfComando(comando_complete);
    }
    let arrayOfNumbers = splitNumbersOfString(string, comando);
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

export default addNumbersIn;
