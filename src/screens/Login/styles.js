import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    backgroundColor: '#d2e3e0',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: 32
  },
  content: {
    flex: 1,
    width: '80%',
    maxHeight: '80%',
  },
  imgContent: {
    flex: 1,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    backgroundColor: '#32bca3'
  },
  image: {
    flex: 1,
    width: '100%',
    height: '100%',
  },
  formContent: {
    backgroundColor: '#fdfdfd',
    flex: 2,
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
    alignItems: 'center',
    padding: '5%'
  },
  input: {
    marginTop: '5%',
    backgroundColor: '#d9d9d9',
    width: '100%',
    height: 46,
    fontSize: 18,
    paddingLeft: 16,
    borderRadius: 5,
    color: '#000'
  },
  btnContent: {
    width: '100%',
    marginTop: 18,
    alignItems: 'center',
    justifyContent: 'center'
  },
  btn: {
    marginTop: 10,
    width: '75%',
    height: 36,
    backgroundColor: '#32bca3',
    borderRadius: 50,
    alignItems: 'center',
    justifyContent: 'center'
  },
  btnText: {
    color: '#FFF',
    fontSize: 18
  },
  btnCreateAccount: {
    marginTop: 10,
    width: '75%',
    height: 36,
    borderRadius: 50,
    alignItems: 'center',
    justifyContent: 'center'
  },
  btnTextAccount: {
    color: '#32bca3',
    fontSize: 18
  }
})
