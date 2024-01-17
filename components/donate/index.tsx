import DonationProgress from "./DonationProgress";
import DonateForm from "../donate-form";
import { twMerge } from "tailwind-merge";

export default function Donate({ className }: {
    className?: string;
}) {
    return(
        <div className={twMerge(
            "min-w-donate w-donate rounded-lg border-[1px] border-secondary",
            className,
        )}>
            <DonationProgress className="p-5 border-b-[1px] border-b-secondary" />
            <div className="p-5">
                <span className="block mb-1">
                    Make a change, today.
                </span>
                <DonateForm />
            </div>
        </div>
    )
}