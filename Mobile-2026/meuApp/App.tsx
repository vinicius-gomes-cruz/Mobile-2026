import React, {Component} from "react";
import { View, Text, Image } from "react-native";
import Mensagem from "./src/components/Mensagem";

interface Imagemprops{
  largura: number;
  altura: number;
  nome2 : string;
}

class App extends Component {
      render() {
         let nome = 'IFPR';
         return (
             <View>
                 <Text>Olá Mundo!</Text>
                 <Text>Dispositivos Móveis!</Text>
                 
                 <Text style={{color: 'red', fontSize: 25, margin: 15}}>
                     Meu primeiro App!
                 </Text>
 
                 <Imagem largura={300} altura={300} nome2={"Teste Props Logo React"}/>

                 <Mensagem />
 
                 <Text style={{fontSize: 30 }}>{nome}</Text>
 
             </View>
         );
     }
 }
 
 class Imagem extends Component<Imagemprops> {
     render() {
         let img = 'https://reactnative.dev/img/tiny_logo.png';
 
         return(
           <View>
             <Image
              source={{uri: img}}
              style={{width: this.props.largura, height: this.props.altura}}
             />
             <Text>{this.props.nome2}</Text>
         </View>
         )
     }
 }
 
export default App;