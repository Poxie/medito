import { twMerge } from "tailwind-merge";

export default function Button({ children, onClick, className, buttonType='primary' }: {
    onClick: () => void;
    children: React.ReactNode;
    className?: string;
    buttonType?: "primary" | "secondary" | 'transparent';
}) {
    return(
        <button
            className={twMerge(
                "py-4 px-5 rounded-lg font-bold transition-colors",
                buttonType === "primary" && "bg-c-primary hover:bg-c-secondary text-white",
                buttonType === 'secondary' && "bg-secondary text-primary",
                buttonType === 'transparent' && 'text-secondary hover:bg-secondary',
                className,
            )}
            onClick={onClick}
        >
            {children}
        </button>
    )
}