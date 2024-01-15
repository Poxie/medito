import { twMerge } from "tailwind-merge";

export default function Input({ type='text', value, onChange, placeholder, className }: {
    type?: 'text' | 'textarea';
    value: string;
    onChange: (value: string) => void;
    placeholder?: string;
    className?: string;
}) {
    const props = { 
        onChange: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => onChange(e.target.value), 
        className: twMerge(
            "w-full p-4 rounded-lg bg-secondary border-[1px] border-secondary",
            className,
        ),
        value, 
        placeholder, 
    };
    
    return type === 'text' ? <input {...props} /> : <textarea {...props} />
}