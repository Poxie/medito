import CalendarIcon from "@/assets/icons/CalendarIcon"
import HeadphonesIcon from "@/assets/icons/Headphonesicon"
import HeartIcon from "@/assets/icons/HeartIcon"
import ListIcon from "@/assets/icons/ListIcon"

const REWARDS = [
    { icon: <HeadphonesIcon className="w-5" />, title: 'Exclusive Guided Meditation Sessions', text: 'Donors receive access to a series of exclusive guided meditation sessions led by renowned mindfulness experts, accessible only to those who contribute to the fundraiser.' },
    { icon: <HeartIcon className="w-5" />, title: 'Personalized Thank-You Video from Beneficiaries', text: 'Donors receive access to a series of exclusive guided meditation sessions led by renowned mindfulness experts, accessible only to those who contribute to the fundraiser.' },
    { icon: <ListIcon className="w-5" />, title: 'Recognition on the ZenQuest Donor Wall', text: 'Donors can have their names or a personalized message displayed on the ZenQuest Donor Wall within the app, showcasing their commitment to promoting mindfulness and mental well-being.' },
    { icon: <CalendarIcon className="w-5" />, title: 'Early Access to New Features', text: 'Donors receive access to a series of exclusive guided meditation sessions led by renowned mindfulness experts, accessible only to those who contribute to the fundraiser.' },
]

export default function Rewards() {
    return(
        <div className="@container">
            <ul className="grid @xl:grid-cols-2 gap-2">
                {REWARDS.map((reward, i) => (
                    <li 
                        className="p-4 flex items-start gap-4 border-[1px] border-secondary rounded-lg hover:shadow-md transition-shadow"
                        key={i}
                    >
                        <div className="min-w-10 aspect-square p-2 flex items-center justify-center rounded-full bg-secondary">
                            {reward.icon}
                        </div>
                        <div>
                            <span className="mb-1 block text-lg leading-6 font-bold">{reward.title}</span>
                            <p className="text-sm">{reward.text}</p>
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    )
}