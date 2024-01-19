export type DonationProgress = {
    current: number;
    goal: number;
} 
export type Donator = {
    name: string;
    amount: number;
    timestamp: number;
}
export type MessageProps = {
    name: string;
    email: string;
    message: string;
}