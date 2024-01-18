"use client";
import { useModal } from "@/contexts/modal";
import Button from "../button";
import DonateModal from "@/modals/donate";
import DonateModalButton from "../donate/DonateModalButton";

const REWARD_SECTION_OFFSET = 24;
const MOBILE_REWARD_SECTION_OFFSET = REWARD_SECTION_OFFSET - 166;
const MOBILE_THRESHOLD = 1024;
export default function HeaderButtons() {
    const { setModal } = useModal();

    const openDonateModal = () => setModal(<DonateModal />);
    const goToRewards = () => {
        const rewards = document.getElementById('rewards');
        if(rewards) {
            const isSmallScreen = window.innerWidth < MOBILE_THRESHOLD;
            const top = rewards.offsetTop + (isSmallScreen ? MOBILE_REWARD_SECTION_OFFSET : REWARD_SECTION_OFFSET);

            window.scrollTo({
                behavior: 'smooth',
                top,
            })
        }
    }

    return(
        <div className="mt-6 flex gap-3">
            <DonateModalButton 
                className="flex-1 lg:flex-[unset]"
            />
            <Button
                onClick={goToRewards}
                buttonType="secondary"
                className="flex-1 lg:flex-[unset]"
            >
                What do I get?
            </Button>
        </div>
    )
}