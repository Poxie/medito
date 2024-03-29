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
        <MobileDonate className="mb-6 lg:hidden sticky top-0 bg-primary z-30" />
        <Header className="mx-auto max-w-main lg:max-w-[unset]" />
        <div className="py-16 mx-auto max-w-main lg:max-w-[unset]">
          <section>
            <SectionHeader 
              className="mb-3"
              id="rewards"
            >
              Donation rewards
            </SectionHeader>
            <Rewards />
          </section>
          <section>
            <SectionHeader 
              className="mt-12 mb-3"
              id="faq"
            >
              Frequently Asked Questions
            </SectionHeader>
            <FrequentlyAskedQuestions />
          </section>
          <section>
            <SectionHeader
              className="mt-12 mb-3"
              id="contact"
            >
              Still got questions?
            </SectionHeader>
            <Contact />
          </section>
        </div>
      </div>
      <div className='hidden lg:block sticky top-8'>
        <Donate />
        <Donators className="mt-2" />
      </div>
    </main>
  )
}
