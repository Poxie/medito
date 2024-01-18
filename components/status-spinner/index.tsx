import './style.css';
import { twMerge } from "tailwind-merge";

export default function StatusSpinner({ status }: {
    status: 'loading' | 'error' | 'success';
}) {
    return(
        <div className={twMerge(
            "spinner",
            status === 'error' && 'load-error',
            status === 'success' && 'load-success',
        )}>
            <div className="checkmark draw" />
            <div className="error draw" />
        </div>
    )
}