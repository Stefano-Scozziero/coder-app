import { StyleSheet , FlatList } from 'react-native'
import CardTaskList from './CardTaskList'

const ListTasks = ({tasks, onHandlerModalDelete, screenWidth, updateTaskCompleted}) => {
  return (
    <FlatList
          horizontal={true}
          pagingEnabled= {true} 
          data={tasks}
          keyExtractor={item => item.id}
          renderItem={({item})=> (
            <CardTaskList
                item={item}
                onHandlerModalDelete={onHandlerModalDelete} 
                screenWidth={screenWidth}
                updateTaskCompleted = {updateTaskCompleted}
            />
          )}
 
    />
  )
}

export default ListTasks

const styles = StyleSheet.create({})

