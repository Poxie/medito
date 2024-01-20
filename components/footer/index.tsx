import Image from "next/image";
import NavigationTabs from "../navigation-tabs";

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
                <NavigationTabs />
            </div>
        </footer>
    )
}