import { StyleSheet } from "react-native";  
  
export const styles = StyleSheet.create({
    
    container: {
        paddingTop: 90,
        padding: 20,
        justifyContent: "center",
        alignItems: "center",
        gap: 30,
        
    },
    textWelcome: {
        fontWeight: "bold",
        textAlign: "center",
        marginBottom: 10,
    },
    logo: {
        width: "110%",
        resizeMode: "contain",
        marginBottom: 10,
    },
    buttonPressCadastrar: {
        width: "70%",
    },
    buttonCadastrar: {
        backgroundColor: '#E23C4C',
        height: 58,
        borderRadius: 15,
        zIndex: 99999,
    },
    buttonCadastrarShadow: {
        top: -45,
        right: -15,
        height: 58,
        backgroundColor: "rgba(0, 0, 0, 0.5)",
        borderRadius: 15,
    },
    buttonTextCadastrar: {
        color: '#fff',
        fontWeight: "bold",
    },
    buttonEntrar: {
        top: -49,
        width: "100%",
        textDecorationLine: "underline",
    },
});