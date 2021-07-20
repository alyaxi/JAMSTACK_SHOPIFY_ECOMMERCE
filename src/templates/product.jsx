import React from 'react'

export default function product({pageContext}) {
    const {priceRange : {maxVariantPrice : {amount}}, title, description, images} = pageContext
    return (
        <div>
            <img src={images[0].originalSrc} alt="" />
            <h1>{title}</h1>
            <p>{description}</p>
            <p><b>Price:</b> {amount}</p>
        </div>
    )
}
