import Link from 'next/link'
import React from 'react'

export default function page() {
  return (
    <div>
      blogs page
      {
        blogs.map((blog, index) => (
          <div key={index} className='border '>
            <h2>{blog.title}</h2>
            <p>{blog.description}</p>
            <button className='bg-orange-700'>
                <Link href={`/blogs/${blog.slug}`}>
                View Details
                </Link>
            </button>
          </div>
        ))
      }
    </div>
  )
}

const blogs =  [
    {
      "slug": "about-us",
      "title": "About Us",
      "description": "Learn more about our company's mission, vision, and values."
    },
    {
      "slug": "services",
      "title": "Our Services",
      "description": "Discover the wide range of services we offer to our clients."
    },
    {
      "slug": "contact",
      "title": "Contact Us",
      "description": "Get in touch with us through our contact page."
    },
    {
      "slug": "blog",
      "title": "Our Blog",
      "description": "Read the latest articles and updates from our team."
    },
    {
      "slug": "careers",
      "title": "Careers",
      "description": "Explore job opportunities and start your career with us."
    }
  ]
  