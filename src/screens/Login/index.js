import { View, Text, TextInput, TouchableOpacity, Image } from 'react-native';
import { styles } from './styles';

export function Login({ navigation }) {
  function handleAuthenticate() {
    console.log('Autorização do usuário');
  }

  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <View style={styles.imgContent}>
          <Image style={styles.image} resizeMode="contain" source={require("../../../assets/logo_1.png")} />
        </View>
        <View style={styles.formContent}>
          <TextInput style={styles.input} placeholder='Email' />
          <TextInput style={styles.input} placeholder='Senha' />
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
