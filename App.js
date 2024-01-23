import { TextInput, View, StyleSheet, Text, ImageBackground, Image, Pressable } from 'react-native'

const App = ()  => {
  

  return (
    
    <ImageBackground source={require('./assets/fondodefinitivo.png')} style={styles.container}>
      <Image source={require('./assets/logo.png')} style={styles.logo} />
      
      <Text style={styles.text}>PRODESCO</Text>
      
      <TextInput
        placeholder="Correo Electronico"
        placeholderTextColor="#FFFFFF"
        style={styles.input}
        selectionColor={'#ff6e38'}
        fontSize={15}
      />
      
      <TextInput
        placeholder="Contraseña"
        placeholderTextColor="#FFFFFF"
        secureTextEntry
        selectionColor={'#ff6e38'}
        style={styles.input}
        fontSize={15}
      />

      <Pressable style={styles.button}>
        <Text style={styles.buttonText}>INICIAR SESIÓN</Text>
      </Pressable>
      <Pressable style={styles.button2}>
        <Text style={styles.buttonText}>REGISTRESE AQUÍ</Text>
      </Pressable>
      
      <Text style={styles.text2}> ¿Olvidó su Contraseña?</Text>

      <View style={styles.container2}>
        <Pressable>
          <View style={styles.button_a}>
            <Image source={require('./assets/facebook.png')} style={styles.img_apps} />
            <Text style={styles.text_a}>Facebook</Text>
          </View>
        </Pressable>
        <Pressable >
          <View style={styles.button_a}>
            <Image source={require('./assets/google.png')} style={styles.img_apps} />
            <Text style={styles.text_a}>Google</Text>
          </View>
        </Pressable>
      </View>

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
  container2: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    
  },
  input: {
    height: '5%',
    borderColor: '#e6e6e6',
    borderBottomWidth: 1,
    color: 'white',
    marginBottom: 20,
    width: '50%',
    padding: 10,
  },
  logo: {
    width: '40%',
    height: '15%',
    resizeMode: 'contain',
    marginBottom: 10,
  },
  text: {
    textAlign: 'center',
    fontSize: 50,
    fontWeight: 'bold',
    color: 'white',
    marginBottom: '5%',
  },
  text2: {
    textAlign: 'center',
    color: 'white',
    marginTop: 20,
    fontSize: 15,
  },
  button:({ pressed }) => [
  {
    
    backgroundColor: pressed ? '#ff6e38' : '#FF5722',
    padding: 10,
    borderRadius: 5,
    marginTop: 10,
    width: '60%',
    alignItems: 'center',
  }],
  button2:({ pressed }) => [
    {
    alignItems: 'center',
    padding: 10,
    borderRadius: 5,
    borderColor: pressed ? '#ff6e38' : '#FF5722',
    borderWidth: 1,
    marginTop: 10,
    width: '60%',
    alignItems: 'center',
  }],
  buttonText: {
    color: '#fff',
    fontSize: 15,
  },
  img_apps: {
    width: 35,
    height: 35,
    margin: 5,
    resizeMode: 'contain',
  },
  button_a: {
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    borderWidth: 1,
    borderColor: '#FF5722',
    marginTop: 55,
    borderRadius: 10,
    width: 140,
    height: 50, 
    margin: 5, 
  },
  text_a: {
    fontSize: 15,
    color: 'white',

  },
});
