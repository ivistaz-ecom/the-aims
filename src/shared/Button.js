import { GoArrowDownRight, GoArrowUpRight } from "react-icons/go"
import Link from "next/link"

const Button = ({
  children,
  onClick,
  className = "",
  variant = "primary",
  showArrow = true,
  showReadMore = false,
  hoverText,
  href, // added
  ...props
}) => {
  const baseClasses =
    "px-4 py-2.5 rounded-[20px] font-light transition-all duration-300 ease-in-out border-2 flex items-center justify-center gap-1 group relative overflow-hidden min-h-[44px] min-w-[44px] cursor-pointer"

  const variants = {
    primary:
      "bg-[#A22977] text-white border-[#A22977] border-[0.1px] hover:bg-transparent hover:text-[#2828A2]",
    secondary:
      "bg-[#A22977] text-white border-6 border-[#D8BFD8] rounded-[26.5px] hover:bg-[#ff6c01] hover:text-white ",
    third:
      "bg-[#A22977] text-white border-[#A22977] border-[0.1px] hover:bg-transparent",
    teal: "bg-[#B3DBD3] text-[#002561] border-[#B3DBD3] border-[0.1px] hover:bg-transparent hover:text-[#002561]",
    placement:
      "bg-[#A22977] text-white border-6 border-[#D8BFD8] rounded-[26.5px] hover:bg-[#ff6c01] hover:text-white",
  }

  const buttonClasses = `${baseClasses} ${variants[variant]} ${className}`

  const content = (
    <>
      {/* Original content */}
      <span
        className={`transition-all duration-300 ease-in-out ${
          showReadMore
            ? "group-hover:opacity-0 group-hover:-translate-y-2 cursor-pointer"
            : ""
        }`}
      >
        {children}
      </span>

      {/* Read More text - appears on hover */}
      {showReadMore && (
        <span className="absolute text-xl transition-all duration-300 ease-in-out opacity-0 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 cursor-pointer">
          {hoverText}
        </span>
      )}

      {showArrow && (
        <div className="relative flex items-center">
          <GoArrowDownRight className="w-5 h-5 text-current transition-all duration-300 ease-in-out group-hover:opacity-0 group-hover:rotate-12 group-hover:scale-75" />
          <GoArrowUpRight className="w-5 h-5 text-current absolute top-0 left-0 transition-all duration-300 ease-in-out opacity-0 -rotate-12 scale-75 group-hover:opacity-100 group-hover:rotate-0 group-hover:scale-100 cursor-pointer" />
        </div>
      )}
    </>
  )

  // If href is present, render <Link>, else <button>
  return href ? (
    <Link
      href={href}
      // target="_blank"
      rel="noopener noreferrer"
      className={buttonClasses}
      {...props}
    >
      {content}
    </Link>
  ) : (
    <button onClick={onClick} className={buttonClasses} {...props}>
      {content}
    </button>
  )
}

export default Button
