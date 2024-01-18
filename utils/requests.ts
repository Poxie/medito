import { DonationProgress, Donator } from "@/types";

// Mock function to get donation progress, i.e., current donations and goal donations
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

// Mock function to get donator list. Should return a list of recent donators
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