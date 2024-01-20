"use client";
import CountUp from "react-countup";

export default function DonationCountUp({ count }: {
    count: number;
}) {
    const currentDonationCount = count.toLocaleString('default', { currency: 'USD', style: 'currency' });
    return(
        <CountUp
            start={0}
            end={count}
            delay={0}
            duration={3}
            prefix="$"
            decimals={2}
        >
            {({ countUpRef }) => (
                <span 
                    aria-label={currentDonationCount}
                    className="text-2xl text-[28px] font-bold"
                    ref={countUpRef}
                >
                    $0.00
                </span>    
            )}
        </CountUp>
    )
}