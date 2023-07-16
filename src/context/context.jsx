import {createContext,useState} from "react";


export const Context = createContext();

export const Datos = ({children}) => {
    const [currentIndicator, setCurrentIndicator] = useState("AMBIENTAL");
    const [currentView, setCurrentView] = useState(0)
    return (
        <Context.Provider value={{currentView, setCurrentView, currentIndicator, setCurrentIndicator}}>
            {children}
        </Context.Provider>
    )
}