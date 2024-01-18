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