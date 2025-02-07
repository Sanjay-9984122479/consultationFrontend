import React, { useEffect, useState } from 'react'
import ProductCard from './ProductCard';

const Products = () => {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState();

    const fetchApi = async () => {
        try {
            let response = await fetch('https://fakestoreapi.com/products');
            if (response.ok) {
                let result = await response.json();
                setData(result);
            }
        }
        catch (err) {
            setError(err);
        }
        finally {
            setLoading(false);
        }

    }

    useEffect(()=>{
        fetchApi();

    },[])

    return (<>
        {!loading ? <>
            <h1>Products</h1>
            <div className='grid grid-cols-5 gap-5'>{
           data?.map((item)=><ProductCard data={item}/>)
            }</div></>
            : <h2>Loading...</h2>}
    </>

    )
}

export default Products