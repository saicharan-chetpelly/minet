import { styled } from '@mui/material'
import { height } from '@mui/system'
import React from 'react'
interface IconComponentProps {
  width?: string
  height?: string
  padding?: string
  id?:string
  src: string
}
const StyledIcon = styled('img')((props: IconComponentProps) => ({
  height: props.height,
  width: props.width,
  padding: props.padding,
}))
const Icon = (props: IconComponentProps) => {
  const { src, width, height, padding,id } = props
  return (
    <div>
      <StyledIcon
        src={src}
        width={width}
        height={height}
        padding={padding}
        alt="icon"
        data-testid="iconComponent"
        id={id}
      />
    </div>
  )
}
export default Icon