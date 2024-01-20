"use client";
import React, { useEffect, useState } from "react";
import DonationAmount from "./DonationAmount";
import { useTiers } from "@/contexts/tiers";
import { getStripeLink } from "@/utils/requests";

export const DONATE_FORM_STEPS = {
    AMOUNT: 0,
    DETAILS: 1,
}

type Info = {
    amount: string;
    displayName: string;
    email: string;
    billingPeriod: 'month' | undefined;
}
type InfoKey = keyof Info;

const createInitialInfo: (amount?: string) => Info = (amount='') => ({
    amount,
    displayName: '',
    email: '',
    billingPeriod: undefined,
})

const DonationContext = React.createContext<null | {
    step: number;
    setStep: (step: number) => void;
    updateInfo: (key: InfoKey, value: Info[InfoKey]) => void;
    info: Info;
    goToStripe: () => Promise<void>;
}>(null);

export const useDonation = () => {
    const context = React.useContext(DonationContext);
    if (!context) {
        throw new Error(`useDonation must be used within a DonationProvider`);
    }
    return context;
}

// This used to be a multi-step form, but we're just going to skip to Stripe for now.
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

    const goToStripe = async () => {
        if(!info.amount) return;

        const url = await getStripeLink(info.amount, info.billingPeriod);
        
        window.location.href = url;
    }

    const _setStep = (step: number) => {
        if(onStepChange) onStepChange(step);
        setStep(step);
    }
    const updateInfo = (key: InfoKey, value: Info[InfoKey]) => {
        setInfo(prev => ({
            ...prev,
            [key]: value,
        }))
    }

    const value = { setStep: _setStep, step, updateInfo, info, goToStripe };
    return(
        <DonationContext.Provider value={value}>
            {step === DONATE_FORM_STEPS.AMOUNT && (
                <DonationAmount />
            )}
        </DonationContext.Provider>
    )
}