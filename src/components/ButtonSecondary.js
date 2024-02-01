import { StyleSheet, Text, Pressable } from 'react-native'

const ButtonSecondary = ({title, onPress}) => {
  return (
    <Pressable style={styles.container} onPress={onPress}>
      <Text style= {styles.text}>{title}</Text>
    </Pressable>
  )
}

export default ButtonSecondary

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'white',
        width: 150,
        paddingHorizontal: 10,
        paddingVertical: 5,
        alignItems: 'center',
        borderRadius: 5,
    },
    text: {
        fontSize: 16,
        textAlign: 'center'
    }
})