"use client";
import { useModal } from "@/contexts/modal";
import Button from "../button";
import DonateModal from "@/modals/donate";
import RewardsModal from "@/modals/rewards";

export default function HeaderButtons() {
    const { setModal } = useModal();

    const openDonateModal = () => setModal(<DonateModal />);
    const openRewardsModal = () => setModal(<RewardsModal />);

    return(
        <div className="mt-6 flex gap-3">
            <Button
                onClick={openDonateModal}
            >
                Donate Now
            </Button>
            <Button
                onClick={openRewardsModal}
                buttonType="secondary"
            >
                What do I get?
            </Button>
        </div>
    )
}