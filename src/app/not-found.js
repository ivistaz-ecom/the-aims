import React from 'react'
import Link from 'next/link'

export const metadata = {
    title: '404 - Page Not Found | AIMS Institutes',
    description: 'The page you are looking for could not be found.',
}

const NotFound = () => {
    return (
        <div className="flex flex-col items-center justify-center min-h-[60vh] px-4 py-16">
            <div className="text-center max-w-2xl mx-auto">
                {/* 404 Number */}
                <h1 className="text-9xl md:text-[12rem] font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-[#6e3299] via-[#ff853a] to-[#62c9b5] mb-4">
                    404
                </h1>

                {/* Error Message */}
                <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
                    Page Not Found
                </h2>

                <p className="text-lg text-gray-600 mb-8 max-w-md mx-auto">
                    Oops! The page you're looking for doesn't exist. It might have been moved, deleted, or you entered the wrong URL.
                </p>

                {/* Action Buttons */}
                <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                    <Link
                        href="/"
                        className="px-8 py-3 bg-[#6e3299] text-white font-semibold rounded-lg hover:bg-[#5a2877] transition-colors duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
                    >
                        Go to Homepage
                    </Link>

                    <Link
                        href="/contact-us"
                        className="px-8 py-3 bg-white text-[#6e3299] font-semibold rounded-lg border-2 border-[#6e3299] hover:bg-[#6e3299] hover:text-white transition-colors duration-200"
                    >
                        Contact Us
                    </Link>
                </div>

                {/* Quick Links */}
                <div className="mt-12 pt-8 border-t border-gray-200">
                    <p className="text-sm text-gray-500 mb-4">Popular Pages:</p>
                    <div className="flex flex-wrap justify-center gap-4">
                        <Link
                            href="/programs"
                            className="text-[#6e3299] hover:text-[#ff853a] transition-colors duration-200 text-sm font-medium"
                        >
                            Programs
                        </Link>
                        <Link
                            href="/admissions"
                            className="text-[#6e3299] hover:text-[#ff853a] transition-colors duration-200 text-sm font-medium"
                        >
                            Admissions
                        </Link>
                        <Link
                            href="/about-aims"
                            className="text-[#6e3299] hover:text-[#ff853a] transition-colors duration-200 text-sm font-medium"
                        >
                            About AIMS
                        </Link>
                        <Link
                            href="/contact-us"
                            className="text-[#6e3299] hover:text-[#ff853a] transition-colors duration-200 text-sm font-medium"
                        >
                            Contact Us
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default NotFound

