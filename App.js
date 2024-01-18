import { Button, TextInput, View, StyleSheet, Text, ImageBackground, Image } from 'react-native'

const App = ()  => {

  return (
    <ImageBackground source={require('./assets/fondodefinitivo.png')} style={styles.container}>
      <Image source={require('./assets/logo.png')} style={styles.logo} />
      <View style={styles.text}>
        <Text>¡Bienvenido a PRODESCO!</Text>
      </View>
      
      <TextInput
        placeholder="Nombre de usuario"
        style={styles.input}
        selectionColor={'#9ed7ea'}
      />
      <TextInput
        placeholder="Contraseña"
        secureTextEntry
        selectionColor={'#9ed7ea'}
        style={styles.input}
      />
      <Button title="Iniciar sesión" style={styles.button}/>
    </ImageBackground>
  );

  
}

export default  App

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderBottomWidth: 1,
    color: 'white',
    marginBottom: 20,
    width: '80%',
    padding: 10,
  },
  logo: {
    width: 150,
    height: 150,
    marginBottom: 20,
    resizeMode: 'contain',
  },
  text: {
    marginBottom: 20,
  }
});
