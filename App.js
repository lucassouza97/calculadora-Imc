import React, { Component } from 'react'
import { Text, View, TextInput, StyleSheet, TouchableOpacity, Button } from 'react-native'

export default class App extends Component {

    constructor(props){
        super(props);
        this.state={altura: 0, peso: 0, resultado: 0, resultadoText: ''}
        this.calculaImc = this.calculaImc.bind(this);
    }

    calculaImc(){
     let s = this.state;
     
     s.resultado = Math.floor((s.peso / (s.altura * s.altura)));

     if(s.resultado < 17){
        s.resultadoText = 'Você está muito abaixo do peso';
     } else if(s.resultado >= 17 && s.resultado <= 18.49){
         s.resultadoText = 'Você está abaixo do peso';
     } else if(s.resultado >= 18.5 && s.resultado <=24.99){
         s.resultadoText = 'Você está em seu peso ideal';
     } else if(s.resultado >= 25 && s.resultado <=29.99){
        s.resultadoText = 'Você está acima do peso';
    }  else if(s.resultado >= 30 && s.resultado <=34.99){
        s.resultadoText = 'Você está no nível de Obesidade I' 
    }  else if(s.resultado >= 35 && s.resultado <=39.99){
        s.resultadoText = 'Você está no nível de Obesidade II(Severa)' 
    }  else if(s.resultado >= 40){
        s.resultadoText = 'Você está no nível de Obesidade III(Mórbida)' 
    };
    
        this.setState(s);

    }
    render() {
        return (
            <View style={styles.body}>
            <View>
                <Text> cálculo imc </Text>

                <View>
                    <Text> Digite seu peso:</Text>
                <TextInput style ={styles.input} placeholder='Peso' placeholderTextColor='black' 
                keyboardType="numeric" onChangeText={peso => this.setState({peso})} value={this.state.peso}/>
                <TextInput style ={styles.input} placeholder='Altura' placeholderTextColor='black'  
                keyboardType="numeric" onChangeText={altura => this.setState({altura})} value={this.state.altura}/>
                </View>


            </View>

                <View>

                    <Button title='Calcule aqui' onPress={this.calculaImc}/>
                    
                <Text>Resultado: Seu imc é: {this.state.resultado} - {this.state.resultadoText} </Text>
                </View>
                </View>
        )
    }
}

const styles = StyleSheet.create ({
    body:{
    flex:1,
    flexDirection: 'column',
    backgroundColor:  '#ff6348',
    },

    viewInputText:{
    flexDirection: 'row'
    },

    input:{
        margin: 15,
        height: 40,
        width: 250,
        borderColor: 'black',
        borderWidth: 1,
        backgroundColor: 'white',
        borderRadius: 6
}
})
    

