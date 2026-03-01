import BookCard from '@/components/BookCard'
import HeroSection from '@/components/HeroSection'
import { Button } from '@/components/ui/button'
import { sampleBooks } from '@/lib/constants'
import React from 'react'

const page = () => {
  return (
    <main className='wrapper container '>
     <HeroSection />
      <div className='library-books-grid'>
        {sampleBooks.map((book) => (
          <BookCard key={book.slug} title={book.title} author={book.author} coverURL={book.coverURL} slug={book.slug} />
        ))}
      </div> 
    </main>
  )
}

export default page
