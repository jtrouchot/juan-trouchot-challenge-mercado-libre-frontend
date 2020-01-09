import React, {Component} from 'react';
import '../scss/Product.scss';
// funciones auxiliares que servirán para mostrar correctamente el precio
import {separateDecimals,addDots} from '../utils/price';
import Breadcrumb from './Breadcrumb.js';
import { getProduct } from '../actions/product';

class Product extends Component {

  componentDidMount() {
    this.props.dispatch(getProduct())
  }

  render() {
    const {product} = this.props 
    if (product.item.title != null && product.item.title !== "NotFound"){
        var decimals = separateDecimals(product.item.price.amount);
        return (
        <div>
          <Breadcrumb categories={product.categories}/>
          <div className={'product-detail-container'}>
            <div className={'product-detail-first-row'}>
              <div className={'product-detail-img-container'}>
                      <img src={product.picture} alt={product.item.title}/>
              </div>
              <div className={'product-detail-info'}>
                      <p className={'product-detail-condition-sold'}>
                          {`${product.condition === 'new' ? 'Nuevo' : 'Usado'} - ${product.sold_quantity} vendidos`}
                      </p>
                      <h5 className={'product-detail-title'}>
                        {product.item.title}
                      </h5> 
                      <h3 className={'product-detail-price'}>
                        {product.item.price.currency === "ARS" ? "$" : "U$D"} {addDots(Math.floor(product.item.price.amount))}
                        {decimals && 
                        <span className='product-detail-price-decimals'>
                          {decimals}
                        </span>}
                      </h3>
                      <button className={'product-detail-buy'}>Comprar</button>
              </div>
            </div>
            <div className={'product-detail-description'}>
              <p className={'product-detail-description-title'}>Descripción del producto</p>
              <p className={'product-detail-description-text'}>{product.description}</p>
            </div>
          </div>
        </div>
        )
    }

    else {
      return (
        <div className={'product-detail-container'}>
          {product.item.title === "NotFound" ? "El item solicitado no pudo ser encontrado" : "Cargando"}
        </div>
      )
        
    }
    
  }
}

export default Product;