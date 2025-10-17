"use client"

import { useEffect } from "react"
import { usePathname, useSearchParams } from "next/navigation"

declare global {
  interface Window {
    gtag: (command: string, targetId: string, config?: Record<string, any>) => void
    dataLayer: any[]
  }
}

export function GoogleAnalytics({ gaId }: { gaId: string }) {
  const pathname = usePathname()
  const searchParams = useSearchParams()

  useEffect(() => {
    if (!gaId || gaId.startsWith("G-XXX")) return

    const url = pathname + (searchParams?.toString() ? `?${searchParams.toString()}` : "")

    // Track page views
    if (typeof window.gtag !== "undefined") {
      window.gtag("config", gaId, {
        page_path: url,
      })
    }
  }, [pathname, searchParams, gaId])

  if (!gaId || gaId.startsWith("G-XXX")) {
    return null
  }

  return (
    <>
      <script async src={`https://www.googletagmanager.com/gtag/js?id=${gaId}`} />
      <script
        id="google-analytics"
        dangerouslySetInnerHTML={{
          __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            
            gtag('consent', 'default', {
              'analytics_storage': 'denied'
            });
            
            gtag('config', '${gaId}', {
              page_path: window.location.pathname,
            });
          `,
        }}
      />
    </>
  )
}

export function GoogleTagManager({ gtmId }: { gtmId: string }) {
  if (!gtmId || gtmId.startsWith("GTM-XXX")) {
    return null
  }

  return (
    <>
      <script
        id="google-tag-manager"
        dangerouslySetInnerHTML={{
          __html: `
            (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
            new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
            j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
            'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
            })(window,document,'script','dataLayer','${gtmId}');
          `,
        }}
      />
      <noscript>
        <iframe
          src={`https://www.googletagmanager.com/ns.html?id=${gtmId}`}
          height="0"
          width="0"
          style={{ display: "none", visibility: "hidden" }}
        />
      </noscript>
    </>
  )
}

// Event tracking helper functions
export const trackEvent = (eventName: string, eventParams?: Record<string, any>) => {
  if (typeof window !== "undefined" && window.gtag) {
    window.gtag("event", eventName, eventParams)
  }
}

export const trackCalculatorUse = (calculatorType: string, result: any) => {
  trackEvent("calculator_used", {
    calculator_type: calculatorType,
    result_value: result,
  })
}

export const trackFormSubmission = (formType: string, clientType: string) => {
  trackEvent("form_submission", {
    form_type: formType,
    client_type: clientType,
  })
}

export const trackCTAClick = (ctaLocation: string, ctaText: string) => {
  trackEvent("cta_click", {
    cta_location: ctaLocation,
    cta_text: ctaText,
  })
}
