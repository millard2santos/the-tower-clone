/* eslint-disable react-refresh/only-export-components */
import type React from "react"
import { createContext, useContext, useState } from 'react';

type MultipliersContextType = {
    damageMultiplier: number,
    setDamageMultiplier: React.Dispatch<React.SetStateAction<number>>,
    healthMultiplier: number,
    setHealthMultiplier: React.Dispatch<React.SetStateAction<number>>
}

const multipliersContext = createContext<MultipliersContextType | null>(null);

export const MultipliersContext = ({ children }: { children: React.ReactNode }) => {
    const [damageMultiplier, setDamageMultiplier] = useState(1);
    const [healthMultiplier, setHealthMultiplier] = useState(1);

    return (
        <multipliersContext.Provider value={{ damageMultiplier, setDamageMultiplier, healthMultiplier, setHealthMultiplier }}>
            {children}
        </multipliersContext.Provider>
    );
}

export const useMultipliers = () => useContext(multipliersContext) as MultipliersContextType