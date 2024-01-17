"use client";
import { AnimatePresence, motion } from "framer-motion";
import { createContext, useContext, useState } from "react";

const ModalContext = createContext<null | {
    setModal: (modal: React.ReactNode) => void;
    close: () => void;
}>(null);

export const useModal = () => {
    const context = useContext(ModalContext);
    if (!context) {
        throw new Error(`useModal must be used within a ModalProvider`);
    }
    return context;
}

export default function ModalProvider({ children }: {
    children: React.ReactNode;
}) {
    const [modal, setModal] = useState<React.ReactNode>(null);

    const _setModal = (modal: React.ReactNode) => {
        setModal(modal);
        document.body.style.overflow = 'hidden';
    }
    const close = () => {
        setModal(null);
        document.body.style.overflow = '';
    }

    const value = { close, setModal: _setModal };
    return(
        <ModalContext.Provider value={value}>
            {children}
            <div className="fixed inset-0 z-50 flex items-center justify-center pointer-events-none">
                <AnimatePresence>
                    {modal && (
                        <>
                        <motion.div 
                            exit={{ opacity: 0 }}
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            className="absolute inset-0 bg-black/50 pointer-events-auto"
                            onClick={close}
                        />
                        <motion.div 
                            exit={{ opacity: 0, translateY: 50, scale: 0.9 }}
                            initial={{ opacity: 0, translateY: 50, scale: 0.9 }}
                            animate={{ opacity: 1, translateY: 0, scale: 1 }}
                            transition={{ bounce: false, duration: 0.2 }}
                            className="[--width:500px] w-[--width] max-w-full max-h-[100dvh] overflow-auto relative z-10 bg-white rounded-lg pointer-events-auto"
                        >
                            {modal}
                        </motion.div>
                        </>
                    )}
                </AnimatePresence>
            </div>
        </ModalContext.Provider>
    )
}