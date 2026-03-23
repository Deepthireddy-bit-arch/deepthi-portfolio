'use client'
import { useState } from 'react'
import PageLoader from './pageLoader'


export default function LoaderProvider({ children }: { children: React.ReactNode }) {
  const [loaded, setLoaded] = useState(false)

  return (
    <>

      <PageLoader onComplete={() => setLoaded(true)} />


      <div
        style={{
          opacity: loaded ? 1 : 0,
          transition: 'opacity 0.4s ease',
          pointerEvents: loaded ? 'auto' : 'none',
        }}
      >
        {children}
      </div>
    </>
  )
}