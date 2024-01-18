import Contact from '@/components/contact'
import Donate from '@/components/donate'
import MobileDonate from '@/components/donate/MobileDonate'
import Donators from '@/components/donators'
import FrequentlyAskedQuestions from '@/components/faq'
import Header from '@/components/header'
import Rewards from '@/components/rewards'
import SectionHeader from '@/components/section-header'

export default function Home() {
  return (
    <main className="lg:pt-16 lg:w-main lg:max-w-main mx-auto flex items-start gap-12">
      <div className="w-full">
        <Donators 
          className='lg:hidden [&>span]:hidden w-full'
          listClassName='flex whitespace-nowrap w-full overflow-x-auto'
        />
        <MobileDonate className="mb-6 lg:hidden" />
        <Header className="mx-auto max-w-main lg:max-w-[unset]" />
        <div className="py-16 mx-auto max-w-main lg:max-w-[unset]">
          <SectionHeader className="mb-3">
            Donation rewards
          </SectionHeader>
          <Rewards />
          <SectionHeader className="mt-12 mb-3">
            Frequently Asked Questions
          </SectionHeader>
          <FrequentlyAskedQuestions />
          <SectionHeader className="mt-12 mb-3">
            Still got questions?
          </SectionHeader>
          <Contact />
        </div>
      </div>
      <div className='hidden lg:block'>
        <Donate />
        <Donators className="mt-2" />
      </div>
    </main>
  )
}
