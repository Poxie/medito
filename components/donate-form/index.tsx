"use client";
import React, { useEffect, useState } from "react";
import DonationAmount from "./DonationAmount";
import DonationDetails from "./DonationDetails";
import { useTiers } from "@/contexts/tiers";

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

export default function DonateForm({ defaultAmount, onStepChange }: {
    defaultAmount?: string;
    onStepChange?: (step: number) => void;
}) {
    const { activeTier } = useTiers();

    const [step, setStep] = useState(DONATE_FORM_STEPS.AMOUNT);
    const [info, setInfo] = useState(createInitialInfo(defaultAmount));

    useEffect(() => {
        if(!activeTier) return;

        setInfo(prev => ({
            ...prev,
            amount: activeTier.amount,
        }));
    }, [activeTier]);

    const _setStep = (step: number) => {
        if(onStepChange) onStepChange(step);
        setStep(step);
    }
    const updateInfo = (key: DonationInfoKey, value: string) => {
        setInfo(prev => ({
            ...prev,
            [key]: value,
        }))
    }

    const value = { setStep: _setStep, step, updateInfo, info };
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