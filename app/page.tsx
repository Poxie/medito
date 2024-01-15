import Donate from '@/components/donate'
import Header from '@/components/header'
import Image from 'next/image'

export default function Home() {
  return (
    <main className="pt-16 w-main max-w-main mx-auto flex gap-16">
      <div>
        <Header />
      </div>
      <Donate />
    </main>
  )
}
