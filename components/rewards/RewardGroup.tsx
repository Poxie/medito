"use client";
import { useModal } from "@/contexts/modal";
import Button from "../button";
import RewardItem from "./RewardItem";
import DonateModal from "@/modals/donate";
import { RewardGroup } from "@/assets/data/tiers/types";
import { useTiers } from "@/contexts/tiers";
import { twMerge } from "tailwind-merge";

export default function RewardTier({ id, amount, title, rewards, index }: RewardGroup & {
    index: number;
}) {
    const { activeTier, setActiveTier } = useTiers();
    const { setModal } = useModal();

    const isActive = activeTier === id;

    const onSelectClick = () => {
        setActiveTier(isActive ? null : id);
    }

    return(
        <li className={twMerge(
            "@container border-[1px] border-secondary rounded-lg hover:shadow-md transition-[box-shadow,border-color] overflow-hidden",
            isActive && "border-c-primary shadow-success hover:shadow-success",
        )}>
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
                    onClick={onSelectClick}
                    className="py-2 px-3 -m-1 text-sm font-bold rounded-md whitespace-nowrap"
                    buttonType={!isActive ? "primary" : "secondary"}
                >
                    {isActive ? 'Deselect tier' : 'Select tier'}
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