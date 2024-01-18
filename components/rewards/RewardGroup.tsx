import { RewardGroup } from ".";
import Button from "../button";
import RewardItem from "./RewardItem";

export default function RewardTier({ amount, title, rewards }: RewardGroup) {
    return(
        <li className="@container border-[1px] border-secondary rounded-lg hover:shadow-md transition-shadow overflow-hidden">
            <div className="p-4 flex justify-between items-center border-b-[1px] border-b-secondary">
                <span className="block text-lg font-medium">
                    ${amount} • {title}
                </span>
                <Button 
                    onClick={() => {}}
                    className="py-2 px-3 -my-2 -mx-3 text-sm font-bold rounded-md"
                >
                    Select tier
                </Button>
            </div>
            <ul className="grid @2xl:grid-cols-2 gap-[1px] bg-tertiary">
                {rewards.map((reward, index) => (
                    <RewardItem 
                        {...reward}
                        key={index}
                    />
                ))}
            </ul>
        </li>
    )
}