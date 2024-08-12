import { StyleSheet } from "react-native";  
  
export const styles = StyleSheet.create({

    container: {
        backgroundColor: '#6D050F',
        width: "100%",
        height: "100%",
    },
    areaTitulo:{
        width: "100%",
        alignItems: "center",
        justifyContent: "center",
    },
    tituloFicha: {
        fontSize: 40,
        color: "#fff",
    },
    enunciadoFicha:{
        fontSize: 23,
        color: "#fff",
        textAlign: "left",
    },
    areaWrap: {
        height: 380,
        width: "100%",
        flexWrap: "wrap",
        marginLeft: 10,
        padding: 10,
        justifyContent: "center",
        alignContent: "space-between",
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