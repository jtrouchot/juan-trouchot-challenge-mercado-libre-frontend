import axios from 'axios';

export const PRODUCT = 'PRODUCT'

export const getProduct = () => (dispatch) => {
  // obtiene la porción del path de la url que contiene el id del item
  axios.get('/api/items/' + window.location.pathname.split('/')[2])
  .then(response => {
    const {data} = response;
      dispatch({
        type: PRODUCT,
        payload: data
      })
   
   })
   .catch(err => {
     dispatch({
        type: PRODUCT,
        payload: {}
      })
   })
}