import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, TextInput, TouchableOpacity, KeyboardAvoidingView } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <View style={{flex: 1, width: 350,}}>
        <Image style={styles.image} source={require("./assets/Group1.png")} />
      </View>
      <View style={{flex: 2, backgroundColor:'#fff', width: 350, borderBottomLeftRadius: 15, borderBottomRightRadius: 15}}>
        <TextInput style={styles.input1} placeholder='E-MAIL'/>
        <TextInput style={styles.input} placeholder='SENHA' secureTextEntry/>
        <TouchableOpacity style={styles.button}>
          <Text style={{color: '#fff'}}>Entrar</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button2}>
          <Text style={{color: '#32BCA3'}}>Criar Conta</Text>
        </TouchableOpacity>
      </View>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop:100,
    paddingBottom: 100,
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
    marginTop: 20,
    borderRadius: 15,
  },

  input1: {
    paddingVertical: 15,
    paddingHorizontal: 15,
    marginLeft: 30,
    marginRight: 30,
    backgroundColor: '#D9D9D9',
    marginTop: 50,
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
  },

  button2: {
    marginTop: 20,
    alignItems: 'center',
  }

});
