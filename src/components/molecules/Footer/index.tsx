import { Grid, styled, Stack, Box } from "@mui/material";
import React from "react";
import theme from "../../../theme/theme";
import MuiButton from "../../atoms/Button";
import TypographyComponent from "../../atoms/Typography";
import Dropper from "../Dropper";
import {
  LEGAL,
  DASHBOARD,
  CAREERS,
  COPY,
  NEED_HELP,
  footerList,
} from "../../utils/constants";
const StyledBox = styled(Box)({
  [theme.breakpoints.up("lg")]: {
    minWidth:"98%",
    maxWidth: "1500px",
  },
  [theme.breakpoints.up("xl")]: {
    maxWidth: "98vw",
  },
  [theme.breakpoints.down("lg")]: {
    minWidth: "1366px",
  },
  [theme.breakpoints.between("lg", "xl")]: {
    width: "97vw",
  },

  paddingLeft: "24px",
});
const MainContainer = styled(Grid)({
  height: "90px",
  borderTop: `1px solid ${theme.palette.greyShade.grey100}`,
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  paddingRight: "22px",
});
const StyledTypographyBlue = styled(TypographyComponent)({
  color: theme.palette.primary.primary500,
});
const StyledTypographyBlack = styled(TypographyComponent)({
  color: theme.palette.textColor.highEmphasis,
});
const StyledButton = styled(MuiButton)({
  width: "109px",
  height: "42px",
  border: `1px solid ${theme.palette.primary.main}`,
  fontWeight: "bold",
  "&:hover": {
    backgroundColor: theme.palette.semantic.main,
  },
});
const RightContainer = styled(Grid)({
  alignItems: "flex-end",
  margin: "0px",
});
const Footer = () => {
  return (
    <StyledBox data-testid="footer">
      <MainContainer container>
        <Grid item xs={6}>
          <Stack direction="row" spacing={4}>
            <StyledTypographyBlue variant="body2" children={DASHBOARD} />
            <StyledTypographyBlue variant="body2" children={CAREERS} />
            <StyledTypographyBlue variant="body2" children={LEGAL} />
            <StyledTypographyBlack variant="body2" children={COPY} />
          </Stack>
        </Grid>
        <RightContainer item xs={6} justifyContent="flex-end">
          <Stack direction="row" spacing={2} justifyContent="flex-end !important">
            <Dropper
              menuList={footerList}
              width={"170px"}
              backgroundColor="none"
              data-testId="dropperId"
            />
            <StyledButton variant="outlined" children={NEED_HELP} />
          </Stack>
        </RightContainer>
      </MainContainer>
    </StyledBox>
  );
};
export default Footer;
