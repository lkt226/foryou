import Image from 'next/image'

import Navbar from '@/components/organisms/navbar'
import TodayTasks from '@/components/organisms/today-tasks'

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
