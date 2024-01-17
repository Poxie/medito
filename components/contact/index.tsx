"use client";
import { useState } from "react";
import Input from "../input";
import Button from "../button";
import { twMerge } from "tailwind-merge";

const getInitialInfo = () => ({
    name: '',
    email: '',
    message: '',
});
export default function Contact() {
    const [info, setInfo] = useState(getInitialInfo());
    const [message, setMessage] = useState<null | {
        type: 'error' | 'success';
        message: string;
    }>(null);
    const [loading, setLoading] = useState(false);

    const updateInfo = (key: keyof typeof info, value: string) => {
        setInfo(prev => ({
            ...prev,
            [key]: value,
        }));
        setMessage(null);
    }

    const showSuccessMessage = (message: string) => setMessage({ message, type: 'success' });
    const showErrorMessage = (message: string) => setMessage({ message, type: 'error' });
    const onSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        
        if(loading) return;

        if(!info.name || !info.email || !info.message) {
            showErrorMessage('Please fill out all fields.');
            return;
        }

        setLoading(true);
        const response: Response = await new Promise((res, rej) => {
            setTimeout(() => {
                res(new Response());
            }, 1000);
        });

        if(!response.ok) {
            showErrorMessage('Something went wrong. Please try again later.');
            setLoading(false);
            return;
        }

        showSuccessMessage('Message sent!');
        setInfo(getInitialInfo());
        setLoading(false);
    }

    return(
        <form 
            className="grid"
            onSubmit={onSubmit}
        >
            <div className="mb-2 w-full flex gap-2">
                <Input 
                    onChange={text => updateInfo('name', text)}
                    value={info.name}
                    placeholder="Name"
                />
                <Input 
                    onChange={text => updateInfo('email', text)}
                    value={info.email}
                    placeholder="Email"
                />
            </div>
            <Input 
                onChange={text => updateInfo('message', text)}
                value={info.message}
                placeholder="Message"
                type="textarea"
            />
            <div className="mt-3 flex justify-end">
                {message && (
                    <span className={twMerge(
                        "flex-1 block",
                        message.type === 'error' ? 'text-red-500' : 'text-green-500',
                    )}>
                        {message.message}
                    </span>
                )}
                <Button 
                    onClick={() => {}}
                    disabled={loading}
                >
                    {!loading ? 'Send Message' : 'Sending...'}
                </Button>
            </div>
        </form>
    )
}