"use client";
import { goToSection } from "@/utils";

const TABS = [
    { id: 'rewards', text: 'Rewards' },
    { id: 'faq', text: 'FAQ' },
    { id: 'contact', text: 'Contact' },
] as const;
export default function NavigationTabs() {
    return(
        <nav>
            <ul className="flex gap-4">
                {TABS.map(tab => (
                    <li key={tab.id}>
                        <button 
                            type="button"
                            onClick={() => goToSection(tab.id)}
                            className="text-sm font-medium text-secondary hover:text-primary transition-colors"
                        >
                            {tab.text}
                        </button>
                    </li>
                ))}
            </ul>
        </nav>
    )
}