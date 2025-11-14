"use client"

import Link from "next/link"
import { GoArrowDownRight, GoArrowUpRight } from "react-icons/go"

const variantStyles = {
  default: "bg-white text-[#002561] hover:bg-[#ff6c01] hover:text-white",
  primary: "bg-[#ff6c01] text-white hover:bg-[#ff8124] hover:text-white",
}

const ProgramButton = ({
  href,
  children,
  variant = "default",
  className = "",
  ...props
}) => {
  const styles = variantStyles[variant] ?? variantStyles.default
  const baseArrowColor = variant === "primary" ? "text-white" : "text-[#002561]"

  return (
    <Link
      href={href}
      className={`group inline-flex w-full sm:w-auto items-center justify-between gap-3 rounded-full lg:px-6 px-4 lg:py-3 py-2 text-left text-sm font-semibold transition sm:text-base ${styles} ${className}`}
      {...props}
    >
      <span>{children}</span>
      <span className="relative flex items-center">
        <GoArrowDownRight
          className={`w-5 h-5 transition-all duration-300 ease-in-out group-hover:opacity-0 group-hover:rotate-12 group-hover:scale-75 ${baseArrowColor}`}
        />
        <GoArrowUpRight
          className={`w-5 h-5 absolute top-0 left-0 opacity-0 transition-all duration-300 ease-in-out -rotate-12 scale-75 group-hover:opacity-100 group-hover:rotate-0 group-hover:scale-100 ${
            variant === "primary" ? "text-white" : "group-hover:text-white"
          } ${baseArrowColor}`}
        />
      </span>
    </Link>
  )
}

export default ProgramButton
