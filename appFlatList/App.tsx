import React, {Component} from "react";
import { StyleSheet, Text, View, FlatList, ListRenderItem} from "react-native";

type PessoaData = {
  nome: string;
  idade: number;
  email: string;
}

interface AppState {
  feed: PessoaData[]
}

class App extends Component<unknown, AppState>{
  constructor(props: unknown){
    super(props);
    this.state = {
      feed: [
        {nome: 'Matheus', idade: 50, email: 'matheus@gmail.com'},
        {nome: 'Jão', idade: 22, email: 'jao@gmail.com'},
        {nome: 'Henrique', idade: 39, email: 'henrique@gmail.com'},
        {nome: 'Ueslei', idade: 69, email: 'ueslei@gmail.com'},
        {nome: 'Uiliam', idade: 89, email: 'uiliam@gmail.com'},
      ]
    }
  }

  private renderItem: ListRenderItem<PessoaData> = ({item}) => <Pessoa data={item}/>

  render(){
    return(
      <View>
        <FlatList
          data={this.state.feed}
          renderItem={ ({item}) => <Pessoa data={item}/>}
        />
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container:{
    flex:1,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
  },
  pessoa:{
    marginBottom: 12,
  },
  areaPessoa:{
    backgroundColor: 'grey',
    height: 200,
    marginBottom: 15,
  },
  textoPessoa:{
    backgroundColor: 'white',
    fontSize: 20,
  }
});

interface PessoaProps {
  data: PessoaData;
}

class Pessoa extends Component<PessoaProps>{
  render(){
    const { data } = this.props;
    return (
      <View style={styles.areaPessoa}>
        <Text style={styles.textoPessoa}>{this.props.data.nome}</Text>
        <Text style={styles.textoPessoa}>{this.props.data.idade}</Text>
        <Text style={styles.textoPessoa}>{this.props.data.email}</Text>
      </View>
    )
  }
}

export default App;