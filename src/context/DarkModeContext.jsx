import { createContext, useState } from "react";

//필요한 데이터 간직
export const DarkModeContext=createContext();

//umbrella part
export function DarkModeProvider({children}){
    const [darkMode,setDarkMode]=useState(false);
    const toggleDarkMode=()=>setDarkMode((mode)=>!mode);
    return (
        <DarkModeContext.Provider value={{darkMode,toggleDarkMode}}>
            {children}
        </DarkModeContext.Provider>
    );
}