import { ReactNode, useState } from "react";
import { EmergenciaContext } from "./emergencialContext";

interface EmergenciaProviderProps {
    children: ReactNode;
}

export function EmergenciaProvider({children} : EmergenciaProviderProps)  {
    const [backgroundColor, setBackgroundColor] = useState('#6D050F'); 
    const [backgroundColorComponents, setBackgroundColorComponents] = useState('#fff'); 
    const [colorText, setColorText] = useState('#fff'); 
    const [colorComponentsText, setColorComponentsText] = useState('#000'); 
    const [colorComponentsDrawer, setColorComponentsDrawer] = useState(''); 
    const [colorComponentsChamar, setColorComponentsChamar] = useState(''); 
    const [colorComponentsBox, setColorComponentsBox] = useState(''); 
    const [colorComponentsChoose, setColorComponentsChoose] = useState(''); 

    return (
        <EmergenciaContext.Provider 
        value={{ backgroundColor, setBackgroundColor,
        backgroundColorComponents, setBackgroundColorComponents, 
        colorComponentsText, setColorComponentsText,
        colorText, setColorText, 
        colorComponentsDrawer, setColorComponentsDrawer,
        colorComponentsChamar, setColorComponentsChamar,
        colorComponentsBox, setColorComponentsBox,
        colorComponentsChoose, setColorComponentsChoose}}>
            {children}
        </EmergenciaContext.Provider>
    );
};