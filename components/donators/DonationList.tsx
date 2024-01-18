"use client";
import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { twMerge } from "tailwind-merge";
import { Donator } from "@/types";
import { getRelativeTimeString } from "@/utils";

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
            "max-h-donation-list overflow-hidden",
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
                            {getRelativeTimeString(donator.timestamp)}
                        </span>
                    </motion.li>
                ))}
            </AnimatePresence>
        </ul>
    )
}