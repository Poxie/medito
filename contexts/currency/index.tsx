"use client";
import { APIRequest } from "@/utils/requests";
import { createContext, useContext, useEffect, useState } from "react";

const CurrencyContext = createContext<null | {
    currency: string;
    setCurrency: (currency: string) => void;
    rate: number;
}>(null);

export const useCurrency = () => {
    const context = useContext(CurrencyContext);
    if (!context) {
        throw new Error(`useCurrency must be used within a CurrencyProvider`);
    }
    return context;
}

export default function CurrencyProvider({ children }: {
    children: React.ReactNode;
}) {
    const [currency, setCurrency] = useState('USD');
    const [rates, setRates] = useState<null | Record<string, number>>(null);

    useEffect(() => {
        APIRequest.getCurrencyRates().then(setRates);
    }, []);

    const value = {
        currency,
        setCurrency,
        rate: rates?.[currency] || 1,
    }
    return(
        <CurrencyContext.Provider value={value}>
            {children}
        </CurrencyContext.Provider>
    )
}