"use client"

import { GoogleAnalytics, GoogleTagManager } from "@/lib/analytics"

export function AnalyticsWrapper() {
  const GA_ID = process.env.NEXT_PUBLIC_GA_ID
  const GTM_ID = process.env.NEXT_PUBLIC_GTM_ID

  // Don't render anything if no analytics IDs are configured
  if (!GA_ID && !GTM_ID) {
    return null
  }

  return (
    <>
      {GA_ID && <GoogleAnalytics gaId={GA_ID} />}
      {GTM_ID && <GoogleTagManager gtmId={GTM_ID} />}
    </>
  )
}
