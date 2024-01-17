"use client";
import { useModal } from "@/contexts/modal";
import Button from "../button";
import DonateModal from "@/modals/donate";
import RewardsModal from "@/modals/rewards";
import DonateModalButton from "../donate/DonateModalButton";

export default function HeaderButtons() {
    const { setModal } = useModal();

    const openDonateModal = () => setModal(<DonateModal />);
    const openRewardsModal = () => setModal(<RewardsModal />);

    return(
        <div className="mt-6 flex gap-3">
            <DonateModalButton 
                className="flex-1 lg:flex-[unset]"
            />
            <Button
                onClick={openRewardsModal}
                buttonType="secondary"
                className="flex-1 lg:flex-[unset]"
            >
                What do I get?
            </Button>
        </div>
    )
}