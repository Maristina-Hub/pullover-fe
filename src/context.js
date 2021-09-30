import React, { Component } from 'react'
import { store, details } from './data'

const ProductContext = React.createContext()

class ProductProvider extends Component {
    state ={
        products:store,
        detailProduct: details
    }
    
    handleDetail = () => {
        console.log("hello from detail");
    }

    addToCart = () => {
        console.log('hello from add to cart');
    }

    render() {
        return (
            <ProductContext.Provider value={{
                ...this.state,
                handleDetail: this.handleDetail,
                addToCart: this.addToCart
            }}>
                {this.props.children}
            </ProductContext.Provider>
        )
    }
}


const ProductConsumer = ProductContext.Consumer

export { ProductConsumer, ProductProvider}