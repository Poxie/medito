"use client";
import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { twMerge } from "tailwind-merge";
import { Donator } from "@/types";
import { getCurrencyString, getRelativeTimeString } from "@/utils";
import { useRouter, useSearchParams } from "next/navigation";
import { useModal } from "@/contexts/modal";
import SuccessModal from "@/modals/success";

const MAX_DONATOR_COUNT = 10;
export default function DonationList({ initialDonators, className }: {
    initialDonators: Donator[];
    className?: string;
}) {
    const router = useRouter();
    const { setModal } = useModal();
    const sessionId = useSearchParams().get('session_id');

    const [donators, setDonators] = useState(initialDonators);

    // Checking if current user has donated
    useEffect(() => {
        if(!sessionId) return;

        setModal(
            <SuccessModal 
                sessionId={sessionId}
            />
        )
        router.replace('/');
    }, [sessionId]);

    useEffect(() => {
        const interval = setInterval(async () => {
            const res = await fetch('https://randomuser.me/api?nat=us');
            const { results } = await res.json();
            const user = results[0];

            const newDonator: Donator = {
                name: user.name.first,
                amount: Math.floor(Math.random() * 100),
                currency: 'usd',
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
            <AnimatePresence initial={false}>
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
                                {getCurrencyString(donator.amount, 1, donator.currency)}
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