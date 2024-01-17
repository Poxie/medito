import Rewards from "@/components/rewards";
import ModalHeader from "../ModalHeader";

export default function RewardsModal() {
    return(
        <>
        <ModalHeader>
            Rewards for donators
        </ModalHeader>
        <div className="p-4">
            <Rewards />
        </div>
        </>
    )
}