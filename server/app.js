const express = require('express')
const https = require('https');
const axios = require('axios'); // para realizar las solicitudes

const app = express()
const port = 3001

const nItemsList = 4; // cantidad de items a devolver al cliente

app.get('/', (req, res) => res.send(''))

app.get('/api/items', function (req, res) {
  // se consulta la api de mercado libre a partir del parámetro 
  // de búsqueda que introdujo el usuario
  // es necesario consultar 2 endpoints de la api
  const query = req.query.q;
  axios.get(`https://api.mercadolibre.com/sites/MLA/search?q=${query}`)
  .then(function(response) {
    const {data} = response
    var items = []
    var categories = {}
    // solo devuelve los primeros 4 resultados de la búsqueda
    data.results.slice(0, nItemsList).forEach(function(result) {
      items.push({
        id: result.id,
        title: result.title,
        price: {
          currency: result.currency_id,
          amount: result.price,
          decimals: 2
        },
        picture: result.thumbnail,
        condition: result.condition,
        free_shipping: result.shipping.free_shipping
      }) 
    })
    let r = {
      author: {
        name: "Juan Cruz",
        lastname: "Trouchot"
      },
      categories: categories,
      items: items
    }

    // aquí los if toman los "filters" o "available_filters",
    // dependiendo si filters está vacío o no
    if (data.filters.length > 0){
      if (data.filters[0].id === "category")  {
        r.categories = data.filters[0].values[0].path_from_root.map(value => value.name)
        res.send(r)
      }
    }

    // si filters está vacío, utiliza available_filters
    if (data.filters.length < 1){
      if (data.available_filters.length > 0) {
      axios.get(`https://api.mercadolibre.com/categories/${data.available_filters[0].values[0].id}`)
      .then(function(response2) {
        const data2 = response2.data
        r.categories = data2.path_from_root.map(value => value.name)
        res.send(r)
        })
      }
    }

  })
  .catch(function(error) {
    console.error(error)
    res.send({})
  })
})

app.get('/api/items/:id', function (req, res) {
  // aquí devuelve los detalles del item
  // es necesario consultar 3 endpoints de la api
  const id = req.params.id
  let r
  axios.get(`https://api.mercadolibre.com/items/${id}`)
  .then(function(response) {
    const {data} = response

    r = {
      author: {
        name: "Juan Cruz",
        lastname: "Trouchot"
      },
      item: {
        id: id,
        title: data.title,
        price: {
          currency: data.currency_id,
          amount: data.price,
          decimals: 2
        },
      },  
      picture: data.pictures[0].url,
      condition: data.condition,
      free_shipping: data.shipping.free_shipping,
      sold_quantity:  data.sold_quantity,
      description: "",
      categories: ""
      // se agregó categories para mostrar en el breadcrumb
    };

    axios.get(`https://api.mercadolibre.com/categories/${data.category_id}`)
    .then(function(response2) {
      const data2 = response2.data
      r.categories = data2.path_from_root.map(value => value.name)
      // chequea si el item tiene descripcion y, si es así, se la utilizo
      if (data.descriptions.length > 0){
        axios.get(`https://api.mercadolibre.com/items/${id}/description`)
        .then(function(response3) {
          const data3 = response3.data
          r.description = data3.plain_text
          res.send(r)
        })
        .catch(function(err) {
          console.error(err)
          res.send({})
        })
      }
      else
      {
        res.send(r)
      }
    })

    .catch(function(err) {
      console.error(err)
      res.send({})
    })

  })
  .catch(function(err) {
    console.error("Item not found or connection problem")
    res.send({          
            item: {
            title: "NotFound"
            }   
    })
  })

})

app.listen(port, () => console.log(`Server listening on port ${port}`))