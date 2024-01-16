import DonateForm from "@/components/donate-form";

export default function DonateModal() {
    return(
        <div>
            <h1 className="text-xl font-medium p-4 border-b-[1px] border-b-secondary">
                Make a change
            </h1>
            <div className="p-4">
                <DonateForm />
            </div>
        </div>
    )
}