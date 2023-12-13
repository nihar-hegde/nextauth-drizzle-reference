import { buttonVariants } from '@/components/ui/button'
import Link from 'next/link'

export default function Home() {
  return (
    <main className='flex flex-col gap-5 items-center justify-center'>
      <div>Home Page</div>
      <Link className={buttonVariants({ variant: 'default' })} href={'/dashboard'}>Dashboard</Link>
      <Link className={buttonVariants({ variant: 'default' })} href={'/profile'}>Profile</Link>
    </main>
  )
}
