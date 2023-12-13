import { buttonVariants } from '@/components/ui/button'
import Link from 'next/link'
import React from 'react'

const Page = () => {
  return (
    <div className='flex flex-col items-center justify-center'>Profile poage
      <Link href={'/'} className={buttonVariants()}>Home</Link>
    </div>
  )
}

export default Page
