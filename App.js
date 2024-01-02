import React, {useState} from 'react';
import { StyleSheet, Text, View, Button, TextInput } from 'react-native';

export default function App() {

  const [numbersDisplay, setNumbersDisplay] = useState('use numbers true');
  const [symbolsDisplay, setSymbolsDisplay] = useState('use symbols true');
  
  const charArray = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l','n', 'o',
'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
  const numberArray = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0'];
  const symbolArray = ['!', '@', '#', '$', '%', '^', '&', '*', '(', ')', ',', '.', '[', ']', '{', '}'];

  const [useSymbols, setUseSymbols] = useState(true);

  const [useNumbers, setUseNumbers] = useState(true);

  const [length, setLength] = useState('14');

  const [text, setText] = useState('')

  const mathRandom = (thisSeed) => {
    const num = Math.floor(Math.random() * thisSeed)
    return num;
  }

  const generateRandom = () => {
     
     
     let seed;
     if(useSymbols && useNumbers){
      seed = 3;
     } else if(useSymbols && useNumbers === false){
      seed = 2;
     } else if (useSymbols === false && useNumbers){
      seed = 2;
     } 
     else if (useSymbols === false && useNumbers === false){
      seed = 1;
     }
    //for loop with length
     /*random num between 0-2 <-- depends on useSymbols && useNumbers */
    let randomInt; let password = "";
     for(let w = 0; w< length; w++){
      if (seed > 1){
        randomInt = mathRandom(seed);
       } else if (seed === 1){ randomInt = 0}
        //0 -> charArray
          //random number between 0 and 1
            //0 lowercase
            //1 uppercase
        switch(randomInt){
          case 0:
            //console.log('0')
            const len0 = charArray.length;
            const index0 = mathRandom(len0)
            const type = mathRandom(2);
            if(type === 1) {
              password += charArray[index0].toUpperCase()
            } else {
              password += charArray[index0];
            }

            break;
          case 1:
            //console.log('1')
            const len1 = numberArray.length;
            const index1 = mathRandom(len1)
            password += numberArray[index1]
            break;
          case 2:
            //console.log('2')
            const len2 = symbolArray.length;
            const index2 = mathRandom(len2)
            password += symbolArray[index2]
            break;
        }
        //1 -> numberArray
        //2 -> symbolArray
     }

     

    setText(password);

  };


  const handleNumbers = () => {
    if(useNumbers === true) {
      setUseNumbers(false)
      setNumbersDisplay('use numbers false')
    }
    else if (useNumbers === false) {
      setUseNumbers(true)
      setNumbersDisplay('use numbers true')
    }
  }


  const handleSymbols = () => {
    if(useSymbols === true) {
      setUseSymbols(false)
      setSymbolsDisplay('use symbols false')
    }
    else if (useSymbols === false) {
      setUseSymbols(true)
      setSymbolsDisplay('use symbols true')
    }
  }



  const handleSubtraction = () => {
    let number = parseInt(length);
    number--;
    const string = number.toString()
    setLength(string)
    console.log(number)
  }

  const handleAddition = () => {
    let number = parseInt(length);
    number++;
    const string = number.toString()
    setLength(string)
    console.log(number)
  }


  return <View style={styles.container}>
  <Text style={styles.text}>{text}</Text>
  <TextInput style={styles.input} value={text} onChangeText={(text) => setText(text)} />
  <View>
    <Text>Length {length}</Text>
    <Button 
    title="-"
    onPress={handleSubtraction}
    ></Button>
    <Button 
    title='+'
    onPress={handleAddition}
    ></Button>
  </View>
  <Button
  title={numbersDisplay}
  onPress={handleNumbers}
  color={useNumbers? "blue" : "red"}
  >
  </Button>
  <Button 
  onPress={handleSymbols} 
  title={symbolsDisplay}
  color={useSymbols ? "blue" : "red"}
  >

  </Button>
  <Button
  onPress={generateRandom}
  title="create"
  color="black"
  />
  </View>
}

const styles = StyleSheet.create({
  custom: {
    flex: 1,
  },
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  input:{
    height: 40, 
    borderColor: 'gray', 
    width:200,
    borderWidth: 1,
    justifyContent: 'center',
  },
  text:{
    fontSize:35,
    color:'red'
  }
})