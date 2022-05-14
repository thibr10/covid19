import React, { memo } from 'react'
import RefreshIcon from '../../../Assets/Images/refresh.svg'
import { Card, Typography, Button, Select, MenuItem } from '../../../Components'
import COUNTRIES from '../../../Commons/Constants/Countries'
import { CardPainelContentStyled, ItemStyled } from './Style'

const navigatorHasShare = navigator.share

function Painel({ updateAt, onChange, data, Country, getCovidData }) {
 const { cases, recovered, deaths, todayCases, todayDeaths } = data

 const renderCountries = (Country, Index) => (
  <MenuItem key={`Country-${Index}`} value={Country.value}>
   <ItemStyled>
    <div>{Country.label}</div>
    <img src={Country.flag} alt={`País-${Country.label}`} />
   </ItemStyled>
  </MenuItem>
 )

 const textCovid19 = `País: ${Country} - recuperados: ${recovered}`

 const copyInfo = () => {
  navigator.clipboard.writeText(textCovid19)
 }

 const shareInfo = () => {
  navigator.share({
   title: `Dados do Covid19 - ${Country}`,
   text: textCovid19,
   //url: 'https://covid19dio.netlify.app/'
  })
 }

 const renderShareButton = (
  <div>
   <Button variant="container" color="primary" onClick={shareInfo}>
    Compartilhar
   </Button>
  </div>
 )

 const renderCopyButton = (
  <div>
   <Button variant="container" color="primary" onClick={copyInfo}>
    Copiar
   </Button>
  </div>
 )

 return (
  <Card>
   <CardPainelContentStyled>
    <div>
     <Typography variant="h5" component="span" color="primary">COVID19</Typography>
     <Typography variant="h6" component="span" color="primary">Painel Coronavírus</Typography>
     <Typography variant="body2" component="span" color="primary">Atualizado em: {updateAt}</Typography>
     <div className="pt-2">
      <Select onChange={onChange} value={Country}>
       {COUNTRIES.map(renderCountries)}
      </Select>
     </div>
    </div>
    {navigatorHasShare ? renderShareButton : renderCopyButton}
   </CardPainelContentStyled>
  </Card>
 )
}

export default memo(Painel)
