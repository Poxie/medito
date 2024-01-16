import DonateForm from "@/components/donate-form";
import ModalHeader from "../ModalHeader";

export default function DonateModal() {
    return(
        <div>
            <ModalHeader>
                Make a change
            </ModalHeader>
            <div className="p-4">
                <DonateForm />
            </div>
        </div>
    )
}