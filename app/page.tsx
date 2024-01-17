import Contact from '@/components/contact'
import Donate from '@/components/donate'
import FrequentlyAskedQuestions from '@/components/faq'
import Header from '@/components/header'
import Rewards from '@/components/rewards'
import SectionHeader from '@/components/section-header'
import Image from 'next/image'

export default function Home() {
  return (
    <main className="pt-16 w-main max-w-main mx-auto flex items-start gap-12">
      <div>
        <Header />
        <div className="py-16">
          <div>
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
      </div>
      <Donate />
    </main>
  )
}
