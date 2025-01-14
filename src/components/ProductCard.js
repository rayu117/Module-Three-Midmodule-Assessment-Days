// import React from 'react'

// export default function ProductCard(props) {
//     return (
//         <div className="ProductCard">
//             <h3>{props.name}</h3>
//             <p>Price: ${props.price}</p>
//             <button>Add to Cart</button>
//             <img src={props.image} alt={props.name}/>
//             <p>{props.description}</p>
            
//         </div>
//     )
// };
const ProductCard = ({product, addToCart}) => {
    const { id, name, price, description, img } = product
    return (
        <li>
            <h3>{name}</h3>
            <img src={img} alt="pic"/>
            <p>{description}</p>
            <p>Price: {price.toFixed(2)}</p>
            
            <button onClick={() => addToCart(product)}>Add To Cart</button>
        </li>
        
    )
}
export default ProductCard;