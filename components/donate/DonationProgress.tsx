import DonationProgressBar from "./DonationProgressBar";
import DonationCountUp from "./DonationCountUp";

const CURRENT_DONATIONS = 12424.9;
const GOAL_DONATIONS = 20000;

export default function DonationProgress({ className }: {
    className?: string;
}) {
    const percent = (CURRENT_DONATIONS / GOAL_DONATIONS) * 100;

    return(
        <div className={className}>
            <DonationCountUp 
                count={CURRENT_DONATIONS}
                className="text-2xl text-[28px] font-bold"
            />
            {' '}
            <span className="text-secondary">
                / {GOAL_DONATIONS.toLocaleString('default', { currency: 'USD', style: 'currency' })} this far.
            </span>
            
            <div className="mt-2">
                <DonationProgressBar percent={percent} />
            </div>
        </div>
    )
}