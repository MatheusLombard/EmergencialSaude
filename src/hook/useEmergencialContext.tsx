import { EmergenciaContext } from "../context/emergencialContext";
import { useContext } from "react";

export function useEmergencialContext() {
    const context = useContext(EmergenciaContext);

    if (context === undefined) { 
        throw new Error("Nao esta dentro do contexto");
    }

    return context;
}