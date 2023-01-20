import FormProduct from '@/components/FormProducts'
import React, {useEffect, useState} from 'react'
import { useRouter } from 'next/router'
import endPoints from '@/services/api'

const Edit = () => {
    const [product, setProduct] = useState({})
    const router = useRouter()

    useEffect(() => {
        const { id } = router.query
        if (!router.isReady) return
        async function getProduct() {
            const response = await fetch(endPoints.products.getProduct(id))
            const data = await response.json()
            setProduct(data)
        }
        getProduct()
    }, [router?.query])
    
  return (
    <>
    <FormProduct product={product} />
    </>
  )
}



export default Edit