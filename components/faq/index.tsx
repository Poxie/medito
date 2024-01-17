import CloseIcon from "@/assets/icons/CloseIcon"
import FaqItem from "./FaqItem"

const QUESTIONS = [
    { question: 'What is the "Hope for Tomorrow" fundraiser all about?', answer: '"Hope for Tomorrow" is a fundraising initiative dedicated to empowering underprivileged communities through education. The goal is to build schools, provide scholarships, and create an environment where every child has the opportunity to learn and succeed, breaking the cycle of poverty.' },
    { question: 'How will my donation make a difference?', answer: 'Every dollar you contribute will directly fund the construction of schools, scholarships for deserving students, and the development of educational programs. Your support will create tangible and lasting change by providing access to education for those who need it most.' },
    { question: 'Can I choose where my donation goes specifically?', answer: 'While you can\'t designate funds to a specific project, rest assured that your donation will go towards building schools, offering scholarships, and creating a conducive learning environment. Our aim is to address the overall needs of underprivileged communities through education.' },
    { question: 'Is my donation tax-deductible?', answer: 'Yes, "Hope for Tomorrow" is a registered nonprofit organization, and your donation is tax-deductible. You will receive a receipt confirming your contribution, which you can use for tax purposes.' },
]

export default function FrequentlyAskedQuestions() {
    return(
        <ul className="grid gap-2">
            {QUESTIONS.map((question, i) => (
                <FaqItem
                    {...question}
                    key={i}
                />
            ))}
        </ul>
    )
}