"use client";
import { useEffect, useState } from "react";
import { DonatorType } from ".";
import { AnimatePresence, motion } from "framer-motion";

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

export default function DonationList({ initialDonators }: {
    initialDonators: DonatorType[];
}) {
    const [donators, setDonators] = useState(initialDonators);

    // Setup webhook to listen for new donations
    useEffect(() => {
        const interval = setInterval(async () => {
            const res = await fetch('https://randomuser.me/api?nat=us');
            const { results } = await res.json();
            const user = results[0];

            const newDonator: DonatorType = {
                name: user.name.first,
                amount: Math.floor(Math.random() * 100),
                timestamp: Date.now(),
            }
            
            setDonators(prev => [newDonator, ...prev]);
        }, 12000);

        return () => clearInterval(interval);
    }, []);

    return(
        <ul className="overflow-hidden max-h-[225px]">
            <AnimatePresence>
                {donators.map(donator => (
                    <motion.li 
                        initial={{ translateY: -50 }}
                        animate={{ translateY: 0 }}
                        className="flex items-center justify-between p-3 border-t-[1px] border-b-secondary"
                        key={`${donator.name}-${donator.timestamp}`}
                    >
                        <div className="flex items-center gap-2">
                            <span className="text-sm font-medium">
                                {donator.name}
                                {' '}
                                <span className="text-secondary">
                                    donated
                                    {' '}
                                    ${donator.amount}
                                </span>
                            </span>
                        </div>
                        <span className="text-secondary text-sm">
                            {timeAgo(donator.timestamp)}
                        </span>
                    </motion.li>
                ))}
            </AnimatePresence>
        </ul>
    )
}