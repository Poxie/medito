import DonationProgressBar from "./DonationProgressBar";

const CURRENT_DONATIONS = 12424.9;
const GOAL_DONATIONS = 20000;

export default function DonationProgress({ className }: {
    className?: string;
}) {
    const percent = (CURRENT_DONATIONS / GOAL_DONATIONS) * 100;

    return(
        <div className={className}>
            <span className="text-2xl text-[28px] font-bold">
                {CURRENT_DONATIONS.toLocaleString('default', { currency: 'USD', style: 'currency' })}
            </span>
            {' '}
            <span className="text-secondary">
                / {GOAL_DONATIONS.toLocaleString('default', { currency: 'USD', style: 'currency' })} this far.
            </span>
            
            <div className="mt-2">
                <DonationProgressBar percent={percent} />
                <span className="block mt-2 text-right text-secondary text-sm">
                    We are {Math.floor(percent)}% of the way to our goal!
                </span>
            </div>
        </div>
    )
}