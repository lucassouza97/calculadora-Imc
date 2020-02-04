import React, { Component } from 'react'
import { Text, View, Button, StyleSheet, TextInput, TouchableOpacity, Image, Alert } from 'react-native'



export default class App extends Component {

  constructor(props){
    super(props);
    this.state={altura:0, peso:0, resultado:0, resultText:""}
      this.calcularImc = this.calcularImc.bind(this);

    }

    calcularImc() {
      let imc = this.state.peso / ((this.state.altura) * (this.state.altura))
      let s = this.state

      s.resultado = imc; 

      if(s.resultado < 18,5){
        s.resultText = 'Magreza'
      } else if (s.resultado > 18,5 < 24,9){
        s.resultText = 'Normal'
      } else if (s.resultado > 25 < 29,9){
        s.resultText = 'Sobrepeso'
      } else if(s.resultado > 30 <39,9){
        s.resultText = 'Obesidade'
      } else if(s.resultado > 40){
        s.resultText = 'Obesidade Grave'

      }
       this.setState(s)

    }
  


  render() {
    return (
      <View style={styles.bodyColor}>
      <Text style={styles.textTitle}> Calculadora de IMC </Text>
      <View style={styles.body}>
        <Text style={styles.textStyle}> Insira seus dados abaixo:</Text>

        <View > 


          <View style={styles.testeView}>
          
        <Image source={require('./src/images/altura.png')} style={styles.imageStyle} />
        <Text style={styles.textInputStyle}> Altura:   </Text>
        <TextInput style={styles.inputStyle}  autoCapitalize="none" placeholder='Altura' placeholderTextColor='white' keyboardType='numeric' onChangeText={(altura)=> this.setState({altura})} value={this.state.altura}/> 
         </View>


         <View style={styles.testeView}>
        <Image source={require('./src/images/balanca.png')}  autoCapitalize="none" style={styles.imageStyle} keyboardType='numeric'onChangeText={(peso)=> this.setState({peso})} value={this.state.peso} />
        <Text style={styles.textInputStyle}> Peso: </Text>
        <TextInput style={styles.inputStyle} placeholder='Peso' placeholderTextColor='white'/>
        </View>

      
        </View>


        <View style={styles.container}>
        <TouchableOpacity style = {styles.buttonStyle} onPress={this.calcularImc}>
          <Text>Calcular</Text>
          </TouchableOpacity> 
        </View>

        <Text style={styles.resultStyle}> {this.state.resultado.toFixed(2)}</Text>
        <Text> {this.state.resultText} </Text>

      </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  body:{
    backgroundColor:  '#ff6348',
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1
   
  },
  inputStyle:{
    margin: 15,
    height: 40,
    width: 250,
    borderColor: 'black',
    borderWidth: 1,
    backgroundColor: 'white',
    borderRadius: 6
  },
  buttonStyle:{
    alignItems: 'center',
    backgroundColor: '#DDDDDD',
    padding: 10
  },
  textStyle:{
    textAlign: 'center',
    fontSize: 25,
    color: 'white'
  },
  textTitle:{
    textAlign: 'center',
    fontSize: 20,
    color:'white',
    padding: 10,
  },
  bodyColor:{
    backgroundColor:  '#ff6348',
    flex:1
  },
  container:{
    justifyContent: 'center',
    paddingHorizontal: 130, 
  },
  textInputStyle:{
    fontSize: 15,
    color: 'white'
  },  
  imageStyle:{
    width: 40,
    height: 40
  },
  testeView:{
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    paddingHorizontal: 15
  },

  resultStyle:{
    fontSize: 20,
    fontStyle: 'italic',
    paddingTop: 90
  }
})
