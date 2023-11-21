import { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, Image } from 'react-native';
import { styles } from './styles';
import { encode } from 'base-64';
import api from '../../api/api';

export function Login({ navigation }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  function handleAuthenticate() {
    let passEncript = encode(password);

    console.log(email, passEncript);

    api.post('/users/auth' , { email, password: passEncript})
      .then(res => {
        console.log('response', res.data);
      })
      .catch((error) => {
        console.log(error);
      })
  }

  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <View style={styles.imgContent}>
          <Image style={styles.image} resizeMode="contain" source={require("../../../assets/logo_1.png")} />
        </View>
        <View style={styles.formContent}>
          <TextInput 
            style={styles.input} 
            placeholder='Email'
            keyboardType='email-address'
            autoCapitalize='none'
            value={email}
            onChangeText={setEmail}
          />
          <TextInput 
            style={styles.input} 
            placeholder='Senha' 
            secureTextEntry
            value={password}
            onChangeText={setPassword}
          />
          <View style={styles.btnContent}>
            <TouchableOpacity style={styles.btn} onPress={handleAuthenticate}>
              <Text style={styles.btnText}>Entrar como Cliente</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.btn} onPress={handleAuthenticate}>
              <Text style={styles.btnText}>Entrar como Prestador</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.btnCreateAccount} onPress={() => navigation.navigate('SignUp')}>
              <Text style={styles.btnTextAccount}>Criar Conta</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  )
}
