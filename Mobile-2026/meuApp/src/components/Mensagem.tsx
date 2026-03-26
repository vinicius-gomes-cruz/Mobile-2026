import React, {Component} from "react";
import {Text} from "react-native";

class Mensagem extends Component {
    render(){
      return(
        <Text style={{
            fontSize: 22,
            color: 'blue', 
            margin: 10}}>
        Mensagem</Text>
      )
    }
}

export default Mensagem;