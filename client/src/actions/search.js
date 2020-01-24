import axios from 'axios';

export const LIST = 'LIST'

// dispara la accion de buscar 
// recibe el parámetro q, que refiere a las palabras buscadas 
export const search = (q) => {
  return (dispatch) => {
    axios.get(`/api/items?q=${q}`)
    .then(response => {
      const {data} = response;
      // pasa la data al reducer list
      dispatch({
        type: LIST,
        payload: data
      })
    })
    .catch(err => {
      console.error(err)
    })}
}