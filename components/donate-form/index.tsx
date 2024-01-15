"use client";
import React, { useState } from "react";
import DonationAmount from "./DonationAmount";

export const DONATE_FORM_STEPS = {
    AMOUNT: 0,
    DETAILS: 1,
}

const DonationContext = React.createContext<null | {
    step: number;
    setStep: (step: number) => void;
}>(null);

export const useDonation = () => {
    const context = React.useContext(DonationContext);
    if (!context) {
        throw new Error(`useDonation must be used within a DonationProvider`);
    }
    return context;
}

export default function DonateForm() {
    const [step, setStep] = useState(DONATE_FORM_STEPS.AMOUNT);

    const [info, setInfo] = useState({
        amount: '',
        displayName: '',
        email: '',
    })

    const value = { step, setStep };
    return(
        <DonationContext.Provider value={value}>
            {step === DONATE_FORM_STEPS.AMOUNT && (
                <DonationAmount />
            )}
        </DonationContext.Provider>
    )
}