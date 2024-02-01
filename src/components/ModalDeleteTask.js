import { StyleSheet, Text, View, Pressable, Modal } from 'react-native'


const ModalDeleteTask = ({taskSelected, 
                          deleteTask, 
                          modalVisible, 
                          onHandlerModalDelete}) => {
    return (
        <Modal 
        animationType='slide'
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => onHandlerModalDelete({})}>
          <View style={styles.container}>
          <Text>Estas seguro que queres eliminar la tarea: {taskSelected.title}?</Text>
            <View style={styles.modalView}>
                <Pressable
                  style={[styles.button, styles.buttonClose]}
                  onPress={() => {
                    deleteTask()
                  }}>
                  <Text>Si</Text>    
                </Pressable>
                <Pressable
                  style={[styles.button, styles.buttonClose]}
                  onPress={() => {
                    onHandlerModalDelete({})
                  }}>
                  <Text>No</Text>    
                </Pressable>
            </View>
          </View>
        </Modal>
    )
}

export default ModalDeleteTask

const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      marginTop: 22,
    },
    modalView: {
      margin: 20,
      backgroundColor: 'white',
      borderRadius: 20,
      flexDirection: 'row',
      padding: 35,
      gap:15,
      alignItems: 'center',
      shadowColor: '#000',
      shadowOffset: {
        width: 0,
        height: 2,
      },
      shadowOpacity: 0.25,
      shadowRadius: 4,
      elevation: 5,
    },
    button: {
      borderRadius: 10,
      padding: 10,
      marginBottom: 10,
      elevation: 2,
    },
    buttonOpen: {
      backgroundColor: '#F194FF',
    },
    buttonClose: {
      backgroundColor: '#2196F3',
    },

})
