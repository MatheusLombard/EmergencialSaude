import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({

    areaInputs: {
        flex: 1,
        width: "100%",
        gap: 15,
    },
    tituloAreaInputs:{
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
    areaWrap: {
        height: 400,
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