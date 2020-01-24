import Product from '../components/Product'
import { connect } from 'react-redux';
import {getProduct} from '../stateapi/product'

function mapStateToProps(state) {
// toma los datos del reducer y se los pasa al componente	
  return {
  	product: getProduct(state)
  }
}

export default connect(mapStateToProps)(Product)