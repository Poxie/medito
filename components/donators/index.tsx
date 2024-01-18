import { twMerge } from "tailwind-merge";
import DonationList from "./DonationList";

const DONATORS = [
    { name: 'Poxen', amount: 100, timestamp: Date.now() - 500000 },
    { name: 'Nick', amount: 5, timestamp: Date.now() - 750000 },
    { name: 'Ashley', amount: 12, timestamp: Date.now() - 1700000 },
    { name: 'Emily', amount: 1, timestamp: Date.now() - 500000000 },
]
export type DonatorType = typeof DONATORS[number];

const getDonators = async () => {
    const donators = await new Promise(res => res(DONATORS));
    return donators as DonatorType[];
}

export default async function Donators({ className }: {
    className?: string;
}) {
    const donators = await getDonators();
    return(
        <div className={twMerge(
            "border-[1px] border-secondary rounded-lg",
            className,
        )}>
            <span className="block p-3 font-semibold">
                Recent donations
            </span>
            <DonationList 
                initialDonators={donators}
            />
        </div>
    )
}