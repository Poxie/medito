import { twMerge } from "tailwind-merge";
import RewardTier from "./RewardGroup";
import rewards from '@/assets/data/tiers/index.json';

export default function Rewards({ className }: {
    className?: string;
}) {
    return(
        <ul className={twMerge(
            "grid gap-3",
            className,
        )}>
            {rewards.map((group, index) => (
                <RewardTier 
                    {...group}
                    index={index}
                    key={group.title}
                />
            ))}
        </ul>
    )
}