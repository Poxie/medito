import campaign from '@/assets/data/campaign/index.json';
import HeaderButtons from "./HeaderButtons";

export default function Header({ className }: {
    className?: string;
}) {
    const { title, description } = campaign;
    return(
        <header className={className}>
            <h1 className="text-3xl lg:text-4xl font-bold">
                {title}
            </h1>
            <div className="mt-3 flex flex-col gap-3 lg:text-lg text-secondary">
                {description.map((paragraph, index) => (
                    <p key={index}>
                        {paragraph}
                    </p>
                ))}
            </div>
            <HeaderButtons />
        </header>
    )
}