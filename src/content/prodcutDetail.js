import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'
import { useDispatch, useSelector } from 'react-redux'
import { selectedProducts } from '../redux/actions/productActions'



const ProdcutDetail = () => {
    const { productId } = useParams()
    const dispatch = useDispatch()
    const product = useSelector((state) => state.product)
    console.log(product, 'single')

    const fetchSingleData = async () => {
        const response = await axios.get(`https://fakestoreapi.com/products/${productId}`)

        dispatch(selectedProducts(response.data))
    }

    useEffect(() => {
        fetchSingleData()
    }, [])

    return (
        <div className='container mx-auto p-8'>
            {Object.keys(product).length === 0 ? (
                <div> Loading .....</div>
            ) : (
                <div className='flex shrink-0 gap-4 p-8 border'>
                    <div className='w-full h-full'> <img className='w-full object-cover' src={product.image} alt={product.title} /></div>

                    <div className='space-y-6 px-4'>
                        <div><h2 className='font-semibold text-xl capitalize'>{product.title}</h2></div>
                        <div className='w-1/2 p-1'> <p className='font-medium border-2 border-slate-300'>{product.category}</p></div>
                        <div><p className='text-md'>{product.description}</p></div>
                        <div><p>{`$ ${product.price}`}</p></div>
                    </div>
                </div>
            )}
        </div>
    )
}

export default ProdcutDetail