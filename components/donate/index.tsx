"use client";
import { useState } from "react";
import Input from "../input";
import DonationProgress from "./DonationProgress";
import Chips from "../chips";
import Button from "../button";

export default function Donate() {
    const [amount, setAmount] = useState('');

    return(
        <div className="min-w-donate w-donate rounded-lg border-[1px] border-secondary">
            <DonationProgress className="p-5 border-b-[1px] border-b-secondary" />
            <div className="p-5">
                <span className="block mb-1">
                    Make a change today.
                </span>
                <Input 
                    placeholder="Amount"
                    onChange={setAmount}
                    value={amount}
                />
                <Chips 
                    className="mt-2"
                    chips={[
                        { id: '5', text: '$5' },
                        { id: '10', text: '$10' },
                        { id: '20', text: '$20' },
                    ]}
                    onChipClick={setAmount}
                />
                <Button
                    onClick={console.log}
                    className="mt-4 w-full"
                >
                    Next
                </Button>
            </div>
        </div>
    )
}