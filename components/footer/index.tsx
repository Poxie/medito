import Image from "next/image";

const FOOTER_TABS = [
    { text: 'Rewards' },
    { text: 'FAQ' },
    { text: 'Contact' },
]
export default function Footer() {
    return(
        <footer className="py-6 border-t-[1px] border-t-secondary">
            <div className="w-main max-w-main mx-auto flex items-center justify-between">
                <Image 
                    src="/logo.svg"
                    width={120}
                    height={33}
                    alt="Logo"
                />
                <ul className="flex gap-4">
                    {FOOTER_TABS.map(({ text }) => (
                        <li key={text}>
                            {text}
                        </li>
                    ))}
                </ul>
            </div>
        </footer>
    )
}