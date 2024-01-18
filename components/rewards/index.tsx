import CalendarIcon from "@/assets/icons/CalendarIcon"
import HeadphonesIcon from "@/assets/icons/Headphonesicon"
import HeartIcon from "@/assets/icons/HeartIcon"
import ListIcon from "@/assets/icons/ListIcon"
import RewardTier from "./RewardGroup";

const REWARD_TIERS = [
    { amount: '20', title: 'Speed Supporter',
        rewards: [
            { icon: <HeadphonesIcon className="w-5" />, title: 'Exclusive Guided Meditation Sessions', text: 'Donors receive access to a series of exclusive guided meditation sessions led by renowned mindfulness experts, accessible only to those who contribute to the fundraiser.' },
        ]
    },
    { amount: '30', title: 'Education Advocate',
        rewards: [
            { icon: <HeartIcon className="w-5" />, title: 'Personalized Thank-You Video from Beneficiaries', text: 'Donors receive access to a series of exclusive guided meditation sessions led by renowned mindfulness experts, accessible only to those who contribute to the fundraiser.' },
            { icon: <ListIcon className="w-5" />, title: 'Recognition on the ZenQuest Donor Wall', text: 'Donors can have their names or a personalized message displayed on the ZenQuest Donor Wall within the app, showcasing their commitment to promoting mindfulness and mental well-being.' },
        ]
    },
    { amount: '45', title: 'Scholar Builder',
        rewards: [
            { icon: <CalendarIcon className="w-5" />, title: 'Early Access to New Features', text: 'Donors receive access to a series of exclusive guided meditation sessions led by renowned mindfulness experts, accessible only to those who contribute to the fundraiser.' },
        ]
    },
];
export type RewardGroup = typeof REWARD_TIERS[0];
export type RewardGroupItem = RewardGroup['rewards'][0];

export default function Rewards() {
    return(
        <ul className="grid gap-3">
            {REWARD_TIERS.map((group, index) => (
                <RewardTier 
                    {...group}
                    index={index}
                    key={group.title}
                />
            ))}
        </ul>
    )
}