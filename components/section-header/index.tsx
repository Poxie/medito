import { twMerge } from "tailwind-merge";

export default function SectionHeader({ id, children, className }: {
    children: React.ReactNode;
    className?: string;
    id: string;
}) {
    return(
        <span 
            className={twMerge(
                "block relative after:h-[1px] after:w-full after:absolute after:top-2/4 after:-translate-y-2/4 after:left-0 after:z-0 after:bg-tertiary",
                className,
            )}
            id={id}
        >
            <span className="relative z-[1] pr-3 bg-primary font-medium">
                {children}
            </span>
        </span>
    )
}