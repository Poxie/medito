"use client";
import { useModal } from "@/contexts/modal";
import Button from "../button";
import DonateModal from "@/modals/donate";
import DonateModalButton from "../donate/DonateModalButton";
import { goToSection } from "@/utils";

export default function HeaderButtons() {
    const { setModal } = useModal();

    const openDonateModal = () => setModal(<DonateModal />);

    return(
        <div className="mt-6 flex gap-3">
            <DonateModalButton 
                className="flex-1 lg:flex-[unset]"
            />
            <Button
                onClick={() => goToSection('rewards')}
                buttonType="secondary"
                className="flex-1 lg:flex-[unset]"
            >
                What do I get?
            </Button>
        </div>
    )
}