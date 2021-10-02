import React, { Component } from 'react'
import { Link } from 'react-router-dom'
// import PropTypes from 'prop-types'
import { ProductWrapper} from './styled'
// import { ProductConsumer } from '../context'



class Product extends Component {
    render() {
    const { img, brand, price, inCart} = this.props.product
    return (
        <ProductWrapper className="col-9 mx-auto col-md-6 col-lg-6 my-3">
            <div className='card'>
                <div className='img-container p-5' onClick={ () => console.log("you clicked me")}>
                    <Link to='/details'>
                    <img src={img} alt="product Img"  className='card-img-top'/>
                    </Link>
                    <button className='cart-btn' 
                    disabled={inCart ? true : false} 
                    onClick={() => {console.log('added to cart')}}>
                        {inCart?(<p className='text-capitalize mb-0' disabled>In Cart</p>) : (<p>ADD TO CART</p>)}
                    </button>
                </div>
                {/* card footer */}
                <div className=' card-footer d-flex justify-content-between'>
                    <p className='align-self-center mb-0'> {brand}</p>
                    <h4 className='text-blue font-italic mb-0'>                 
                        <span className='mr-1'>$</span>
                        {price}
                    </h4>
                </div>
            </div>
        </ProductWrapper>
    )
    }
}


// Product.propTypes = {
//     product: PropTypes.shape({
//         id:PropTypes.number,
//     })
// }









export default Product


