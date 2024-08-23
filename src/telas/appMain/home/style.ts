import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
        backgroundColor: '#6D050F',
        width: "100%",
        height: "100%", 
        paddingHorizontal: 20,
        paddingVertical: 10,
        justifyContent: 'space-between',
    },
    areaMenu: {
        flexDirection: 'row',
        gap: 7,
    },
    textoMenu: {
        fontSize: 20,
        lineHeight: 27,
        color: '#FFFFFF',
        fontWeight: '100',
    },
    areaChamar: {
        flex: 1,
        justifyContent: 'flex-end',
        alignItems: 'center',
        marginBottom: 70,
    },
    botaoAreaChamar: {
        backgroundColor: '#D7747E',
        height: 300,
        width: 300,
        borderWidth: 1,
        borderRadius: 150,
        justifyContent: 'center',
        alignItems: 'center',
    },
    textoChamar: {
        color: '#fff',
        fontSize: 30,
        fontWeight: '400',
        textAlign: 'center',
    },
});