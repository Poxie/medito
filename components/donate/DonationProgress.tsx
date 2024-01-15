import DonationProgressBar from "./DonationProgressBar";
import DonationCountUp from "./DonationCountUp";

const CURRENT_DONATIONS = 12424.9;
const GOAL_DONATIONS = 20000;

// This is a mock function that would be replaced with a real API call.
const getProgress = async () => {
    const data: {
        current: number;
        goal: number;
    } = await new Promise((res, rej) => {
        res({
            current: CURRENT_DONATIONS,
            goal: GOAL_DONATIONS,
        })
    })
    return data;
}

export default async function DonationProgress({ className }: {
    className?: string;
}) {
    const { current, goal } = await getProgress();
    const percent = (current / goal) * 100;

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