import { useState } from "react";
import Input from "../input";
import Chips from "../chips";
import Button from "../button";
import { useDonation } from ".";
import { useTiers } from "@/contexts/tiers";
import DonationChips from "./DonationChips";
import { getCurrencyString, getCurrencySymbol, isValidInteger } from "@/utils";
import DonationDropdown from './DonationDropdown';

const MAX_AMOUNT = 10000;
export default function DonationAmount() {
    const { setActiveTierId, } = useTiers();
    const { setStep, updateInfo, info, goToStripe } = useDonation();

    const [message, setMessage] = useState('');

    const { amount, currency } = info;
    
    const onAmountChange = (value: string) => {
        setMessage('');
        updateInfo('amount', value);
        setActiveTierId(null);
    }
    const onNext = (e: React.FormEvent) => {
        e.preventDefault();

        if(!isValidInteger(amount)) {
            setMessage('Please enter a valid amount.');
            return;
        }

        updateInfo('amount', amount);
        // setStep(DONATE_FORM_STEPS.DETAILS);

        goToStripe(error => {
            setMessage(error);
        });
    }

    return(
        <form onSubmit={onNext}>
            <div className="flex">
                <DonationDropdown />
                <Input 
                    className="rounded-md rounded-l-none border-l-0"
                    placeholder="Amount"
                    onChange={onAmountChange}
                    value={amount}
                />
            </div>
            <DonationChips className="mt-2" />
            <Chips
                className="mt-2"
                chips={[
                    { id: 'once', text: 'Once' },
                    { id: 'month', text: 'Monthly' },
                ]}
                activeChip={info.billingPeriod || 'once'}
                onChipClick={period => updateInfo('billingPeriod', period !== 'once' ? period : undefined)}
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
                Donate {isValidInteger(amount) && getCurrencyString(amount, info.currency)}
                {info.billingPeriod === 'month' && ' monthly'}
            </Button>
        </form>
    )
}