import { StyleSheet } from "react-native";


export const videoHeight = 400;

export const styles = StyleSheet.create({
    container: {
        width: '100%',
        height: '100%',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    areaVideo:{
        width: '90%',
        flex: 1,
        gap: 50,
        justifyContent: 'center',
        alignItems: 'center',
    },
    tituloAreaVideo:{
        fontSize: 28,
        fontWeight: '900',
        color: '#000',
        textAlign: 'center',
        textShadowColor: '#fff',
        textShadowOffset: {width: 2, height: 2},
        textShadowRadius: 2,
        width: '90%',
    },
    criseAreaVideo:{
        fontSize: 28,
        fontWeight: '600',
        color: '#000',
        textAlign: 'center',
        textTransform: 'uppercase',
    },
    areaVoltarInicio:{
        height: 40,
        alignItems: 'center',
    },
    textAreaVoltarInicio:{
        textDecorationLine: 'underline',
    },


});