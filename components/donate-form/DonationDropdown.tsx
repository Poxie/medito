import currencies from '@/assets/data/currencies/index.json';
import { useDonation } from '.';
import Dropdown, { DropdownItem } from '../dropdown';
import { getCurrencySymbol } from '@/utils';

const currencyItems = currencies.map(currency => ({
    id: currency,
    text: currency,
}))

export default function DonationDropdown() {
    const { info: { currency }, updateInfo } = useDonation();

    const renderItem = (selectedItem: DropdownItem) => {
        return(
            <span>
                {getCurrencySymbol(selectedItem.id)}
            </span>
        )
    }

    return(
        <Dropdown 
            items={currencyItems}
            selectedId={currency}
            onSelect={currency => updateInfo('currency', currency)}
            className="bg-secondary border-[1px] border-secondary rounded-l-md"
            selectedClassName="px-5 h-full flex items-center text-secondary"
            renderSelectedItem={renderItem}
        />
    )
}