"use client";
import { use, useState } from "react";
import Input from "../input";
import DonationProgress from "./DonationProgress";
import Chips from "../chips";
import Button from "../button";

export default function Donate() {
    const [amount, setAmount] = useState('');
    const [message, setMessage] = useState('');

    const onAmountChange = (value: string) => {
        setAmount(value);
        setMessage('');
    }
    const onNext = () => {
        const isInteger = /^\d+$/.test(amount);
        if(!isInteger) {
            setMessage('Please enter a valid amount.');
            return;
        }
    }

    return(
        <div className="min-w-donate w-donate rounded-lg border-[1px] border-secondary">
            <DonationProgress className="p-5 border-b-[1px] border-b-secondary" />
            <div className="p-5">
                <span className="block mb-1">
                    Make a change today.
                </span>
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
                    onClick={onNext}
                    className="mt-4 w-full"
                >
                    Next
                </Button>
            </div>
        </div>
    )
}