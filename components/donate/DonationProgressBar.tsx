import { twMerge } from "tailwind-merge";

export default function DonationProgressBar({ percent }: {
    percent: number;
}) {
    const commonClassName = "absolute top-0 left-0 h-full rounded-full";
    return(
        <div className="relative h-2">
            <div className={twMerge(
                commonClassName,
                "w-full bg-tertiary",
            )} />
            <div 
                className={twMerge(
                    commonClassName,
                    "bg-c-primary",
                )}
                style={{ width: `${percent}%` } }
            />
        </div>
    )
}