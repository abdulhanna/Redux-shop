import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'
import ProductCompent from './productCompent'
import { useDispatch } from 'react-redux'
import axios from 'axios'
import { setProducts, fetchProducts } from '../redux/actions/productActions'

const ProductList = () => {
    const dispatch = useDispatch()
    const products = useSelector((state => state.allProducts))
    // const fetchData = async () => {
    //     const response = await axios.get('https://fakestoreapi.com/products')
    //     dispatch(setProducts(response.data))
    // }

    useEffect(() => {
        dispatch(fetchProducts())
    }, [])
    return (
        <div className='container mx-auto'>
            <div className='my-10'>
                <ProductCompent />
            </div>
        </div>
    )
}

export default ProductList