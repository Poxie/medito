"use client";
import { createContext, useContext, useState } from "react";

const TiersContext = createContext<null | {
    activeTier: null | string;
    setActiveTier: (tier: string | null) => void;
}>(null);

export const useTiers = () => {
    const context = useContext(TiersContext);
    if (!context) {
        throw new Error(`useTiers must be used within a TiersProvider`);
    }
    return context;
}

export default function TiersProvider({ children }: {
    children: React.ReactNode;
}) {
    const [activeTier, setActiveTier] = useState<null | string>(null);

    const value = { activeTier, setActiveTier };
    return(
        <TiersContext.Provider value={value}>
            {children}
        </TiersContext.Provider>
    )
}