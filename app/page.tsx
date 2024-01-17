import Contact from '@/components/contact'
import Donate from '@/components/donate'
import MobileDonate from '@/components/donate/MobileDonate'
import FrequentlyAskedQuestions from '@/components/faq'
import Header from '@/components/header'
import Rewards from '@/components/rewards'
import SectionHeader from '@/components/section-header'
import Image from 'next/image'

export default function Home() {
  return (
    <main className="lg:pt-16 lg:w-main lg:max-w-main mx-auto flex items-start gap-12">
      <div>
        <MobileDonate className="mb-8" />
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
      <Donate className="hidden lg:block" />
    </main>
  )
}
