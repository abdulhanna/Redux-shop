import React from 'react'
import { useSelector } from 'react-redux'
const ProductCompent = () => {

    const products = useSelector((state) => state)
    return (
        <div>ProductCompent</div>
    )
}

export default ProductCompent