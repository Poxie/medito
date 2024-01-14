import Image from "next/image"

export default function Navbar() {
    return(
        <nav className="p-4 flex items-center justify-between border-b-[1px] border-b-secondary">
            <Image 
                src="/logo.svg"
                alt="Logo"
                width={128}
                height={77}
            />
            <ul className="flex gap-4">
                <li>Rewards</li>
                <li>FAQ</li>
                <li>Contact</li>
            </ul>
        </nav>
    )
}