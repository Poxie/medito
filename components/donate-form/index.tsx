"use client";
import { useState } from "react";
import Button from "../button";
import Chips from "../chips";
import Input from "../input";

export default function DonateForm() {
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