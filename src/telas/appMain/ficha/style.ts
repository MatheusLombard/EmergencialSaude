import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
        height: '100%',
        backgroundColor: '#6D050F',
        justifyContent: "space-between",
        gap: 30,
    },
    tituloFicha: {
        color: '#FFFFFF',
        fontSize: 28,
        textAlign: 'center',
        top: -10,
    },
    areaInformacoes:{
        flex: 1,
        width: '90%',
        alignSelf: 'center',
    },
    titulosAreaInformacoes: {
        color: '#FFFFFF',
        fontSize: 22,
        marginBottom: 10,
        marginLeft: 10,
    },
    boxAreaInformacoes: {
        backgroundColor: '#DE2335',
        padding: 10,
        borderRadius: 10,
        marginBottom: 10,
    },
    textoBoxAreaInformacoes: {
        color: '#FFFFFF',
        fontSize: 19,
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