import { StyleSheet } from "react-native";  
  
export const styles = StyleSheet.create({
    container: {
        backgroundColor: '#6D050F',
        width: "100%",
        height: "100%",
    },
    enunciado: {
        fontSize: 26,
        color: "#fff",
        textAlign: "left",
    },
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
    indiceText: {
        textAlign: "center",
        fontSize: 18,
        color: "#fff",
    },
    buttonsNav: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        gap: 10,
    }
})