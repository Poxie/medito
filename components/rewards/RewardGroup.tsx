"use client";
import { useModal } from "@/contexts/modal";
import { RewardGroup } from ".";
import Button from "../button";
import RewardItem from "./RewardItem";
import DonateModal from "@/modals/donate";

export default function RewardTier({ amount, title, rewards, index }: RewardGroup & {
    index: number;
}) {
    const { setModal } = useModal();

    const openDonateModal = () => setModal(<DonateModal amount={amount} />);

    return(
        <li className="@container border-[1px] border-secondary rounded-lg hover:shadow-md transition-shadow overflow-hidden">
            <div className="p-4 flex justify-between items-start gap-1 border-b-[1px] border-b-secondary">
                <div className="flex items-center flex-wrap">
                    <span className="block text-lg font-medium mr-2">
                        ${amount} • {title}
                    </span>
                    {index !== 0 && (
                        <span className="text-secondary text-sm">
                            (and previous rewards)
                        </span>
                    )}
                </div>
                <Button 
                    onClick={openDonateModal}
                    className="py-2 px-3 -m-1 text-sm font-bold rounded-md whitespace-nowrap"
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