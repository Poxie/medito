import { useState } from "react";
import Input from "../input";
import Button from "../button";
import { DONATE_FORM_STEPS, useDonation } from ".";
import { getCurrencyString } from "@/utils";

export default function DonationDetails() {
    const { setStep, updateInfo, info } = useDonation();
    const [message, setMessage] = useState('');

    const goBack = () => setStep(DONATE_FORM_STEPS.AMOUNT);
    const onNext = async (e: React.FormEvent) => {
        e.preventDefault();

        const invalidProps = Object.entries(info).filter(([key, value]) => !value);
        if(invalidProps.length) {
            setMessage('Please fill in all fields.');
            return;
        };

        const res = await fetch('/payments', {
            method: 'POST',
            body: JSON.stringify({ amount: info.amount  }),
            headers: {
                'Content-Type': 'application/json',
            }
        })
        const { url } = await res.json();
        
        window.location.href = url;
    }
    const onPropertyChange = (key: keyof typeof info, value: string) => {
        updateInfo(key, value);
        setMessage('');
    }

    return(
        <form onSubmit={onNext}>
            <Input 
                className="mb-2"
                placeholder="Display name"
                onChange={text => onPropertyChange('displayName', text)}
                value={info.displayName}
            />
            <Input 
                placeholder="Email"
                onChange={text => onPropertyChange('email', text)}
                value={info.email}
            />
            {message && (
                <span className="block mt-2 -mb-2 text-red-500 text-sm">
                    {message}
                </span>
            )}
            <Button 
                className="w-full mt-4"
                onClick={() => {}}
            >
                Donate {getCurrencyString(info.amount)}
            </Button>
            <Button 
                className="w-full "
                buttonType="transparent"
                onClick={goBack}
            >
                Go back
            </Button>
        </form>
    )
}