import { DonationProgress, Donator, MessageProps } from "@/types";

export const APIRequest = {
    // Mock function to get donation progress, i.e., current donations and goal donations.
    // Should return an object with the 'current' and 'goal' properties.
    getDonationProgress: async () => {
        const CURRENT_DONATIONS = 12424.9;
        const GOAL_DONATIONS = 20000;
        const data: DonationProgress = await new Promise(res => {
            res({
                current: CURRENT_DONATIONS,
                goal: GOAL_DONATIONS,
            })
        })
        return data;
    },

    // Mock function to get donator list.
    // Should return an array of type Donator.
    getDonators: async () => {
        const DONATORS = [
            { name: 'Poxen', amount: 100, timestamp: Date.now() - 500000 },
            { name: 'Nick', amount: 5, timestamp: Date.now() - 750000 },
            { name: 'Ashley', amount: 12, timestamp: Date.now() - 1700000 },
            { name: 'Emily', amount: 1, timestamp: Date.now() - 500000000 },
        ]
        const donators: Donator[] = await new Promise(res => res(DONATORS));
        return donators;
    },

    // Function to get specific donation session data.
    getDonationSession: async (sessionId: string) => {
        const res = await fetch(`/payments/${sessionId}`);
        if(!res.ok) throw new Error('Failed to confirm donation');
        
        return await res.json() as Donator;
    },

    // Function to get a stripe checkout link based on amount.
    getStripeLink: async (amount: string | number, currency: string, interval?: 'month') => {
        const res = await fetch('/payments', {
            method: 'POST',
            body: JSON.stringify({ amount, currency, interval }),
            headers: {
                'Content-Type': 'application/json',
            }
        })

        if(!res.ok) throw new Error((await res.json()).message);

        const { url } = await res.json();

        return url;
    },

    // Function to get currency exchange rates.
    getCurrencyRates: async () => {
        const res = await fetch('/currencies');
        if(!res.ok) throw new Error('Failed to get currency rates');

        return await res.json();
    },

    // Mock function to send a message.
    // Should return a Response object.
    sendMessage: async ({ name, email, message }: MessageProps) => {
        const res = await new Promise((res, rej) => {
            setTimeout(() => {
                res(new Response());
            }, 1000);
        });
        return res as Response;
    }
}