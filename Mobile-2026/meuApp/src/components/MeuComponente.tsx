import React, { Component } from 'react';
import { View, Text } from 'react-native';

export class MeuComponente extends Component {
    render() {
        return (
            <View>
            <Text>Olá Mundo!</Text>
            <Text>Dispositivos Móveis!</Text>
            
            <Text style={{color: 'red', fontSize: 25, margin: 15}}>
                Meu primeiro App!
            </Text>
            </View>
        );
    }
}

export default MeuComponente;