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
    },
    doisInputs: {
        width: "100%",
        height: 79,
        flexDirection: "row", 
        justifyContent: "space-between",
        alignItems: "center",
    },
    indice:{
        marginBottom: 25,
    },
    indiceText: {
        textAlign: "center",
        fontSize: 18,
        color: "#fff",
    },
    viewButtonEntrar: {
        alignSelf: "center",
        width: "80%",
        flexDirection: "row",
        justifyContent: "flex-end",
        
    },
})