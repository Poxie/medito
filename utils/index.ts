const SECTION_OFFSET = -40;
const MOBILE_SECTION_OFFSET = SECTION_OFFSET - 166;
const MOBILE_THRESHOLD = 1024;

export const goToSection = (section: 'rewards' | 'faq' | 'contact') => {
    const rewards = document.getElementById(section);
    if(rewards) {
        const isSmallScreen = window.innerWidth < MOBILE_THRESHOLD;
        const top = rewards.offsetTop + (isSmallScreen ? MOBILE_SECTION_OFFSET : SECTION_OFFSET);

        window.scrollTo({
            behavior: 'smooth',
            top,
        })
    }
}

export const getRelativeTimeString = (timestamp: number) => {
    const currentTime = Date.now();
    const timeDifference = currentTime - timestamp;
    const minutes = Math.floor(timeDifference / 60000);
    const hours = Math.floor(timeDifference / 3600000);
    const days = Math.floor(timeDifference / 86400000);

    if(minutes < 1) {
        return 'Just now';
    } else if (minutes < 60) {
        return `${minutes}m ago`;
    } else if (hours < 24) {
        return `${hours}h ago`;
    } else {
        return `${days}d ago`;
    }
}

export const getCurrencyString = (amount: string | number) => {
    const numberAmount = typeof amount === 'string' ? parseFloat(amount) : amount;
    
    let currencyString = numberAmount.toLocaleString('default', { currency: 'USD', style: 'currency' });
    if(currencyString.endsWith('.00')) {
        currencyString = currencyString.slice(0, -3);
    }

    return currencyString;
}

export const isValidInteger = (value: string) => {
    const isInteger = /^\d+$/.test(value);
    return isInteger && parseInt(value) > 0;
}