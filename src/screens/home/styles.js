import { StyleSheet } from "react-native";
const styles = StyleSheet.create({
    container: {
      padding: 20,
      marginTop: 40,
    },
    titulo: {
      fontSize: 20,
      color: 'red',
      fontWeight: 'bold',
      marginBottom: 20,
      textAlign: 'center'
    },
    input: {
      borderWidth: 1,
      marginBottom: 10,
      paddingHorizontal: 8,
      height: 40,
    },
    picker: {
      height: 70,
      marginBottom: 10,
    },
    switchContainer: {
      flexDirection: 'row',
      alignItems: 'center',
      marginVertical: 10,
    },
    resultado: {
      marginTop: 20,
      padding: 10,
      backgroundColor: '#f2f2f2',
      borderRadius: 10
    },
    buttonContainer: {
        alignItems: 'center',
        marginVertical: 10, // margem opcional para separar o botão dos outros elementos
      },
  });


  export default styles;