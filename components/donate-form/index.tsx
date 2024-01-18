"use client";
import React, { useState } from "react";
import DonationAmount from "./DonationAmount";
import DonationDetails from "./DonationDetails";

export const DONATE_FORM_STEPS = {
    AMOUNT: 0,
    DETAILS: 1,
}

const createInitialInfo = (amount='') => ({
    amount,
    displayName: '',
    email: '',
})
type DonationInfoKey = keyof ReturnType<typeof createInitialInfo>;

const DonationContext = React.createContext<null | {
    step: number;
    setStep: (step: number) => void;
    updateInfo: (key: DonationInfoKey, value: string) => void;
    info: ReturnType<typeof createInitialInfo>;
}>(null);

export const useDonation = () => {
    const context = React.useContext(DonationContext);
    if (!context) {
        throw new Error(`useDonation must be used within a DonationProvider`);
    }
    return context;
}

export default function DonateForm({ defaultAmount }: {
    defaultAmount?: string;
}) {
    const [step, setStep] = useState(DONATE_FORM_STEPS.AMOUNT);

    const [info, setInfo] = useState(createInitialInfo(defaultAmount))

    const updateInfo = (key: DonationInfoKey, value: string) => {
        setInfo(prev => ({
            ...prev,
            [key]: value,
        }))
    }

    const value = { step, setStep, updateInfo, info };
    return(
        <DonationContext.Provider value={value}>
            {step === DONATE_FORM_STEPS.AMOUNT && (
                <DonationAmount />
            )}
            {step === DONATE_FORM_STEPS.DETAILS && (
                <DonationDetails />
            )}
        </DonationContext.Provider>
    )
}