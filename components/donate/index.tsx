"use client";
import { useState } from "react";
import Input from "../input";
import DonationProgress from "./DonationProgress";

export default function Donate() {
    const [amount, setAmount] = useState('');

    return(
        <div className="min-w-donate w-donate rounded-lg border-[1px] border-secondary">
            <DonationProgress className="p-5 border-b-[1px] border-b-secondary" />
            <div className="p-5">
                <span className="block mb-2">
                    Make a change today.
                </span>
                <Input 
                    placeholder="Amount"
                    onChange={setAmount}
                    value={amount}
                />
            </div>
        </div>
    )
}