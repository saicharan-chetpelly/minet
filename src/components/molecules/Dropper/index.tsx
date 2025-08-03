import { MenuItem, Select, styled } from '@mui/material'
import React from 'react'
import { Box } from '@mui/system'
import theme from '../../../theme/theme'
import Icon from '../../atoms/Icon'
import TypographyComponent from '../../atoms/Typography'
import ChevronDown from '../../../../public/assets/images/down.svg'
interface DropperProps {
  onChange?: (arg: any) => void
  menuList: Array<string>
  width: string | React.CSSProperties
  backgroundColor?: string | React.CSSProperties
}
const StyledDropDown = styled(Select)(() => ({
  '& .MuiSelect-select': {
    height: '22px',
    padding: '9px 0 8px 4px !important',
  },
  '& .MuiTypography-root': {
    paddingLeft: '8px !important',
  },
  '& .MuiOutlinedInput-notchedOutline': {
    border: `1px solid ${theme.palette.greyShade.grey100} !important`,
    padding: '0px',
  },
  input: {
    '&::placeholder': {
      padding: '0px !important',
      color: 'textColor.main',
      fontFace: 'body2',
    },
  },
  
}))
const StyledBox = styled(Box)(() => ({
  minWidth: '32px !important',
  height: '32px',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  marginRight: '3px',
  marginLeft: '0px',
}))
const IconComponent=() => (
  <StyledBox >
    <Icon src={ChevronDown} width="12.73px" height="7.78px" />
  </StyledBox>
);
const Dropper: React.FC<DropperProps> = (props) => {
  const { onChange, menuList, width , backgroundColor} = props
 return onChange ? (
    <StyledDropDown
      data-testid="dropDown"
      defaultValue={menuList[0]}
      onChange={(e) => onChange(e.target.value)}
      sx={{ width: width, backgroundColor: backgroundColor }}
      IconComponent={IconComponent}
      MenuProps={{
        anchorOrigin: {
          vertical: 'bottom',
          horizontal: 'left',
        },
        transformOrigin: {
          vertical: 'top',
          horizontal: 'left',
        },
      }}
    >
      {menuList.map((menuItem) => (
        <MenuItem key={menuItem} value={menuItem} data-testid={menuItem}>
          <TypographyComponent variant="body1">{menuItem}</TypographyComponent>
        </MenuItem>
      ))}
    </StyledDropDown>
  ):(<StyledDropDown
    data-testid="dropDown"
    defaultValue={menuList[0]}
    sx={{ width: width, backgroundColor: backgroundColor }}
    IconComponent={IconComponent}
    MenuProps={{
      anchorOrigin: {
        vertical: 'bottom',
        horizontal: 'left',
      },
      transformOrigin: {
        vertical: 'top',
        horizontal: 'left',
      },
    }}
  >
    {menuList.map((menuItem) => (
      <MenuItem key={menuItem} value={menuItem} data-testid={menuItem}>
        <TypographyComponent variant="body1">{menuItem}</TypographyComponent>
      </MenuItem>
    ))}
  </StyledDropDown>)
}
export default Dropper