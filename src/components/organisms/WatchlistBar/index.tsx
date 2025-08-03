import { Box, styled, Container, Grid } from "@mui/material";
import React from "react";
import { Image } from "../../atoms/Image";
import TypographyComponent from "../../atoms/Typography";
import Icon from "../../atoms/Icon";
import { TypographyProps } from "@mui/material/Typography";
import { WatchListItem } from "../../molecules/WatchListItem";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import ModeEditOutlinedIcon from "@mui/icons-material/ModeEditOutlined";
import MuiButton from "../../atoms/Button";
import Partition from "../../../../public/assets/images/Partition.svg";
import GridImage from "../../../../public/assets/images/grid-bl.svg";
import List from "../../../../public/assets/images/list-1.svg";
import { useNavigate } from "react-router";

interface WatchlistProps extends TypographyProps {
  mainText: string;
  optionText: string;
  partition: string;
  editText: string;
}
interface StyledBoxProp {
  gap?: string;
}
const StyledBox = styled(Box)((props: StyledBoxProp) => ({
  display: "flex",
  alignItems: "center",
  gap: props.gap ? props.gap : "12px",
}));
const OuterBox = styled(Container)({
  display: "flex",
  flexDirection: "column",
  alignContent: "center",
  flexBasis: "100%",
  paddingLeft: "0px !important",
  paddingRight: "0px !important",
  paddingBottom: "26px",
  width: "910px",
  height: "130px",
});
const WatchList = (props: WatchlistProps) => {
  const navigate = useNavigate();
  const { mainText, optionText, partition, editText } = props;
  const discoverAssets = () => {
    navigate("trade-page", { state: { tabValue: 0 } });
  };
  const viewWatchlist = () => {
    navigate("trade-page", { state: { tabValue: 1 } });
  };
  return (
    <OuterBox data-testid="watchlist">
      <Grid container>
        <Grid item paddingBottom={"14px"} xs={12}>
          <Grid container direction="row">
            <Grid item xs={6}>
              <StyledBox>
                <TypographyComponent
                  variant="subtitle1"
                  children={mainText}
                  style={{ fontWeight: "600" }}
                />
                <Image source={partition} height="auto" width="auto" />
                <StyledBox data-testid="styled-box" gap="9px">
                  <MuiButton
                    variant="text"
                    endIcon={<ChevronRightIcon />}
                    style={{ textTransform: "none", fontWeight: "600" }}
                    onClick={discoverAssets}
                    disableRipple
                    sx={{
                      "&:hover": {
                        backgroundColor: "transparent",
                      },
                    }}
                  >
                    {optionText}
                  </MuiButton>
                </StyledBox>
              </StyledBox>
            </Grid>
            <Grid
              item
              xs={6}
              display="flex"
              justifyContent={"end"}
              data-testid="grid2"
            >
              <StyledBox>
                <StyledBox gap="7px" data-testid="rowcontainer">
                  <MuiButton
                    variant="text"
                    endIcon={<ModeEditOutlinedIcon />}
                    style={{ textTransform: "none", fontWeight: "600" }}
                    onClick={viewWatchlist}
                    disableRipple
                    sx={{
                      "&:hover": {
                        backgroundColor: "transparent",
                      },
                    }}
                  >
                    {editText}
                  </MuiButton>
                </StyledBox>
                <Image source={Partition} height="auto" width="auto" />
                <Image source={GridImage} height="auto" width="auto" />
                <Icon
                  src={List}
                  height="auto"
                  width="auto"
                  padding="2.5px 0 0 0 !important"
                />
              </StyledBox>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
      <WatchListItem></WatchListItem>
    </OuterBox>
  );
};
export default WatchList;
