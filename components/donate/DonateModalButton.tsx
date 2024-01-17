"use client";
import { useModal } from "@/contexts/modal";
import Button from "../button";
import DonateModal from "@/modals/donate";

export default function DonateModalButton({ className }: {
    className?: string;
}) {
    const { setModal } = useModal();

    const openDonateModal = () => setModal(<DonateModal />);

    return(
        <Button
            onClick={openDonateModal}
            className={className}
        >
            Donate Now
        </Button>
    )
}