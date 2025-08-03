import Grid from "@mui/material/Grid";
import {Image} from "../../atoms/Image";
import TypographyComponent from "../../atoms/Typography";
import theme from "../../../theme/theme";
import React from 'react'
interface CryptoProps {
  imageSource: string;
  imageAlt: string;
  cryptoText: string;
  cryptoPayment: string;
  handleClick?: () => void;
}

export const ChooseCrypto = (props: CryptoProps) => {
  return (
    <Grid
      item
      data-testid="crypto"
      textAlign="center"
    >
      <Image source={props.imageSource} alt={props.cryptoText} />
      <TypographyComponent data-testid="text1" variant="body1">{props.cryptoText}</TypographyComponent>
      <TypographyComponent variant="caption1" color={`${theme.palette.textColor.mediumEmphasis}`}>
        {props.cryptoPayment}
      </TypographyComponent>
    </Grid>
  );
};