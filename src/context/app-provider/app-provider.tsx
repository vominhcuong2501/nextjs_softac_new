/* eslint-disable no-unused-vars */
'use client'

import { createContext, PropsWithChildren, useState } from 'react'

export interface IAppContext {
    isEnter?: boolean
    setIsEnter?: (value: boolean) => void
    handleMouseEnter?: () => void
    handleMouseLeave?: () => void
}

const initialState = {
    isEnter: false,
    setIsEnter: () => { },
    handleMouseEnter: () => { },
    handleMouseLeave: () => { },
}


export const AppContext = createContext<IAppContext>(initialState)


export function AppProvider({ children, ...initialState }: PropsWithChildren & IAppContext) {
    const [isEnter, setIsEnter] = useState(initialState.isEnter);

    // handle mouse enter
    const handleMouseEnter = () => {
        setIsEnter(true);
    };
    // handle leave
    const handleMouseLeave = () => {
        setIsEnter(false);
    };

    return <AppContext.Provider value={{
        isEnter,
        setIsEnter,
        handleMouseEnter,
        handleMouseLeave,
    }}>{children}</AppContext.Provider>;
}
