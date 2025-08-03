import LocalShippingOutlinedIcon from '@mui/icons-material/LocalShippingOutlined'
import {
  Divider,
  FormControl,
  Grid,
  Icon,
  MenuItem,
  Stack,
  styled,
  Typography,
} from '@mui/material'
import React, { useState } from 'react'
import Select from '@mui/material/Select'
import { KeyboardArrowDown } from '@mui/icons-material'
import theme from '../../../theme/theme'
import { deliveryTypes, SELECT_SPEED_DELIVERY, TRANSACTION_FEE } from '../../utils/constants'
import { useDispatch, useSelector } from 'react-redux'
import { selectType } from '../../../features/dropDownData'

interface CryptoDataValue{
  id:number,
  deliveryFee:number,
  type:string
}
interface DeliveryTypeProps{
  id:number,
  time:string,
  type:string
}
interface ItemProps{
  items:CryptoDataValue[]
  deliveryTypes:DeliveryTypeProps[]
}
const StyledGrid = styled(Grid)({
  borderRadius: '4px',
  border: `1px solid ${theme.palette.greyShade.grey100}`,
  padding: '20.8',
  backgroundColor: theme.palette.semantic.main
})
const StyledIcon = styled(Icon)({
  paddingRight: '14.4px',
  paddingLeft: '14.4px',
})
const StyledMenuItem = styled(MenuItem)({
  height: 54,
  display: 'none',
})

const DeliveryDropdown = (props:ItemProps) => {
  const dispatch=useDispatch()
  const cryptoId=useSelector((state:{cryptoData:{value:{id:number}}})=>state.cryptoData.value)
  const dropDownData=useSelector((state:{dropDownData:{value:{type:string,time:string,fee:number}}})=>state.dropDownData.value)
 
  let delivery=''
  const [anchorEl,setAnchorEl]=useState(false)
const handleClick=(id:number)=>{
  dispatch(selectType({type:deliveryTypes[id].type,
                        time:deliveryTypes[id].time,
                        fee:`${props.items[cryptoId.id].deliveryFee*Math.pow(10,-id)}`}))
            
}

  return (
    <div>
      <StyledGrid
        display="flex"
        justifyContent={'space-between'}
        direction="column"
        width="766px"
        gap={"16px"}
      >
        <Grid item>
          <Typography
            variant="body1"
            data-testid="typo"
            color={theme.palette.textColor.highEmphasis}
            fontWeight="bold"
          >
           {SELECT_SPEED_DELIVERY}
          </Typography>
        </Grid>
        <FormControl >
          <Select
            value={delivery}
            data-testid="selectId"
            displayEmpty
            sx={{
              height: 40,
              padding: '32px 0px 32px 3px',
              '& .MuiOutlinedInput-notchedOutline': {
                border: `1px solid ${theme.palette.greyShade.grey100} !important`,
                padding: '0px',
              },
            }}
            inputProps={{ 'aria-label': 'Without label' }}
            IconComponent={KeyboardArrowDown}
            startAdornment={
              <StyledIcon>
                <LocalShippingOutlinedIcon />
              </StyledIcon>
            }
            onOpen={()=>{setAnchorEl(true)}}
            onClick={()=>setAnchorEl(false)}
            open={anchorEl}
          >
            <StyledMenuItem value="" >
              <Typography data-testid="dropdown">
                <Grid container>
                  <Grid item>
                    <Grid item xs zeroMinWidth>
                      <Typography
                        fontWeight={600}
                        fontSize={16}
                        data-testid="typeText"
                        color={theme.palette.textColor.highEmphasis}
                      >
                        {`${dropDownData.type} : ${dropDownData.time}`}
                      </Typography>
                    </Grid>
                    <Grid item xs zeroMinWidth>
                      <Typography
                        fontWeight={600}
                        fontSize={14}
                        color={theme.palette.textColor.mediumEmphasis}
                        variant="caption1"
                      >
                        {TRANSACTION_FEE} :   {dropDownData.fee} {props.items[cryptoId.id].type}
                      </Typography>
                    </Grid>
                  </Grid>
                </Grid>
              </Typography>
            </StyledMenuItem>
           
            {props.deliveryTypes.map(({ id,type, time }) => (
              <Stack  key={id}>
              <MenuItem
               key={id}
                data-testid="menuItems"
                sx={{
                  height: 54,
                  backgroundColor: `${theme.palette.primary.primary100}`,
                  paddingLeft: '40px',
                  paddingRight: '40px',
                  paddingTop: '0px',
                  paddingBottom: '0px',
                }}
                onClick={()=>handleClick(id)}
              >
                <Grid
                  container
                  display={'flex'}
                  justifyContent={'space-between'}
                >
                  <Grid item>
                    <Typography
                      fontWeight={500}
                      fontSize={14}
                      color={theme.palette.textColor.highEmphasis}
                    >
                      {type} :
                      <b>{time}</b>
                    </Typography>
                  </Grid>
                  <Grid item>
                    <Typography
                      fontWeight={500}
                      fontSize={12}
                      color={theme.palette.textColor.mediumEmphasis}
                      variant="caption2"
                    >
                     {type !== 'None' ? `Delivery fees : ${props.items[cryptoId.id].deliveryFee*Math.pow(10,-id)} ${props.items[cryptoId.id].type}` : ''}
                    </Typography>
                  </Grid>
                </Grid>
              </MenuItem>
              <Divider sx={{backgroundColor:theme.palette.greyShade.grey100}}/>
              </Stack>
            ))}
          <MenuItem sx={{
                  height: 54,
                  backgroundColor: `${theme.palette.primary.primary100}`,
                  paddingLeft: '40px',
                  paddingRight: '40px',
                  paddingTop: '0px',
                  paddingBottom: '0px',
                }} 
                data-testid="noneId"
                  onClick={() => {dispatch(selectType({type:"Type",time:"None",fee:0}))}}>None</MenuItem>
          </Select>
        </FormControl>
     </StyledGrid>
    </div>
  )
}
export default DeliveryDropdown