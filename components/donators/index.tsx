import { twMerge } from "tailwind-merge";
import DonationList from "./DonationList";
import { APIRequest } from "@/utils/requests";

export default async function Donators({ className, listClassName }: {
    className?: string;
    listClassName?: string;
}) {
    const donators = await APIRequest.getDonators();
    return(
        <div className={twMerge(
            "border-[1px] border-secondary rounded-lg",
            className,
        )}>
            <span className="block p-3 font-semibold">
                Recent donations
            </span>
            <DonationList 
                initialDonators={donators}
                className={listClassName}
            />
        </div>
    )
}