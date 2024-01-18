import { twMerge } from "tailwind-merge";

export default function Chips({ chips, onChipClick, className, chipClassName, activeChip }: {
    chips: { id: string; text: string; }[];
    onChipClick: (id: string) => void;
    activeChip?: string;
    className?: string;
    chipClassName?: string;
}) {
    return(
        <ul className={twMerge(
            "flex gap-2",
            className,
        )}>
            {chips.map(chip => (
                <li className="flex-1" key={chip.id}>
                    <button 
                        type="button"
                        onClick={() => onChipClick(chip.id)}
                        className={twMerge(
                            "w-full px-4 py-3 text-sm bg-secondary border-[1px] border-secondary rounded-md transition-colors hover:bg-tertiary",
                            activeChip === chip.id && "bg-tertiary",
                            chipClassName,
                        )}
                    >
                        {chip.text}
                    </button>
                </li>
            ))}
        </ul>
    )
}