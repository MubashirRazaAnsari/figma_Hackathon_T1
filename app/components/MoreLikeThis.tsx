import Link from 'next/link'
import React from 'react'
import ProductCard from './ProductCard'
import { moreLikeThis } from '@/data'

const MoreLikeThis = () => {
    return (
        <div className='w-full '>
            <div className='w-full max-w-[1440px] mx-auto px-4 my-10'>
                <h1 className='text-5xl text-black text-center my-5 font-extrabold'>MORE LIKE THIS</h1>
                <div className='w-[80vw] mx-auto grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-4'>
                    {moreLikeThis.map((item) => (
                        <ProductCard key={item.id} {...item} />
                    ))}
                    
                </div>
               
            </div>
          
        </div>)
}

export default MoreLikeThis
