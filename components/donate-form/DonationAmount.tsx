import { useState } from "react";
import Input from "../input";
import Chips from "../chips";
import Button from "../button";
import { DONATE_FORM_STEPS, useDonation } from ".";
import { useTiers } from "@/contexts/tiers";

export default function DonationAmount() {
    const { setActiveTierId } = useTiers();
    const { setStep, updateInfo, info } = useDonation();

    const [message, setMessage] = useState('');

    const { amount } = info;
    
    const onAmountChange = (value: string) => {
        setMessage('');
        updateInfo('amount', value);
        setActiveTierId(null);
    }
    const onNext = (e: React.FormEvent) => {
        e.preventDefault();

        const isInteger = /^\d+$/.test(amount);
        if(!isInteger || Number(amount) <= 0) {
            setMessage('Please enter a valid amount.');
            return;
        }

        updateInfo('amount', amount);
        setStep(DONATE_FORM_STEPS.DETAILS);
    }

    return(
        <form onSubmit={onNext}>
            <div className="flex">
                <div className="px-5 flex items-center bg-secondary border-[1px] border-secondary rounded-l-lg text-secondary">
                    <span>
                        $
                    </span>
                </div>
                <Input 
                    className="rounded-l-none border-l-0"
                    placeholder="Amount"
                    onChange={onAmountChange}
                    value={amount}
                />
            </div>
            <Chips 
                className="mt-2"
                chips={[
                    { id: '5', text: '$5' },
                    { id: '10', text: '$10' },
                    { id: '20', text: '$20' },
                ]}
                onChipClick={onAmountChange}
            />
            {message && (
                <span className="block mt-2 -mb-2 text-red-500 text-sm">
                    {message}
                </span>
            )}
            <Button
                onClick={() => {}}
                className="mt-4 w-full"
            >
                Next
            </Button>
        </form>
    )
}