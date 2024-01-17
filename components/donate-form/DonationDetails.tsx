import { useState } from "react";
import Input from "../input";
import Button from "../button";
import { DONATE_FORM_STEPS, useDonation } from ".";

export default function DonationDetails() {
    const { setStep, updateInfo, info } = useDonation();
    const [message, setMessage] = useState('');

    const goBack = () => setStep(DONATE_FORM_STEPS.AMOUNT);
    const onNext = (e: React.FormEvent) => {
        e.preventDefault();

        const invalidProps = Object.entries(info).filter(([key, value]) => !value);
        if(invalidProps.length) {
            setMessage('Please fill in all fields.');
            return;
        };
    }
    const onPropertyChange = (key: keyof typeof info, value: string) => {
        updateInfo(key, value);
        setMessage('');
    }

    const amount = Number(info.amount).toLocaleString('default', { style: 'currency', currency: 'USD' });
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
                Donate {amount}
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