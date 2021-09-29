// import Product from './Product'
import React from 'react'
import TitleComponent from './TitleComponent'
// import { store } from '../data'


const ProductComponent = ({name, title}) => {
    // state = {
    //     products:store
    // }
            return (
        <>
        <div className="py-5">
            <div className="container">
                <TitleComponent name='our' title='products'/>
                <div className="row">
                </div>
            </div>
        </div>
            {/* <Product/> */}
        </>
    )
        
    }




export default ProductComponent