import { useState } from 'react'
import { View, StyleSheet, Dimensions, ImageBackground } from 'react-native'
import uuid from 'react-native-uuid'
import ModalDeleteTask from './src/components/ModalDeleteTask'
import AddTask from './src/components/AddTask'
import ListTasks from './src/components/ListTasks'


const App = ()  => {

  const [modalVisible, setModalVisible] = useState(false)
  const [taskSelected, setTaskSelected] = useState({})
  const [taskTitle, setTaskTitle] = useState("")
  const [taskDescription, setTaskDescription] = useState("")
  const [tasks, setTasks] = useState([])
  const screenWidth = Dimensions.get('window').width

  

  const addTask = () => {
    const newTask = {
          id: uuid.v4(),
          createdAt: new Date().toLocaleString(),
          updatedAt: new Date().toLocaleString(),
          completed: false,
          title: taskTitle,
          description: taskDescription
    }
    setTasks([...tasks, newTask])

    setTaskTitle("0")
    setTaskDescription("0")
  }

  const onHandlerTitle = (t) => {
    //const id = uuid.v4()
    setTaskTitle(t)

  }

  const onHandlerDescription= (t) => {
    setTaskDescription(t)
    
  }

  const onHandlerModalDelete = (task) => {
    setTaskSelected(task)
    setModalVisible(!modalVisible)
  }

  const deleteTask = () => {
    setTasks(tasks.filter(task => task.id != taskSelected.id))
    setModalVisible(!modalVisible)  
  }

  const updateTaskCompleted = (id) => {
    setTasks(tasks.map(task => {
      if (task.id === id) return {...task,...{completed:!task.completed}}
      return task
    }))
    
  }

  const incrementTitle = () => {
    let num = parseInt(taskTitle);
    if (isNaN(num)) {
        num = 0;
    }
    setTaskTitle((num + 1).toString());
  }

  const decrementTitle = () => {
    let num = parseInt(taskTitle);
    if (isNaN(num) || num <= 0) {
        num = 0;
    } else {
        num--;
    }
    setTaskTitle(num.toString());
  }

  const incrementDescription = () => {
    let num = parseInt(taskDescription);
    if (isNaN(num)) {
        num = 0;
    }
    setTaskDescription((num + 1).toString());
  }

  const decrementDescription = () => {
    let num = parseInt(taskDescription);
    if (isNaN(num) || num <= 0) {
        num = 0;
    } else {
        num--;
    }
    setTaskDescription(num.toString());
  }

  return (
    
    <View style={styles.container}>
        <ImageBackground style={styles.imageContainer} source={require('./assets/fondodefinitivo.png')}>
          <AddTask 
            taskTitle = {taskTitle}
            onHandlerTitle = {onHandlerTitle}
            taskDescription = {taskDescription}
            incrementTitle = {incrementTitle}
            decrementTitle = {decrementTitle}
            onHandlerDescription = {onHandlerDescription}
            incrementDescription = {incrementDescription}
            decrementDescription = {decrementDescription}
            addTask = {addTask}
          />
          <ListTasks 
            tasks={tasks}
            onHandlerModalDelete={onHandlerModalDelete}
            screenWidth={screenWidth}
            updateTaskCompleted={updateTaskCompleted}
          />
          <ModalDeleteTask 
            modalVisible = {modalVisible}
            taskSelected = {taskSelected}
            onHandlerModalDelete = {onHandlerModalDelete}
            deleteTask = {deleteTask}
          />
        </ImageBackground>   
    </View>
      
  );
}

export default  App

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'space-around'
  },
  imageContainer: {
    width: '100%', 
    height: '100%'
  },
  
});
