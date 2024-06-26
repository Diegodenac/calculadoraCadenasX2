function addNumbersIn(inputString) {
  const [charSplit, string] = splitCharComandoAnd(inputString);
  let arrayOfNumbers = getNumbersIn(string, charSplit);
  let theSum = addArrayWithout1000(arrayOfNumbers);
  return theSum;
}

function addArrayWithout1000(arrayOfNumbers){
  let theSum = 0;
  for (const number of arrayOfNumbers)
    theSum+= number>1000 ? 0:number;
  return theSum;
}

function splitCharComandoAnd(string){
  let charSplit = false;
  if(isThereAComandoIn(string)){
    const [comando_complete, newString] = getComandoAndString(string);
    string = newString;
    charSplit = getCharOfComando(comando_complete);
  }
  return [charSplit, string];
}

function getNumbersIn(string, charSplit){
  let numbersInString = Number(string);
  let arrayOfNumbers = [];
  if(isNaN(numbersInString)){  
    arrayOfNumbers = splitNumbersOfString(string, charSplit);
  } else arrayOfNumbers.push(numbersInString);
  return arrayOfNumbers;
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
