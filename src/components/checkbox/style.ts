import { StyleSheet } from "react-native";  
  
export const styles = StyleSheet.create({
    checkBoxText: {
        color: 'white',
        fontSize: 20,
        marginLeft: 10,
        lineHeight: 23,
      },
      checkBoxContainer: {
        justifyContent: 'center',
        height: 40,
        padding: 0,
        margin: 0,
        backgroundColor: 'transparent', // Remove a cor de fundo do CheckBox
        borderWidth: 0, // Remove a borda do CheckBox
      },
});