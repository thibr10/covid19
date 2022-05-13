import React, { memo } from 'react'
import PropTypes from 'prop-types'
import { Card as CardUI } from '../../../Components'
import {
 LabelStyled,
 ValueStyled,
 CardContentStyled
} from './Style'

function Card({ value, label, color }) {
 return (
  <CardUI>
   <CardContentStyled color={color}>
    <ValueStyled>{value}</ValueStyled>
    <LabelStyled>{label}</LabelStyled>
   </CardContentStyled>
  </CardUI>
 )
}

export default memo(Card)
