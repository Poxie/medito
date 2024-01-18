"use client";
import tiers from "@/assets/data/tiers/index.json";
import { RewardGroup, RewardGroupItem } from "@/assets/data/tiers/types";
import { createContext, useContext, useState } from "react";

const TiersContext = createContext<null | {
    activeTier: null | RewardGroup;
    setActiveTierId: (tier: string | null) => void;
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
    const [activeTierId, setActiveTierId] = useState<null | string>(null);

    const activeTier = tiers.find(tier => tier.id === activeTierId) || null;

    const value = { activeTier, setActiveTierId };
    return(
        <TiersContext.Provider value={value}>
            {children}
        </TiersContext.Provider>
    )
}