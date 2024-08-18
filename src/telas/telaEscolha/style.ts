import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
        backgroundColor: '#6D050F',
        width: "100%",
        height: "100%",
        justifyContent: "space-between",
    },
    areaEmergencias:{
        flex: 1,
        justifyContent: "flex-end",
    },
    areaEmergenciasBotoes:{
        height: 500,
        borderWidth: 1,
    },
    textoAreaEmergencias:{
        color: "white",
        fontSize: 23,
        marginBottom: 20,
        textAlign: "center",
    },
});