import {createContext,useState} from "react";


export const Context = createContext();

export const Datos = ({children}) => {
    const [currentIndicator, setCurrentIndicator] = useState("");
    const [currentView, setCurrentView] = useState(2)
    return (
        <Context.Provider value={{currentView, setCurrentView, currentIndicator, setCurrentIndicator}}>
            {children}
        </Context.Provider>
    )
}