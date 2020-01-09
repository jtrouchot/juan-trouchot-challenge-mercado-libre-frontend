import {PRODUCT} from '../actions/product';

const INITIAL_STATE = {
  item: {
    price: {
    }
  }
}

const product = (state = INITIAL_STATE, action) => {
  const { type, payload } = action
  switch (type) {
  	case PRODUCT: {
  	  return payload
  	}
    default: {
      return state
    }
  }
}

export default product
