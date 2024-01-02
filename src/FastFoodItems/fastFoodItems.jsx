import './fastFoodItems.css'
// import { useState } from 'react'
import {HiShoppingCart} from 'react-icons/hi'

const fastFoodItems = ({name, imageUrl, price, ingredients, delay}) =>{

    // const [placeholderImg, setPlaceholderImg] = useState(true)

    return(
        <div className="card product-card h-100 border-0 shadow-sm pb-1 position-relative fade-in-horiz" style={{animationDelay: delay + 's'}}>
            <span className="bg-success badeg badge-end w-50 badge-shadow fs-md fw-medium position-absolute mt-3 me-4 px-2">
                قیمت: {price.toLocaleString()} تومان
            </span>

            <div className="card__placeholder">
            <img src={imageUrl} alt="" className="card-img-top card-img" />
            </div>
             <div className="card-body text-center pb-4 pt-3 d-flex flex-column">
                <h5 className="mb-2">{name}</h5>
                <div className="fs-ms fw-bold text-muted mb-3">
                    {ingredients}
                </div>
                <div className="btn btn-outline-success btn-sm w-100 mt-auto fw-bold">
                    <HiShoppingCart className='fs-5 ms-3' />
                    افزودن به سبد خرید
                </div>
             </div>
        </div>
    )

}
export default fastFoodItems