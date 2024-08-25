import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
        backgroundColor: '#6D050F',
        width: "100%",
        height: "100%",
        justifyContent: "space-between",
        gap: 30,
    },
    tituloEdicao:{
        fontSize: 30,
        color: "#fff",
        textAlign: 'center',
    },
    areaInputs: {
        flex: 1,
        width: "100%",
        gap: 15,
    },
    tituloAreaInputs:{
        fontSize: 25,
        color: '#fff',
        marginHorizontal: 25,
        marginBottom: 30,
    },
    doisInputs: {
        width: "100%",
        height: 79,
        flexDirection: "row", 
        justifyContent: "space-between",
        alignItems: "center",
    },
    tituloCheck: {
        fontSize: 20,
        color: '#fff',
        marginHorizontal: 25,
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
    viewAreaBotao: {
        width: '90%',
        alignSelf: 'center',
        marginBottom: 20,
        alignItems: 'center',
    },
    areaBotao: {
        backgroundColor: '#DE2335',
        padding: 10,
        borderRadius: 10,
        width: '35%',
    },
    textoAreaBotao: {
        color: '#FFFFFF',
        fontSize: 22,
        textAlign: 'center',
        fontWeight: '300',
    },
});