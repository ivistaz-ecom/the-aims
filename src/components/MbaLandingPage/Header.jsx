"use client"
import React from "react"
import Image from "next/image"
import Link from "next/link"
import Button from "@/shared/Button"

export default function Header() {
  return (
    <header className="bg-white w-full shadow-sm">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between py-4 h-[12vh]">
          {/* Logo */}
          <div className="flex items-center">
            <Link href="/" className="flex items-center">
              <Image
                src="/AIMS-logo.svg"
                alt="AIMS INSTITUTES Logo"
                width={400}
                height={120}
                priority
                quality={100}
                className="h-12 w-auto lg:h-16 xl:h-20"
              />
            </Link>
          </div>

          {/* Contact Us Button */}
          <div className="flex items-center">
            <Button
              showReadMore={false}
              variant="placement"
              href="https://staging.theaims.ac.in/contact-us"
            >
              Contact Us
            </Button>
          </div>
        </div>
      </div>
    </header>
  )
}
