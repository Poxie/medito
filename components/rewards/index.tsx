import RewardTier from "./RewardGroup";
import rewards from '@/assets/data/tiers/index.json';

export default function Rewards() {
    return(
        <ul className="grid gap-3">
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