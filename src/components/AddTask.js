import {StyleSheet, View, Text, Image, TextInput, TouchableOpacity } from 'react-native'
import ButtonPrimary from './ButtonPrimary'

const AddTask = ({taskTitle, onHandlerTitle, taskDescription, onHandlerDescription, addTask, incrementDescription, decrementDescription, incrementTitle, decrementTitle}) => {
    return (
      <View style={styles.container}>
        <View style={styles.container2}>
          <View style={styles.imageContainer}>
            <Image style= {styles.copaImage} source={require('../../assets/copa.png')}/>
            <Text>Equipo A</Text>
          </View>
          <View style = {styles.containerLine}>
            <View style = {styles.containerPredict}>
              <TouchableOpacity onPress={incrementTitle}>
                <Text style={{ fontSize: 36, textAlign: 'center'}}>+</Text>
              </TouchableOpacity>
              <TextInput 
                value={taskTitle} 
                onChangeText={onHandlerTitle} 
                placeholder='0'
                placeholderTextColor={'white'}
                editable= {false}
                maxLength={2}
                style={{fontSize: 36, marginVertical: -8, color: 'white', textAlign: 'center'}} 
              />
              <TouchableOpacity onPress={decrementTitle}>
                <Text style={{ fontSize: 36, textAlign: 'center'}}>-</Text>
              </TouchableOpacity>
            </View>
            <Text style={{fontSize: 36, marginHorizontal: 20}}>-</Text>
            <View style = {styles.containerPredict}>
              <TouchableOpacity onPress={incrementDescription}>
                <Text style={{ fontSize: 36, textAlign: 'center' }}>+</Text>
              </TouchableOpacity>
              <TextInput 
                value={taskDescription} 
                onChangeText={onHandlerDescription}  
                placeholder='0'
                placeholderTextColor={'white'}
                editable= {false}
                maxLength={2}
                style={{fontSize: 36, marginVertical: -8, color: 'white', textAlign: 'center'}} 
              />
              <TouchableOpacity onPress={decrementDescription}>
                <Text style={{fontSize: 36, textAlign: 'center' }}>-</Text>
              </TouchableOpacity>
            </View>
            
          </View>
          
          <View style={styles.imageContainer}>
            <Image style= {styles.copaImage} source={require('../../assets/copa.png')}/>
            <Text>Equipo B</Text>
          </View>
          
        </View>
        
        <ButtonPrimary title='Crear Prediccion' onPress={addTask}></ButtonPrimary>
      </View>      
    )
}

export default AddTask

const styles = StyleSheet.create({
    container: {
      backgroundColor: '#ff8000',
      borderRadius: 10,
      alignItems: 'center',
      padding: 10,
      marginTop: 40,
    },
    container2: {
      flexDirection: 'row',
      backgroundColor: '#ff8000',
      marginBottom: 20,
      alignItems: 'center',
    },
    containerLine: {
      flexDirection: 'row',
      alignItems: 'center',
      marginHorizontal: 30,
    },
    containerPredict: {
      flexDirection: 'column',
      alignItems: 'center',
    },
    imageContainer:{
      alignItems: 'center'
    },
    copaImage: {
      width: 100,
      height: 100
    }
    
})