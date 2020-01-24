import React, {Component} from 'react';
import '../scss/List.scss';
// funciones auxiliares que servirán para mostrar correctamente el precio
import {separateDecimals,addDots} from '../utils/price';
import Breadcrumb from './Breadcrumb.js';
import {NavLink} from 'react-router-dom'

class List extends Component {

  render() {
      return (
        <div>
          <Breadcrumb categories={this.props.categories}/>
          <div className={"list-products-container"}>
      
          {this.props.list.length === 0 && "No hay elementos encontrados"}

         	{this.props.list.map(product => {
     		    return (
              <div className={'list-product-container'} key={product.id}>
                <div className={'list-product-info'}>
                  <NavLink
                    to={'items/' + product.id}
                  >
                    <img src={product.picture} alt={product.title} />
                  </NavLink>
                  <div className={'list-product-general-info'}>
                    <p className={'list-product-price'}>{product.price.currency === 'ARS' ? '$' : 'U$D'} {addDots(Math.floor(product.price.amount))}
                      <span className={'list-product-price-decimals'}>
                        {separateDecimals(product.price.amount)}
                      </span>
                    </p>
                    {product.free_shipping ? <i className={'list-product-price-free-shipping'} /> : null}
                    <NavLink className={'list-product-title'}
                      to={'items/' + product.id}
                    >
                    <p>{product.title}</p>
                    </NavLink>
                  </div>
                  <div className={'list-product-condition'}>
                    <p>{product.condition === 'new' ? 'Nuevo' : 'Usado'}</p>
                  </div>
                </div>
              </div>
     		    )
       	  })}
          </div>
        </div>
      )
  }
}

export default List;