import { StyleSheet } from "react-native";  
  
export const styles = StyleSheet.create({
    inputGroup: {
        alignItems: 'center',
        justifyContent: 'center',
        gap: 10,
        width: "90%",
    },
    inputGroupItens: {
        display: 'flex',
        justifyContent: 'center',
        width: "90%",
    },
    doisInputs: {
        width: "100%",
        flexDirection: "row", 
        justifyContent: "space-between",
    },
    indice:{
        marginBottom: 25,
    },
    buttonsNav: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        gap: 10,
    }
})