import { StatusBar } from 'expo-status-bar';
import { Text, View, Image, TextInput, TouchableOpacity } from 'react-native';
import { styles } from './styles';

export function SignUp() {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Image style={styles.image} source={require("../../../assets/logo_2.png")} />
      </View>
      <View style={styles.inputArea}>
        <TextInput style={styles.input1} placeholder='NOME'/>
        <TextInput style={styles.input} placeholder='E-MAIL'/>
        <TextInput style={styles.input} placeholder='SENHA' secureTextEntry/>
        <TextInput style={styles.input} placeholder='CPF'/>
        <TextInput style={styles.input} placeholder='DATA DE NASCIMENTO'/>
        <TextInput style={styles.input} placeholder='TELEFONE'/>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Criar Conta</Text>
        </TouchableOpacity>
      </View>
      <StatusBar style="auto" />
    </View>
  );
}

