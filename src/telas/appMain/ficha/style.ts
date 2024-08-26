import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    tituloFicha: {
        textAlign: 'center',
        top: -30,
    },
    areaInformacoes:{
        flex: 1,
        width: '90%',
        alignSelf: 'center',
    },
    titulosAreaInformacoes: {
        marginBottom: 10,
        marginLeft: 10,
    },
    boxAreaInformacoes: {
        padding: 10,
        borderRadius: 10,
        marginBottom: 10,
    },
    textoBoxAreaInformacoes: {
        marginBottom: 9,
    },
    subBoxAreaInformacoes: {
        flexDirection: 'row',   
        width: '80%',    
        justifyContent: 'space-between'
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
})