import { twMerge } from "tailwind-merge";
import { RewardGroupItem } from ".";

export default function RewardItem({ title, text, icon }: RewardGroupItem) {
    return(
        <li className="p-4 flex items-start gap-4 @2xl:last:odd:col-span-2 bg-primary">
            <div className="min-w-10 aspect-square p-2 flex items-center justify-center rounded-full bg-secondary">
                {icon}
            </div>
            <div>
                <span className="mb-1 block text-lg leading-6 font-bold">{title}</span>
                <p className="text-sm">{text}</p>
            </div>
        </li>
    )
}