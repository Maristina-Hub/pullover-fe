import Product from './Product'
import React, {Component} from 'react'
import TitleComponent from './TitleComponent'
import { ProductConsumer } from '../context'

export default class ProductComponent extends Component {
    render() {
        return (
            <>
                <div className="py-5">
                <div className="container">
                <TitleComponent name='our' title='products'/>

                <div className="row">
                    <ProductConsumer>
                        {value => {
                            return value.products.map(product => {
                                return <Product key={product.id} product={product}/> 
                            })
                            
                        }}
                    </ProductConsumer>
                </div>
                </div>
                </div>
                
        </>
        )
    }
}





