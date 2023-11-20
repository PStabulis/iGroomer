import { StatusBar } from 'expo-status-bar';
import { Text, View, Image, TouchableOpacity} from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons'; 
import { styles } from './styles';

export function Dashboard() {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Image style={styles.image} source={require("../../../assets/Group3.png")} />
      </View>
      <View style={styles.title1View}>
       <Text style={styles.title1}>Dashboard</Text>
      </View>
      <View style={styles.calendarArea}> 
      <View style={styles.calenderAreaTitle}>
        <Text style={styles.calenderAreaTitleText}>Agendamentos do dia</Text>
        <MaterialCommunityIcons name='calendar-month' size= {40} color="#25A280"/>
        </View>
        <Text style={styles.nCliente}>Bruna Oliveira</Text>
        <Text style={styles.hCliente}>08:00 hrs</Text>
        <Text style={styles.nCliente}>Eduarda Lopes</Text>
        <Text style={styles.hCliente}>09:00 hrs</Text>
        <Text style={styles.nCliente}>Matheus Silva</Text>
        <Text style={styles.hCliente}>10:30 hrs</Text>
      </View>
      <View style={styles.title2View}>
        <Text style={styles.title2}>Financeiro</Text>
      </View>
      <View style={styles.balanceArea}>
        <View style={styles.balanceAreaLeft}>
            <Text style={styles.balanceAreaTitle}>Saldo</Text>
            <TouchableOpacity style={styles.btn}>
              <Text style={styles.btnText}>Transferir</Text>
            </TouchableOpacity>
        </View>
        <View style={styles.balanceAreaRight}>
            <Text style={styles.balanceAreaRightText}> R$ 1.142,12</Text>
        </View>
      </View>
      <View style={styles.walletAreaView}>
        <View style={styles.walletAreaTitleView}>
        <MaterialCommunityIcons name='credit-card-multiple' size= {40} color="#25A280"/>
        <Text style={styles.walletAreaTitle}>Carteira Virtual</Text>
        <MaterialCommunityIcons name='circle-edit-outline' size= {30} color="#25A280"/>
        </View>
        <View style={styles.walletAreaViewSides}>
            <View style={styles.walletAreaViewLeft}>
                <Text style={styles.subTWallet}>Informações Bancárias</Text>
                <Text>Agência: 1234</Text>
                <Text>Conta: 123456-7</Text>
                <Text>Beneficiário: Bruno Mendes</Text>
            </View>
            <View style={styles.walletAreaViewRight}>
                <Text style={styles.subTWallet}>Área Pix</Text>
                <Text>Chave 1: 123.456.789-0</Text>
                <Text>Chave 2: (00) 9 1234-5678</Text>
                <Text>Chave 3: brunomendes @outlook.com</Text>
            </View>
        </View>
      </View>
      <StatusBar style="auto" />
    </View>
    
  );
}

