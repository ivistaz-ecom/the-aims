'use client'
import React, { useState, useEffect } from 'react'
import Image from 'next/image'
import { API_CONFIG } from '../../config/config'
import Button from '@/shared/Button'

const BlogPostDetails = () => {
    const [blogsData, setBlogsData] = useState([])
    const [displayedBlogs, setDisplayedBlogs] = useState([])
    const [visibleCount, setVisibleCount] = useState(6)
    const [loading, setLoading] = useState(false)

    useEffect(() => {
        fetchBlogsData()
    }, [])

    useEffect(() => {
        if (Array.isArray(blogsData) && blogsData.length > 0) {
            setDisplayedBlogs(blogsData.slice(0, visibleCount))
        }
    }, [blogsData, visibleCount])

    const fetchBlogsData = async () => {
        try {
            setLoading(true)
            let url = `${API_CONFIG.SERVER_URL}posts?categories=5&_embed&production=${API_CONFIG.PRODUCTION_SERVER_ID}&status=publish`
            const response = await fetch(url)
            if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`)
            const data = await response.json()

            if (Array.isArray(data)) setBlogsData(data)
            else setBlogsData([])
        } catch (error) {
            console.error('Error fetching blogs:', error)
        } finally {
            setLoading(false)
        }
        console.log("blogsData", blogsData)
    }

    const loadMore = () => {
        if (blogsData.length > visibleCount) {
            setVisibleCount(prev => prev + 4)
        }
    }

    const stripHtml = (html) => {
        if (!html) return ''
        const tmp = document.createElement('div')
        tmp.innerHTML = html
        return tmp.textContent || tmp.innerText || ''
    }


    const getImageUrl = (blog) => {
        if (!blog?.acf) return '/images/placeholder.jpg'

        const image =
            blog.acf.thumbnail_image ||
            blog.acf.banner_image

        // Image URL string
        if (typeof image === 'string') return image

        // ACF image object
        if (typeof image === 'object' && image?.url) return image.url

        return '/images/placeholder.jpg'
    }

    return (
        <div className="py-10 px-4 lg:px-8">
            <div className="container mx-auto space-y-10">

                {/* Blogs List */}
                {displayedBlogs.map((blog, index) => (
                    <div
                        key={blog.id}
                        className="flex flex-col lg:flex-row items-center bg-white rounded-2xl overflow-hidden border border-[#A22877] cursor-pointer hover:shadow-lg transition-shadow duration-300"
                    >
                        {/* Image - always first on mobile, alternating on desktop */}
                        <div className={`w-full lg:w-1/2 order-1 ${index % 2 === 0 ? 'lg:order-1' : 'lg:order-2'}`}>
                            <Image
                                src={getImageUrl(blog)}
                                alt={blog.title?.rendered || 'Blog Image'}
                                width={800}
                                height={500}
                                className="object-cover w-full h-full"
                            />


                        </div>

                        {/* Content - always second on mobile, alternating on desktop */}
                        <div className={`lg:p-6 p-4 w-full lg:w-1/2 flex flex-col justify-center order-2 ${index % 2 === 0 ? 'lg:order-2' : 'lg:order-1'}`}>
                            <p className="text-sm mb-2 border border-gray-200 px-2 py-1 w-fit">
                                {new Date(blog.date).toLocaleDateString('en-GB')}
                            </p>
                            <h5 className="text-xl font-semibold text-gray-900 mb-3"
                                dangerouslySetInnerHTML={{ __html: blog.title.rendered }}
                            />
                            <p className="text-gray-700 mb-4">
                                {stripHtml(blog.excerpt?.rendered)?.slice(0, 220)}...
                            </p>
                            <Button href={`/blogs/${blog.slug}`} className="w-fit">Read More</Button>
                        </div>
                    </div>
                ))}

                {/* View More */}
                {visibleCount < blogsData.length && (
                    <div className="text-center mt-8">
                        <Button onClick={loadMore} variant="teal">
                            View More
                        </Button>
                    </div>
                )}

                {/* Loading indicator */}
                {loading && (
                    <div className="text-center mt-4">
                        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-teal-400 mx-auto"></div>
                    </div>
                )}
            </div>
        </div>
    )
}

export default BlogPostDetails
