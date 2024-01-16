"use client";
import { useModal } from "@/contexts/modal";
import Button from "../button";
import DonateModal from "@/modals/donate";

export default function HeaderButtons() {
    const { setModal } = useModal();

    const openDonateModal = () => setModal(<DonateModal />);

    return(
        <div className="mt-6 flex gap-3">
            <Button
                onClick={openDonateModal}
            >
                Donate Now
            </Button>
            <Button
                onClick={console.log}
                buttonType="secondary"
            >
                What do I get?
            </Button>
        </div>
    )
}