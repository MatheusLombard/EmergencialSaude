import { StyleSheet } from "react-native";  
  
export const styles = StyleSheet.create({
    container: {
        backgroundColor: '#6D050F',
        width: "100%",
        height: "100%", 
        alignItems: 'center', 
        justifyContent: 'space-between',
    },
    textTitulo: { 
        fontSize: 40,
        color: "#fff",
    },
    textEnunciado: {
        fontSize: 23,
        color: "#fff",
    },
    areaInputOutros:{
        height: '53%',
    },
    buttonsNav: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        gap: 10,
    },
    indice:{
        marginBottom: 25,
    },
    indiceText: {
        textAlign: "center",
        fontSize: 18,
        color: "#fff",
    },

});