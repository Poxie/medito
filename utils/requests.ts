import { DonationProgress, Donator, MessageProps } from "@/types";

// Mock function to get donation progress, i.e., current donations and goal donations.
// Should return an object with the 'current' and 'goal' properties.
const CURRENT_DONATIONS = 12424.9;
const GOAL_DONATIONS = 20000;
export const getDonationProgress = async () => {
    const data: DonationProgress = await new Promise(res => {
        res({
            current: CURRENT_DONATIONS,
            goal: GOAL_DONATIONS,
        })
    })
    return data;
}

// Mock function to get donator list.
// Should return an array of type Donator.
const DONATORS = [
    { name: 'Poxen', amount: 100, timestamp: Date.now() - 500000 },
    { name: 'Nick', amount: 5, timestamp: Date.now() - 750000 },
    { name: 'Ashley', amount: 12, timestamp: Date.now() - 1700000 },
    { name: 'Emily', amount: 1, timestamp: Date.now() - 500000000 },
]
export const getDonators = async () => {
    const donators: Donator[] = await new Promise(res => res(DONATORS));
    return donators;
}

// Mock function to send a message.
// Should return a Response object.
export const sendMessage = async ({ name, email, message }: MessageProps) => {
    const res = await new Promise((res, rej) => {
        setTimeout(() => {
            res(new Response());
        }, 1000);
    });
    return res as Response;
}

// Function to get a stripe checkout link based on amount.
export const getStripeLink = async (amount: string | number) => {
    const res = await fetch('/payments', {
        method: 'POST',
        body: JSON.stringify({ amount }),
        headers: {
            'Content-Type': 'application/json',
        }
    })
    const { url } = await res.json();

    return url;
}