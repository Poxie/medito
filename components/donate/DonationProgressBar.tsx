"use client";
import { useEffect, useRef } from "react";
import { twMerge } from "tailwind-merge";

const TRANSITION_DURATION = 3000;
export default function DonationProgressBar({ percent }: {
    percent: number;
}) {
    const progressBar = useRef<HTMLDivElement>(null);
    const percentText = useRef<HTMLSpanElement>(null);

    useEffect(() => {
        if(!progressBar.current) return;
        progressBar.current.style.width = `${percent}%`;

        const timeout = setTimeout(() => {
            if(!percentText.current) return;
            percentText.current.style.transform = 'translateY(0)';
            percentText.current.style.opacity = '1';
        }, TRANSITION_DURATION);

        return () => clearTimeout(timeout);
    }, [percent]);

    const commonClassName = "absolute top-0 left-0 h-full rounded-full";
    return(
        <div>
            <div className="relative h-2 rounded-full overflow-hidden">
                <div className={twMerge(
                    commonClassName,
                    "w-full bg-tertiary",
                )} />
                <div 
                    className={twMerge(
                        commonClassName,
                        "bg-c-primary transition-[width] duration-[3000ms] ease-in-out",
                    )}
                    style={{ width: '0%' }}
                    ref={progressBar}
                />
            </div>
            <span 
                className="block mt-2 text-secondary text-sm opacity-0 translate-y-2 transition-[opacity,transform] duration-500"
                ref={percentText}
            >
                We are {Math.floor(percent)}% of the way to our goal!
            </span>
        </div>
    )
}