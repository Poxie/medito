"use client";
import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { twMerge } from "tailwind-merge";
import { Donator } from "@/types";

const timeAgo = (timestamp: number) => {
    const currentTime = Date.now();
    const timeDifference = currentTime - timestamp;
    const minutes = Math.floor(timeDifference / 60000);
    const hours = Math.floor(timeDifference / 3600000);
    const days = Math.floor(timeDifference / 86400000);

    if(minutes < 1) {
        return 'Just now';
    } else if (minutes < 60) {
        return `${minutes}m ago`;
    } else if (hours < 24) {
        return `${hours}h ago`;
    } else {
        return `${days}d ago`;
    }
};

const MAX_DONATOR_COUNT = 10;
export default function DonationList({ initialDonators, className }: {
    initialDonators: Donator[];
    className?: string;
}) {
    const [donators, setDonators] = useState(initialDonators);

    // Setup webhook to listen for new donations
    useEffect(() => {
        const interval = setInterval(async () => {
            const res = await fetch('https://randomuser.me/api?nat=us');
            const { results } = await res.json();
            const user = results[0];

            const newDonator: Donator = {
                name: user.name.first,
                amount: Math.floor(Math.random() * 100),
                timestamp: Date.now(),
            }
            
            setDonators(prev => [newDonator, ...prev]);
        }, 12000);

        return () => clearInterval(interval);
    }, []);

    return(
        <ul className={twMerge(
            "overflow-hidden max-h-[225px]",
            className,
        )}>
            <AnimatePresence>
                {donators.slice(0, MAX_DONATOR_COUNT).map(donator => (
                    <motion.li 
                        initial={{ translateY: -50 }}
                        animate={{ translateY: 0 }}
                        className="flex items-center justify-between gap-2 p-3 border-t-[1px] border-b-secondary"
                        key={`${donator.name}-${donator.timestamp}`}
                    >
                        <span className="text-sm font-medium">
                            {donator.name}
                            {' '}
                            <span className="text-secondary">
                                donated
                                {' '}
                                ${donator.amount}
                            </span>
                        </span>
                        <span className="text-secondary text-sm">
                            {timeAgo(donator.timestamp)}
                        </span>
                    </motion.li>
                ))}
            </AnimatePresence>
        </ul>
    )
}