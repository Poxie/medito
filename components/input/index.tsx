import { twMerge } from "tailwind-merge";

export default function Input({ type='text', value, onChange, placeholder, focusOnMount, className }: {
    type?: 'text' | 'textarea';
    value: string;
    onChange: (value: string) => void;
    placeholder?: string;
    className?: string;
    focusOnMount?: boolean;
}) {
    const props = { 
        onChange: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => onChange(e.target.value), 
        className: twMerge(
            "w-full p-3 rounded-lg bg-secondary border-[1px] border-secondary",
            className,
        ),
        value, 
        placeholder,
        autoFocus: focusOnMount,
    };
    
    return type === 'text' ? <input {...props} /> : <textarea {...props} style={{ minHeight: 100 }} />
}