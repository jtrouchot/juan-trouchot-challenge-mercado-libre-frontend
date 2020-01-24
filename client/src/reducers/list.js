import {LIST} from '../actions/search'

const INITIAL_STATE = {
  items: [],
  categories: [],
}

const list = (state = INITIAL_STATE, action) => {
  const { type, payload } = action
  switch (type) {
    case LIST: {
      // aca llega el mensaje de dispatch 
      // se almacenan los datos en el reducer
      return payload
    }
    default: {
      return state
    }
  }
}

export default list

