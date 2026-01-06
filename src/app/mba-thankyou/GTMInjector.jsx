"use client"

import { useEffect } from "react"

export default function GTMInjector() {
  useEffect(() => {
    // Only run on client side
    if (typeof window === "undefined") return

    // Check if GTM is already injected to avoid duplicates
    if (document.getElementById("gtm-script-mba")) return

    // Inject GTM script into head as high as possible
    const script = document.createElement("script")
    script.id = "gtm-script-mba"
    script.innerHTML = `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-MH7G66FX');`

    // Insert as high as possible in head (before other scripts)
    const head = document.head || document.getElementsByTagName("head")[0]
    const firstScript = head.querySelector("script")
    if (firstScript) {
      head.insertBefore(script, firstScript)
    } else if (head.firstChild) {
      head.insertBefore(script, head.firstChild)
    } else {
      head.appendChild(script)
    }
  }, [])

  return null // This component doesn't render anything
}
