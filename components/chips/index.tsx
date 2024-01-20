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
            "p-1 flex bg-secondary rounded-md border-[1px] border-secondary",
            className,
        )}>
            {chips.map(chip => (
                <li className="flex-1" key={chip.id}>
                    <button 
                        type="button"
                        onClick={() => onChipClick(chip.id)}
                        className={twMerge(
                            "w-full py-2 rounded-md text-sm font-medium shadow-none transition-[box-shadow,background-color]",
                            activeChip === chip.id && "bg-primary shadow",
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