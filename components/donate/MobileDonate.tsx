import { twMerge } from "tailwind-merge";
import DonationProgress from "./DonationProgress";
import DonateModalButton from "./DonateModalButton";

export default function MobileDonate({ className }: {
    className?: string;
}) {
    return(
        <div className={twMerge(
            "py-6 border-y-[1px] border-y-secondary bg-c-accent",
            className,
        )}>
            <div className="mx-auto max-w-main">
                <DonationProgress />
                <DonateModalButton className="w-full py-3 mt-3" />
            </div>
        </div>
    )
}