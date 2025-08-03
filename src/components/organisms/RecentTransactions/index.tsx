import React from 'react'
import { Box, Grid, styled } from '@mui/material'
import TypographyComponent from '../../atoms/Typography'
import { TypographyProps } from '@mui/material/Typography'
interface RecentTransactionsProps extends TypographyProps {
  mainText?:string
  optionText?:string
}
const StyledGrid = styled(Grid)(() => ({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'flex-start',
  padding: '0px',
  gap: '12px',
  width: '398px',
}))
const StyledInnerBox = styled(Box)(() => ({
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'space-between',
  alignItems: 'center',
  padding: '0px 24px 0px 0px',
  gap: '10px',
  width: '350px',
}))
const RecentTransactionsComponent = (props: RecentTransactionsProps) => {
  const {
    mainText,
    optionText

  } = props
 
  return (
    <StyledGrid data-testid='recentTransacions'>
      <StyledInnerBox>
        <TypographyComponent children={mainText} variant="body1" color={'textColor.highEmphasis'} />
        <TypographyComponent children={optionText} variant="caption2" color={'primary.primary500'} />
      </StyledInnerBox>
      
    </StyledGrid>
  )
}
export default RecentTransactionsComponent