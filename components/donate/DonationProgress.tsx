import DonationProgressBar from "./DonationProgressBar";
import DonationCountUp from "./DonationCountUp";
import { getDonationProgress } from "@/utils/requests";


export default async function DonationProgress({ className }: {
    className?: string;
}) {
    const { current, goal } = await getDonationProgress();
    const percent = (current / goal) * 100;

    return(
        <div className={className}>
            <DonationCountUp 
                count={current}
                className="text-2xl text-[28px] font-bold"
            />
            {' '}
            <span className="text-secondary">
                / {goal.toLocaleString('default', { currency: 'USD', style: 'currency' })} this far.
            </span>
            
            <div className="mt-2">
                <DonationProgressBar percent={percent} />
            </div>
        </div>
    )
}