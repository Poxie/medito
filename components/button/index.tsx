import { twMerge } from "tailwind-merge";

export default function Button({ children, onClick, className, buttonType='primary' }: {
    onClick: () => void;
    children: React.ReactNode;
    className?: string;
    buttonType?: "primary" | "secondary";
}) {
    return(
        <button
            className={twMerge(
                "py-4 px-5 rounded-lg font-bold transition-colors",
                buttonType === "primary" ? "bg-c-primary hover:bg-c-secondary text-white" : "bg-secondary text-primary",
                className,
            )}
            onClick={onClick}
        >
            {children}
        </button>
    )
}