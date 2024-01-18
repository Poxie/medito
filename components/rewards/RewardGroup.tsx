"use client";
import { useModal } from "@/contexts/modal";
import Button from "../button";
import RewardItem from "./RewardItem";
import { RewardGroup } from "@/assets/data/tiers/types";
import { useTiers } from "@/contexts/tiers";
import { twMerge } from "tailwind-merge";
import { getCurrencyString } from "@/utils";

export default function RewardTier({ id, amount, title, rewards, index }: RewardGroup & {
    index: number;
}) {
    const { activeTier, setActiveTierId } = useTiers();
    const { setModal } = useModal();

    const isActive = activeTier?.id === id;

    const onSelectClick = () => {
        setActiveTierId(isActive ? null : id);
    }

    return(
        <li
            className={twMerge(
                "@container border-[1px] border-secondary rounded-lg hover:shadow-md transition-[box-shadow,border-color] overflow-hidden cursor-pointer",
                isActive && "border-c-primary shadow-success hover:shadow-success",
            )}
            onClick={onSelectClick}
        >
            <div className="p-4 flex justify-between items-start gap-1 border-b-[1px] border-b-secondary">
                <div className="flex items-center flex-wrap">
                    <span className="block text-lg font-medium mr-2">
                        {getCurrencyString(amount)} • {title}
                    </span>
                    {index !== 0 && (
                        <span className="text-secondary text-sm">
                            (and previous rewards)
                        </span>
                    )}
                </div>
                <button 
                    className={twMerge(
                        "w-7 aspect-square flex justify-center items-center rounded-full border-2 border-secondary transition-[border-color]",
                        isActive && "border-c-primary",
                    )}
                    aria-label={isActive ? "Deselect tier" : "Select tier"}
                >
                    <span className={twMerge(
                        "block w-[70%] aspect-square bg-c-primary rounded-full scale-100 transition-transform",
                        !isActive && "scale-0",
                    )} />
                </button>
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