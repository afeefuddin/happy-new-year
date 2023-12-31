"use client"
import Image from 'next/image'
import Timer from '@/Components/Timer'
import { useState,useRef } from 'react'
import { Fireworks } from '@fireworks-js/react'
import Link from 'next/link'


export default function Home() {
  const [newyear,setNewyear] = useState(false)
  const ref = useRef(null)

  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24">
      <div className='absolute bottom-3'>Made by <a href="https://github.com/afeefuddin">Afeef</a> in NEXT with 💙</div>
           {newyear &&  <Fireworks
        ref={ref}
        options={{ opacity: 0.5 }}
        style={{
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          position: 'fixed',
          background: '#000'
        }}
      />
}
      <div className='flex flex-col justify-center items-center gap-6 z-50'>
          <div className='text-6xl text'>Happy New Year 2024</div>
          <div><Timer newyear={newyear} setNewyear={setNewyear} /></div>
          <div><Link href={`/future`}><button className='button pl-6 pr-6 pt-2 pb-2 rounded'>Predict Your 2024</button></Link></div>
      </div>      
    </main>
  )
}
