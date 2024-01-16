import CloseIcon from "@/assets/icons/CloseIcon";
import { useModal } from "@/contexts/modal";

export default function ModalHeader({ children }: {
    children: React.ReactNode;
}) {
    const { close } = useModal();

    return(
        <div className="p-4 flex items-center justify-between border-b-[1px] border-b-secondary">
            <span className="text-xl font-medium">
                {children}
            </span>
            <button 
                className="p-1 -m-1 hover:bg-secondary rounded-md"
                onClick={close}
                aria-label="Close modal"
            >
                <CloseIcon className="w-6" />
            </button>
        </div>
    )
}