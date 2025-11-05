import React from 'react';
import Link from 'next/link';

export const metadata = {
    title: 'Coming Soon | AIMS Institutes',
    description: 'This page is under construction. We\'re working hard to bring something awesome for you.',
}

const Page = () => {
    return (
        <div className="flex flex-col items-center justify-center min-h-[60vh] px-4 py-16">
            <div className="text-center max-w-2xl mx-auto">
                {/* Coming Soon Heading */}
                <h1 className="text-6xl md:text-8xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-[#6e3299] via-[#ff853a] to-[#62c9b5] mb-4 animate-pulse">
                    Coming Soon
                </h1>

                {/* Message */}
                <p className="text-lg text-gray-600 mb-8 max-w-xl mx-auto">
                    Our website is currently being updated. <br /> Thank you for your understanding.
                </p>

                {/* Action Button */}
                <div className="flex justify-center items-center">
                    <Link
                        href="/"
                        className="px-8 py-3 bg-[#6e3299] text-white font-semibold rounded-lg hover:bg-[#5a2877] transition-colors duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
                    >
                        Go to Homepage
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Page;
