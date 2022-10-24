import React, { Profiler, useEffect } from 'react'
import axios from 'axios'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'

const ProductCompent = () => {
    const products = useSelector((state) => state.allProdcts.products)




    return (
        <div className='grid grid-cols-4 px-4 gap-6'>

            {products.map((product) => {
                const { image, id, category, price, title, description } = product;
                return <div className='ui link  hover:scale-105 duration-150 ease-in-out' key={id}>
                    <Link to={`product/${id}`}>
                        <div className='border p-4 shadow-md'>
                            <div className='h-[250px]'><img className='w-full object-fit h-full' src={image} alt='img' /></div>
                            <div className='mt-4'>
                                <div className='h-12 overflow-hidden mb-5'> <h2 >{title}</h2></div>
                                <div className='h-5 overflow-hidden mb-4'> <p className=' text-md'>{`$ ${price}`}</p></div>
                                <p className='text-slate-400'>{category}</p>
                            </div>

                        </div>
                    </Link>

                </div>
            })}


        </div>
    )
}

export default ProductCompent