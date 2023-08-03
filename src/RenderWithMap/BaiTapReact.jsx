import React from 'react'
import productList from './data.json'

const BaiTapReact = () => {
    console.log(productList)
  
    return (
    <div>
        <div className="row">
            {
                productList.map(product => {
                    return <div className='col-6' key={product.id}>
                        <div className="card">
                            <img src = {product.url}  alt="..." />
                            <div className="card-body">
                                <p className='fw-bold'>{product.name}</p>
                                <p className='mt-3'>{product.desc}</p>
                            </div>
                        </div>
                    </div>
                })
            }
        </div>
    </div>
  )
}

export default BaiTapReact