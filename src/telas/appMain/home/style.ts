import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
        paddingHorizontal: 20,
        paddingVertical: 10,
    },
    areaMenu: {
        flexDirection: 'row',
        gap: 7,
    },
    textoMenu: {
        lineHeight: 27,
        fontWeight: '300',
    },
    areaChamar: {
        flex: 1,
        justifyContent: 'flex-end',
        alignItems: 'center',
        marginBottom: 70,
    },
    botaoAreaChamar: {
        height: 300,
        width: 300,
        borderWidth: 1,
        borderRadius: 150,

    },
    textoChamar: {
        fontWeight: '400',
        textAlign: 'center',
    },
});