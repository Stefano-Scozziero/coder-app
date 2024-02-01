import { StyleSheet, Text, View, Switch} from 'react-native'
import ButtonPrimary from './ButtonPrimary';

const CardTaskList = ({item, onHandlerModalDelete,screenWidth, updateTaskCompleted}) => {
  return (
    <View style={[styles.container, {width: screenWidth -40}]}>
      <Text style={styles.text}> EquipoA: {item.title}</Text>
      <Text style={styles.text}> EquipoB: {item.description}</Text>
      <Text style={styles.text}> Fecha de Creacion: {item.createdAt}</Text>
      <Text style={styles.text}> Fecha de Actualizacion: {item.updatedAt}</Text>
      <View style={styles.completedContainer}>
        <Switch value={item.completed} 
                onValueChange={() => updateTaskCompleted(item.id)}
        />
        <Text style={styles.textCompleted}> {item.completed ? "Completado" : "Pendiente"}</Text>
      </View>
      
      <ButtonPrimary title= 'Borrar Prediccion' onPress={() => onHandlerModalDelete(item)} />
     </View>
  )
}

export default CardTaskList

const styles = StyleSheet.create({
  container: {
    height: '40%',
    width: '40%',
    backgroundColor: '#ff8000',
    borderRadius: 10,
    marginVertical: 10,
    marginHorizontal: 10,
    padding: 10,
    alignItems: 'center',
    gap: 20
  },
  text: {
    width: '100%',
    color: 'white',
    fontSize: 18
  },
  completedContainer: {
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
    gap: 15

  },
  textCompleted: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold'
  }
  
});

