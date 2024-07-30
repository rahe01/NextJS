import Link from 'next/link'
import React from 'react'

export default function AboutContent() {
  return (
    <div>
      this is about content from component folder
      <Link href={'/about/history'}>History</Link>
    </div>
  )
}
