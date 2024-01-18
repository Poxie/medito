import tiers from "@/assets/data/tiers/index.json";
import Chips from "../chips";
import { useTiers } from "@/contexts/tiers";
import { getCurrencyString } from "@/utils";

export default function DonationChips({ className }: {
    className?: string;
}) {
    const { activeTier, setActiveTierId } = useTiers();

    const chips = tiers.map(tier => ({
        id: tier.id,
        text: getCurrencyString(tier.amount),
    }))
    return(
        <Chips 
            chips={chips}
            className={className}
            onChipClick={setActiveTierId}
            activeChip={activeTier?.id}
        />
    )
}