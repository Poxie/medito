import { useState } from "react";
import Input from "../input";
import Chips from "../chips";
import Button from "../button";
import { DONATE_FORM_STEPS, useDonation } from ".";

export default function DonationAmount() {
    const { setStep, updateInfo } = useDonation();

    const [amount, setAmount] = useState('');
    const [message, setMessage] = useState('');

    const onAmountChange = (value: string) => {
        setAmount(value);
        setMessage('');
    }
    const onNext = (e: React.FormEvent) => {
        e.preventDefault();

        const isInteger = /^\d+$/.test(amount);
        if(!isInteger) {
            setMessage('Please enter a valid amount.');
            return;
        }

        updateInfo('amount', amount);
        setStep(DONATE_FORM_STEPS.DETAILS);
    }

    return(
        <form onSubmit={onNext}>
            <Input 
                placeholder="Amount"
                onChange={onAmountChange}
                value={amount}
            />
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