'use client'
import { useState } from 'react'
import PageLoader from './pageLoader'


export default function LoaderProvider({ children }: { children: React.ReactNode }) {
  const [loaded, setLoaded] = useState(false)

  return (
    <>
      {/* Loader sits on top until it finishes, then unmounts */}
      <PageLoader onComplete={() => setLoaded(true)} />

      {/* Site content — rendered underneath from the start so it's ready */}
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