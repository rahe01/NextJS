import React from 'react'

export default function page({params}) {
    console.log(params)
  return (
    <div>
      details
      {
        blogs.find(blog => blog.slug === params.slug)?.title &&
       <div>
         <h1>{blogs.find(blog => blog.slug === params.slug)?.title}</h1>
         <p>{blogs.find(blog => blog.slug === params.slug)?.description}</p>
       </div>
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
