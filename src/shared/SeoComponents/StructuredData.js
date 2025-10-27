'use client'
import { useEffect } from 'react'

export const StructuredData = ({ data }) => {
    useEffect(() => {
        // Find or create the script tag
        let script = document.querySelector(`script[type="application/ld+json"]`)

        if (!script) {
            script = document.createElement('script')
            script.type = 'application/ld+json'
            document.head.appendChild(script)
        }

        // Update the content
        script.textContent = JSON.stringify(data)

        // Cleanup on unmount
        return () => {
            if (script && script.parentNode) {
                script.parentNode.removeChild(script)
            }
        }
    }, [data])

    return null
}

