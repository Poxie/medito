import DonateForm from "@/components/donate-form";
import ModalHeader from "../ModalHeader";

export default function DonateModal({ amount }: {
    amount?: string;
}) {
    return(
        <div>
            <ModalHeader>
                Make a change
            </ModalHeader>
            <div className="p-4">
                <DonateForm defaultAmount={amount} />
            </div>
        </div>
    )
}