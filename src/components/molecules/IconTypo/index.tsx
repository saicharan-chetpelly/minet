import { Box, styled } from "@mui/material";
import React from "react";
import { Image } from "../../atoms/Image";
import TypographyComponent from "../../atoms/Typography";
import { TypographyProps } from "@mui/material/Typography";
interface IconWithTypographyProps extends TypographyProps {
  image: string;
  imageHeight: string;
  imageWidth: string;
  iconandtextgap?: string;
  text: string;
  textVariant: any;
  textColor?: string;
  subText?: string | JSX.Element;
  subTextVariant?: any;
  subTextColor?: string;
  textHeight?: string;
  textWidth?: string;
  margin?: string;
  gapBetweenText?: string;
  textTrasform?: string;
  letterSpacing?: string;
  marginRight?: string;
  textWeight?: string;
  subTextWeight?: string;
  imageAlt?:string
}
interface FlexRowBoxProps {
  iconandtextgap?: string;
  margin?: string;
}
const FlexRowBox = styled(Box)((props: FlexRowBoxProps) => ({
  display: "flex",
  alignContent: "center",
  alignItems: "center",
  gap: props.iconandtextgap ? props.iconandtextgap : "10px",
  margin: props.margin ? props.margin : "0",
}));
const FlexColumnBox = styled(Box)({
  display: "flex",
  flexDirection: "column",
  alignContent: "center",
});
const IconWithTypography = (props: IconWithTypographyProps) => {
  const {
    image,
    text,
    textVariant,
    subText,
    subTextVariant,
    imageHeight,
    imageWidth,
    textColor,
    subTextColor,
    iconandtextgap,
    textWidth,
    textHeight,
    margin,
    gapBetweenText,
    textTransform,
    letterSpacing,
    marginRight,
    textWeight,
    subTextWeight,
    imageAlt
  } = props;
  return (
    <div>
      <FlexRowBox
        iconandtextgap={iconandtextgap}
        margin={margin}
        data-testid="iconWithTypography"
      >
        <Image source={image} width={imageWidth} height={imageHeight} alt={imageAlt} />
        <FlexColumnBox
          data-testid="flex-col"
          gap={gapBetweenText ? gapBetweenText : "4px"}
        >
          <TypographyComponent
            variant={textVariant}
            style={{ color: textColor, width: textWidth, height: textHeight }}
            textTransform={textTransform}
            letterSpacing={letterSpacing}
            marginRight={marginRight}
            fontWeight={textWeight}
          >
            {text}
          </TypographyComponent>
          {subText && (
            <TypographyComponent
              variant={subTextVariant}
              style={{ color: subTextColor, fontWeight: subTextWeight }}
              data-testid="iconWithTypography-subtext"
            >
              {subText}
            </TypographyComponent>
          )}
        </FlexColumnBox>
      </FlexRowBox>
    </div>
  );
};
export default IconWithTypography;
