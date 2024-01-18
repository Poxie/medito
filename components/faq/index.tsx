import faq from '@/assets/data/faq/index.json';
import FaqItem from "./FaqItem"

export default function FrequentlyAskedQuestions() {
    return(
        <ul className="grid gap-2">
            {faq.map((question, i) => (
                <FaqItem
                    {...question}
                    key={i}
                />
            ))}
        </ul>
    )
}