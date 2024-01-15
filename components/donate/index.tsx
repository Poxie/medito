import DonationProgress from "./DonationProgress";

export default function Donate() {
    return(
        <div className="min-w-donate w-donate rounded-lg border-[1px] border-secondary">
            <DonationProgress className="p-5 border-b-[1px] border-b-secondary" />
        </div>
    )
}