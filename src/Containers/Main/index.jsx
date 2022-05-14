import React, { memo, useState, useCallback, useEffect } from 'react'
import Api from '../../Api'
import Board from './Components/Board'
import Painel from './Components/Painel'
import { ContainerStyled } from './Style'

function Main() {
  const [data, setData] = useState({})
  const [Country, setCountry] = useState('world')
  const updateAt = new Date().toLocaleString()

  const getCovidData = useCallback((Country) => {
    Api.getCountry(Country)
      .then(data => setData(data))
  }, [])

  useEffect(() => {
    getCovidData(Country)
  }, [getCovidData, Country])

  const handleChange = ({ target }) => {
    const Country = target.value
    setCountry(Country)
  }

  return (
    <ContainerStyled>
      <div className="mb-2">
        <Painel
          data={data}
          updateAt={updateAt}
          onChange={handleChange}
          Country={Country}
          getCovidData={getCovidData}
        />
      </div>
      <Board data={data} />
    </ContainerStyled>
  )
}

export default memo(Main)
