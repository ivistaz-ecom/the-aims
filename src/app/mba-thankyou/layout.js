import GTMInjector from "./GTMInjector"

export const metadata = {
  // This layout is specific to mba-thankyou page
}

export default function MbaThankYouLayout({ children }) {
  return (
    <>
      {/* Google Tag Manager - Injects script into head as high as possible */}
      <GTMInjector />
      {/* Google Tag Manager (noscript) - Immediately after body opening tag */}
      <noscript>
        <iframe
          src="https://www.googletagmanager.com/ns.html?id=GTM-MH7G66FX"
          height="0"
          width="0"
          style={{ display: "none", visibility: "hidden" }}
        />
      </noscript>
      {children}
    </>
  )
}
