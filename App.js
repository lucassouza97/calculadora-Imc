import React, { Component } from 'react'
import { Text, View, TextInput, StyleSheet, TouchableOpacity, Button, Image, Linking, Alert } from 'react-native'

export default class App extends Component {

    constructor(props){
        super(props);
        this.state = { 
            altura: '', 
            peso: '', 
            resultado: '', 
            resultadoText: '',
            showResult: false,
        }
       this.calculaImc = this.calculaImc.bind(this);
    }

    calculaImc(){
        var x; //Variavel global
        let y; //Variavel de escopo
        const altura = parseFloat(this.state.altura)

        this.state.showResult = true;
        this.state.resultado = Math.floor((parseFloat(this.state.peso) / (altura * altura)));
        
        // futuras implementações
        // this.setState ({resultado : Math.floor((parseFloat(this.state.peso) / (altura * altura)))}

        
        //  switch(this.state.resultado){
        //      case this.state.resultado < 17: 
        //      this.setState({ resultadoText: 'Você está muito abaixo do peso' })
        //      break;

        //      case this.state.resultado >= 17 && this.state.resultado <= 18.49: 
        //      this.setState({ resultadoText: 'Você está abaixo do peso' }) 
        //      break;

        //      case this.state.resultado >= 25 && this.state.resultado <=29.99: 
        //      this.setState({ resultadoText: 'Você está em seu peso ideal' })  
        //      break;

        //      case this.state.resultado >= 30 && this.state.resultado <=34.99: 
        //      this.setState({ resultadoText: 'Você está no nível de Obesidade I' })  
        //      break;

        //      case this.state.resultado >= 35 && this.state.resultado <=39.99: 
        //      this.setState({ resultadoText: 'Você está no nível de Obesidade II(Severa)'})
        //      break;

        //      case this.state.resultado >= 40: 
        //      this.setState({ resultadoText: 'Você está no nível de Obesidade III(Mórbida)' }) 
        //      break;

        //      default:
        //          alert("i dont know such values")

        //  }}

        if(this.state.resultado < 17){
            this.setState({ resultadoText: 'Você está muito abaixo do peso' })
        } else if(this.state.resultado >= 17 && this.state.resultado <= 18.49){
            this.setState({ resultadoText: 'Você está abaixo do peso' }) 
        } else if(this.state.resultado >= 18.5 && this.state.resultado <=24.99){
            this.setState({ resultadoText: 'Você está em seu peso ideal' }) 
        } else if(this.state.resultado >= 25 && this.state.resultado <=29.99){
            this.setState({ resultadoText: 'Você está acima do peso' }) 
        }  else if(this.state.resultado >= 30 && this.state.resultado <=34.99){
            this.setState({ resultadoText: 'Você está no nível de Obesidade I' }) 
        }  else if(this.state.resultado >= 35 && this.state.resultado <=39.99){
            this.setState({ resultadoText: 'Você está no nível de Obesidade II(Severa)'  }) 
        }  else if(this.state.resultado >= 40){
            this.setState({ resultadoText: 'Você está no nível de Obesidade III(Mórbida)' }) 
        };
    }

    render() {
        return (
            <View style={styles.body}>
                <Image style={styles.logoStyle}source={require('./src/images/smartwatch.png')} />
                <Text style={styles.titleStyle}> cálculo imc </Text>
                <Text style={{color:'white', fontSize: 17, top: 20, right: 45}}> Digite seu peso:</Text>
                <View style={styles.viewInputText}>
                    <Image style={{width: 40, height: 40, }}source={require('./src/images/balanca.png')}/>
                    <TextInput 
                        style ={styles.input} 
                        placeholder="Peso (ex: 70.5)" 
                        placeholderTextColor='black' 
                        keyboardType={'numeric'} 
                        onChangeText={peso => this.setState({peso})} 
                        value={this.state.peso}
                    />
                </View>
                <Text style={{color:'white', fontSize: 17, top: 20, right: 43}}> Digite sua altura:</Text> 
                <View style={styles.viewInputText}>
                    <Image style={{width: 40, height: 40}} source={require('./src/images/altura.png')}/>
                    <TextInput 
                        style={styles.input} 
                        placeholder='Altura (ex: 1.80)' 
                        placeholderTextColor='black'  
                        keyboardType={'numeric'} 
                        onChangeText={altura => this.setState({altura})} 
                        value={this.state.altura}
                    />
                </View>

                <Button title='Calcule' onPress={this.calculaImc} />
                
                {this.state.showResult && <Text style={styles.resultStyle}>Seu IMC é: {this.state.resultado} - {this.state.resultadoText} </Text>}
                
                <View style={{top: 90, left: 185}}>
                    <TouchableOpacity onPress={() => {Linking.openURL('https://pt.wikipedia.org/wiki/%C3%8Dndice_de_massa_corporal')}}> 
                        <Image  style={styles.imageInfo} source={require('./src/images/info.png')}/>
                    </TouchableOpacity>
                </View>
            </View>

        )
    }
}

const styles = StyleSheet.create({
    body: {
        flex:1,
        flexDirection: 'column',
        backgroundColor:  '#ff6348',
        alignItems: 'center',
        justifyContent: 'center',
    },
    viewInputText: {
        flexDirection: 'row',
        paddingTop: 10,
        alignItems: 'center',
        justifyContent: 'center'
    },
    input: {
        margin: 15,
        height: 40,
        width: 250,
        borderColor: 'black',
        borderWidth: 1,
        backgroundColor: 'white',
        borderRadius: 6
    },
    logoStyle: {
        width: 150,
        height: 150,
        alignItems: 'center',
        justifyContent: 'center',     
    },
    titleStyle: {
        fontSize: 20,
        color: 'white'
    },
    resultStyle: {
        fontSize: 20,
        color: 'white',
    },
    imageInfo: {
        width: 38,
        height: 40,
    }
})

//Desenvolvido por Lucas Souza da Silva / Student Developer / Contato: l.lucassouza@hotmail.com
    

