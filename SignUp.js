import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, TextInput, TouchableOpacity } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <View style={{flex: 1, width: 350,}}>
        <Image style={styles.image} source={require("./assets/Group2.png")} />
      </View>
      <View style={{flex: 5, width: 350, backgroundColor:'#fff', borderBottomLeftRadius: 15, borderBottomRightRadius: 15}}>
        <TextInput style={styles.input1} placeholder='NOME'/>
        <TextInput style={styles.input} placeholder='E-MAIL'/>
        <TextInput style={styles.input} placeholder='SENHA' secureTextEntry/>
        <TextInput style={styles.input} placeholder='CPF'/>
        <TextInput style={styles.input} placeholder='DATA DE NASCIMENTO'/>
        <TextInput style={styles.input} placeholder='TELEFONE'/>
        <TouchableOpacity style={styles.button}>
          <Text style={{color: '#fff'}}>Criar Conta</Text>
        </TouchableOpacity>
      </View>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 60,
    paddingBottom:60,
    backgroundColor: '#D2E3E0',
    alignItems: 'center',
    justifyContent: 'center',
  },

  image:{
    width: '100%',
    height: '100%',
    borderTopLeftRadius: 15,
    borderTopRightRadius: 15
  },

  input: {
    paddingVertical: 15,
    paddingHorizontal: 15,
    marginLeft: 30,
    marginRight: 30,
    backgroundColor: '#D9D9D9',
    marginTop: 15,
    borderRadius: 15,
  },

  input1: {
    paddingVertical: 15,
    paddingHorizontal: 15,
    marginLeft: 30,
    marginRight: 30,
    backgroundColor: '#D9D9D9',
    marginTop: 40,
    borderRadius: 15,
  },

  button: {
    backgroundColor: '#32BCA3',
    marginLeft: 100,
    marginRight: 100,
    paddingVertical: 10,
    borderRadius: 20,
    marginTop: 30,
    alignItems: 'center',
  }

});
