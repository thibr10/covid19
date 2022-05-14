const path = 'https://coronavirus-19-api.herokuapp.com/countries'

const headers = {
  method: 'get',
  mode: 'cors',
  cache: 'default'
}

function getCountry(Country) {
  return fetch(`${path}/${Country}`, headers)
    .then((response) => response.json())
}

export default {
  getCountry
}
