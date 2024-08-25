import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
        width: "100%",
        height: "100%",
        padding: 10,
        justifyContent: "space-between",
    },
    areaTituloConfig:{
        top: 20,
        alignItems: "center",
    },
    tituloConfig: {
        fontSize: 36,
        color: "#fff",
        marginBottom: 10,
    },
    areaOpcoesConfig: {
        marginTop: 40,
        alignSelf: 'center',
        width: '90%',
        flex: 1,
    },
    viewAreaOpcoesConfig: {
        justifyContent: "space-around",
        flexDirection: 'row',
    },
    opcoesConfig: {
        fontSize: 25,
        width: '50%',
        color: "#fff",
    },

});