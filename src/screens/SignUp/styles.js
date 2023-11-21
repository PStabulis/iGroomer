import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
      flex: 1,
      paddingTop: 60,
      paddingBottom:60,
      backgroundColor: '#D2E3E0',
      alignItems: 'center',
      justifyContent: 'center',
    },

    header:{
        flex: 1, 
        width: 350
    },
  
    image:{
      width: '100%',
      height: '100%',
      borderTopLeftRadius: 15,
      borderTopRightRadius: 15
    },
    
    inputArea:{
        flex: 5, 
        width: 350, 
        backgroundColor:'#fff', 
        borderBottomLeftRadius: 15, 
        borderBottomRightRadius: 15
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
    },

    buttonText:{
        color: '#fff'
    }
  
  });
  