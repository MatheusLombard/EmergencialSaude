import { StyleSheet } from "react-native";  
  
export const styles = StyleSheet.create({
    
    container: {
        backgroundColor: '#6D050F',
        width: "100%",
        height: "100%",
        paddingTop: 90,
        padding: 20,
        justifyContent: "center",
        alignItems: "center",
        gap: 30,
        
    },
    textWelcome: {
        color: "white",
        fontSize: 32,
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
        height: 58,
        alignItems: "center",
        justifyContent: "center",
        color: "white",
        fontSize: 6,
        backgroundColor: "#E23C4C",
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
        fontSize: 25,
        color: "white",
        fontWeight: "bold",
    },
    buttonEntrar: {
        top: -49,
        width: "100%",
        color: "white",
        textDecorationLine: "underline",
        fontSize: 22,
    },
});