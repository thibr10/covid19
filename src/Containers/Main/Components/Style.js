import styled from 'styled-components'
import { CardContent, Typography } from '../../../Components'

export const LabelStyled = styled(Typography)`
font-weight: 200;
font-size: 1.0rem;
`

export const ValueStyled = styled(Typography)`
font-weight: 100;
font-size: 1.5rem;
`

export const CardContentStyled = styled(CardContent)`
border-left: 5px solid ${({ color }) => color || '#000000'};
`

export const CardPainelContentStyled = styled(CardContent)`
display: flex;
justify-content: space-between;
padding: 15px;
`

export const ItemStyled = styled.div`
display: flex;
justify-content: space-between;
min-width: 150px;
`
