import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      justifyContent: 'center',
      alignItems: 'flexStart'
    },
  
    header:{
      flex: 2, 
      width: '100%'
    },
  
    title1View:{
      flex: 1, 
      paddingLeft: 20, 
      paddingVertical:20,
    },
  
    title1:{
      fontSize: 32,
      fontWeight: '900'
    },
  
    image:{
      width: '100%',
      height: '100%',
    },
  
    calendarArea:{
      flex: 4, 
      backgroundColor: '#EEEEEE', 
      borderRadius: 15, 
      width: '90%', 
      marginLeft: 20
    },
  
    calenderAreaTitle:{
      flexDirection: 'row', 
      borderBottomWidth: 1, 
      justifyContent: 'space-between',
      alignItems: 'center',
      paddingRight: 15
    },
  
    calenderAreaTitleText:{
      fontSize: 24, 
      fontWeight: '900', 
      padding: 10
    },

    nCliente:{
        paddingLeft: 10, 
        paddingTop: 5,
        fontWeight:'bold'
      },
    
      hCliente:{
        paddingLeft: 10, 
        paddingBottom: 5, 
        borderBottomWidth:1, 
        borderBottomColor: '#FFFFFF',
        fontWeight:'bold'
      },
  
    title2View:{
      flex: 1, 
      marginLeft: 20, 
      paddingTop:30
    },
  
    title2:{
      fontSize: 26,
      fontWeight: '900'
    },

    balanceArea:{
        flex: 3, 
        backgroundColor: '#EEEEEE',
        marginLeft: 20, 
        borderRadius: 15, 
        width: '80%', 
        marginBottom: 20, 
        flexDirection: "row",
    },

    balanceAreaLeft:{
        flex:2
    },

    balanceAreaTitle:{
        fontSize: 32,
        fontWeight: 'bold', 
        paddingLeft: 20, 
        paddingTop: 17
    },

    btn: {
        marginTop: 35,
        marginLeft: 20,
        width: '75%',
        height: 32,
        backgroundColor: '#7EB0A7',
        borderRadius: 10,
        alignItems: 'center',
        justifyContent: 'center'
      },
      btnText: {
        color: 'black',
        fontSize: 14
      },
  
    balanceAreaRight:{
        flex:3, 
        justifyContent: 'center'
    },

    balanceAreaRightText:{
        fontSize:30, 
        fontWeight:'900', 
        color:'#A8A8A8'
    },
    
    walletAreaView:{
        flex: 4, 
        backgroundColor: '#EEEEEE', 
        borderRadius: 15, 
        width: '90%', 
        marginLeft: 20, 
        marginBottom: 30
    },

    walletAreaTitleView:{
        flexDirection: 'row', 
        justifyContent: 'space-between',
        alignItems: 'center' ,
        borderBottomWidth:1, 
        paddingVertical: 15,
        paddingHorizontal: 20
    },
  
    walletAreaTitle:{
        fontSize: 24,
        fontWeight: 'bold'
    },

    walletAreaViewSides:{
        flexDirection: 'row', 
        paddingHorizontal:10
    },

    walletAreaViewLeft:{
        flex:1, 
        paddingTop: 10, 
        borderRightWidth:3, 
        borderRightColor: '#ffffff'
    },
    
    walletAreaViewRight:{
        flex:1, 
        paddingLeft: 10, 
        paddingTop: 10
    },

    subTWallet:{
      fontSize:15,
      fontWeight: 'bold'
    },
  });
  