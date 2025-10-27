'use client'
import { useEffect } from 'react'

const SeoMetadata = ({
    title,
    description,
    path,
    metaImage,
    schemaType = "EducationalOrganization",
    additionalSchema = {},
}) => {
    const domainName = process.env.NEXT_PUBLIC_SITE_URL || "https://theaims.ac.in"

    useEffect(() => {
        // Update title
        if (title) {
            document.title = title
        }

        // Update or create meta description
        let metaDescription = document.querySelector('meta[name="description"]')
        if (!metaDescription) {
            metaDescription = document.createElement('meta')
            metaDescription.setAttribute('name', 'description')
            document.head.appendChild(metaDescription)
        }
        metaDescription.setAttribute('content', description || '')

        // Canonical link
        let link = document.querySelector('link[rel="canonical"]')
        if (!link) {
            link = document.createElement('link')
            link.setAttribute('rel', 'canonical')
            document.head.appendChild(link)
        }
        link.setAttribute('href', `${domainName}${path}`)

        // Open Graph tags
        const ogTags = [
            { property: 'og:type', content: 'website' },
            { property: 'og:title', content: title },
            { property: 'og:description', content: description },
            { property: 'og:url', content: `${domainName}${path}` },
            { property: 'og:site_name', content: 'AIMS Institutes' },
            { property: 'og:image', content: metaImage || '/images/aims-logo.png' },
        ]

        ogTags.forEach(tag => {
            let meta = document.querySelector(`meta[property="${tag.property}"]`)
            if (!meta) {
                meta = document.createElement('meta')
                meta.setAttribute('property', tag.property)
                document.head.appendChild(meta)
            }
            meta.setAttribute('content', tag.content)
        })

        // Twitter tags
        const twitterTags = [
            { name: 'twitter:card', content: 'summary_large_image' },
            { name: 'twitter:title', content: title },
            { name: 'twitter:description', content: description },
            { name: 'twitter:image', content: metaImage || '/images/aims-logo.png' },
        ]

        twitterTags.forEach(tag => {
            let meta = document.querySelector(`meta[name="${tag.name}"]`)
            if (!meta) {
                meta = document.createElement('meta')
                meta.setAttribute('name', tag.name)
                document.head.appendChild(meta)
            }
            meta.setAttribute('content', tag.content)
        })

        // JSON-LD Schema
        const schema = {
            "@context": "https://schema.org/",
            "@type": schemaType,
            "name": "AIMS Institutes",
            "url": `${domainName}${path}`,
            "description": description,
            "address": {
                "@type": "PostalAddress",
                "addressLocality": "Bangalore",
                "addressCountry": "IN"
            },
            ...additionalSchema,
        }

        let script = document.querySelector('script[type="application/ld+json"]')
        if (!script) {
            script = document.createElement('script')
            script.type = 'application/ld+json'
            document.head.appendChild(script)
        }
        script.textContent = JSON.stringify(schema)
    }, [title, description, path, metaImage, schemaType, additionalSchema, domainName])

    return null
}

export default SeoMetadata

