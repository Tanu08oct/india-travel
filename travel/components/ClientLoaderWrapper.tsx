'use client'
import { useState, useEffect } from 'react'

export default function ClientLoaderWrapper({ children }: { children: React.ReactNode }) {
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    // 3-second delay to allow background assets to load
    const timer = setTimeout(() => setLoading(false), 3000)

    // Fix for Browser Back Button (bfcache)
    const handlePageShow = (event: PageTransitionEvent) => {
      if (event.persisted) {
        window.location.reload() 
      }
    }
    window.addEventListener('pageshow', handlePageShow)

    return () => {
      clearTimeout(timer)
      window.removeEventListener('pageshow', handlePageShow)
    }
  }, [])

  if (loading) {
    return (
      <div className="fixed inset-0 z-50 flex items-center justify-center bg-orange-600 transition-opacity duration-500">
        <h1 className="text-3xl md:text-5xl font-bold text-white tracking-[0.2em] animate-pulse text-center px-4">
          WELCOME TO iNCREDIBLE iNDIA
        </h1>
      </div>
    )
  }

  return <>{children}</>
}