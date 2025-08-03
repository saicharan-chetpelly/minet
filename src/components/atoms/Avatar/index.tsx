import React from 'react'
import { Avatar, AvatarProps } from '@mui/material'
const AvatarComponent = (props:AvatarProps): JSX.Element => {
  return (
    <Avatar  {...props} />
  )
}

export default AvatarComponent
