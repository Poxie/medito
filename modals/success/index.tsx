import ModalHeader from "../ModalHeader";
import { useEffect, useState } from "react";
import StatusSpinner from "@/components/status-spinner";
import { motion } from "framer-motion";
import { getCurrencyString } from "@/utils";
import { APIRequest } from "@/utils/requests";

export default function SuccessModal({ sessionId }: {
    sessionId: string;
}) {
    const [status, setStatus] = useState<{
        status: 'loading' | 'error' | 'success';
        statusText: string | null;
    }>({
        status: 'loading',
        statusText: null,
    });

    useEffect(() => {
        APIRequest.getDonationSession(sessionId)
            .then(data => {
                setStatus({
                    status: 'success',
                    statusText: `Thank you for your ${getCurrencyString(data.amount, 1, data.currency)} donation, ${data.name}!`,
                });
            })
            .catch(error => {
                setStatus({
                    status: 'error',
                    statusText: 'Failed to confirm donation.',
                });
            })
    }, [sessionId]);

    return(
        <>
            <ModalHeader>
                Donation Confirmation
            </ModalHeader>
            <div className="p-8 grid place-items-center overflow-hidden">
                <StatusSpinner status={status.status} />
                <motion.span 
                    className="text-center text-lg"
                    initial={{ opacity: 0, translateY: 24 }}
                    animate={status.status === 'loading' ? 
                        { opacity: 0, translateY: 48, marginTop: -24 } : 
                        { opacity: 1, translateY: 0, marginTop: 16 }
                    }
                    transition={{ duration: .3 }}
                >
                    {status.statusText}
                </motion.span>
            </div>
        </>
    )
}