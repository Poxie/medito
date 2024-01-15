import DonationProgress from "./DonationProgress";
import DonateForm from "../donate-form";

export default function Donate() {
    return(
        <div className="min-w-donate w-donate rounded-lg border-[1px] border-secondary">
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