// emergencialContext.tsx
import React, { createContext, useContext, ReactNode, useState } from 'react';

// Defina a interface para o valor do contexto
interface EmergenciaContextType {
    backgroundColor: string;
    setBackgroundColor: React.Dispatch<React.SetStateAction<string>>;
    backgroundColorComponents: string;
    setBackgroundColorComponents: React.Dispatch<React.SetStateAction<string>>;
    colorText: string;
    setColorText: React.Dispatch<React.SetStateAction<string>>;
    colorComponentsText: string;
    setColorComponentsText: React.Dispatch<React.SetStateAction<string>>;
    colorComponentsDrawer: string;
    setColorComponentsDrawer: React.Dispatch<React.SetStateAction<string>>;
    colorComponentsChamar: string;
    setColorComponentsChamar: React.Dispatch<React.SetStateAction<string>>;
    colorComponentsBox: string;
    setColorComponentsBox: React.Dispatch<React.SetStateAction<string>>;
    colorComponentsChoose: string;
    setColorComponentsChoose: React.Dispatch<React.SetStateAction<string>>;
}

// Crie o contexto com um valor padrão ou indefinido
export const EmergenciaContext = createContext<EmergenciaContextType | undefined>(undefined);
