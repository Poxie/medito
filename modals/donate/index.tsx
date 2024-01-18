import DonateForm, { DONATE_FORM_STEPS } from "@/components/donate-form";
import ModalHeader from "../ModalHeader";
import Rewards from "@/components/rewards";
import { useState } from "react";
import { twMerge } from "tailwind-merge";

export default function DonateModal({ amount }: {
    amount?: string;
}) {
    const [step, setStep] = useState(DONATE_FORM_STEPS.AMOUNT);
    return(
        <>
            <ModalHeader>
                Make a change
            </ModalHeader>
            {step === DONATE_FORM_STEPS.AMOUNT && (
                <Rewards className="p-4 overflow-auto md:max-h-[60dvh]" />
            )}
            <div className={twMerge(
                "p-4 sticky bottom-0 bg-primary",
                step === DONATE_FORM_STEPS.AMOUNT && "border-t-[1px] border-t-secondary",
            )}>
                <DonateForm 
                    defaultAmount={amount} 
                    onStepChange={setStep}
                />
            </div>
        </>
    )
}