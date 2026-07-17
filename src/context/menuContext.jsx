import { createContext, useContext, useState } from 'react'

const MenuContext = createContext()

export function MenuProvider({ children }) {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => setIsOpen(!isOpen);

    return (
        <MenuContext.Provider value={{isOpen, toggleMenu, setIsOpen}}>
            {children}
        </MenuContext.Provider>
    )
}

export function useMenu() {
    return useContext(MenuContext);
}