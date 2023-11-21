import { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { Text, View, Image, TextInput, TouchableOpacity } from 'react-native';
import { styles } from './styles';
import api from '../../api/api';


export function SignUp({ navigation }) {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [cpf, setCpf] = useState('');
  const [birthday, setBirthday] = useState('');
  const [contact, setContact] = useState('');

  function handleCreateAccount() {
      api.post('/users/create', {
        name,
        email,
        password,
        cpf,
        birthday,
        contact
      }).then(res => {
        if (res.data) {
          navigation.navigate('Login') 
        } else {
          console.log('Não foi possível criar o usuário');
        }
      }).catch((err) => {
        console.log(err);
      })
  }

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Image style={styles.image} source={require("../../../assets/logo_2.png")} />
      </View>
      <View style={styles.inputArea}>
        <TextInput style={styles.input1} placeholder='Nome'value={name} onChangeText={setName}/>
        <TextInput style={styles.input} placeholder='E-mail'value={email} onChangeText={setEmail}/>
        <TextInput style={styles.input} placeholder='Senha' secureTextEntryvalue={password} onChangeText={setPassword}/>
        <TextInput style={styles.input} placeholder='CPF'value={cpf} onChangeText={setCpf}/>
        <TextInput style={styles.input} placeholder='Data de Nascimento'value={birthday} onChangeText={setBirthday}/>
        <TextInput style={styles.input} placeholder='Telefone'value={contact} onChangeText={setContact}/>
        <TouchableOpacity style={styles.button} onPress={handleCreateAccount}>
          <Text style={styles.buttonText}>Criar Conta</Text>
        </TouchableOpacity>
      </View>
      <StatusBar style="auto" />
    </View>
  );
}

