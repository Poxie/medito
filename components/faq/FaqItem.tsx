"use client";
import CloseIcon from "@/assets/icons/CloseIcon";
import { useState } from "react";
import { twMerge } from "tailwind-merge";

export default function FaqItem({ question, answer }: {
    question: string;
    answer: string;
}) {
    const [expanded, setExpanded] = useState(false);

    return(
        <li className="border-[1px] border-secondary rounded-lg">
            <button 
                className={twMerge(
                    "p-4 w-full flex items-center justify-between font-medium hover:bg-secondary transition-colors text-left",
                    expanded && 'bg-secondary',
                )}
                onClick={() => setExpanded(!expanded)}
            >
                {question}
                <CloseIcon 
                    className={twMerge(
                        "w-5 rotate-45 transition-transform",
                        expanded && "rotate-0",
                    )}
                />
            </button>
            <div 
                className="grid grid-rows-[0fr] transition-[grid-template-rows] duration-300 overflow-hidden bg-secondary"
                style={{
                    gridTemplateRows: expanded ? '1fr' : '0fr',
                }}
            >
                <div 
                    className={twMerge(
                        "min-h-0 px-4 transition-[padding,border-color] duration-300 border-t-[1px] border-t-transparent",
                        expanded && 'py-4 border-t-secondary',
                    )}
                >
                    {answer}
                </div>
            </div>
        </li>
    )
}