import Image from 'next/image'

import Navbar from '@/components/molecules/navbar'
import TodayTasks from '@/components/molecules/today-tasks'

export default function Home() {
  return (
    <>
      <Navbar />
      <main id="page-home">
        <TodayTasks />
      </main>
    </>
  )
}
