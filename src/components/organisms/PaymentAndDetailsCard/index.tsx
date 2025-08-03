import { Box, Grid, styled } from "@mui/material";
import React, { useEffect, useState } from "react";
import TypographyComponent from "../../atoms/Typography";
import theme from "../../../theme/theme";
import axios from "axios";
import { Image } from "../../atoms/Image";
import Usd from "../../../../public/assets/images/rupee.svg";
import { DEFAULT } from "../../utils/constants";
interface PaymentAndDetailsProps {
  title: string;
}
interface WalletsData {
  id: number;
  iconURL: string;
  cryptoName: string;
  totalBalance: string;
}
const StyledGrid = styled(Grid)({
  border: `1px solid ${theme.palette.greyShade.grey100}`,
  borderRadius: "4px",
  background: theme.palette.semantic.main,
});
const PaymentAndDetailsCard = (props: PaymentAndDetailsProps) => {
  const { title } = props;
  const getImage = (pathname: string): string => {
    if (pathname === "USDCoinIcon") return Usd;
    else return "";
  };
  const [items, setItems] = useState<WalletsData[]>([
    {
      id: 1,
      iconURL: "",
      cryptoName: "",
      totalBalance: "",
    },
  ]);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  useEffect(() => {
    const getDataApi = async () => {
      try {
        const result = await axios.get("http://localhost:3001/wallets");
        setLoading(false);
        setItems(result.data);
      } catch (err) {
        setLoading(false);
        setError("Error");
      }
    };
    getDataApi();
  }, []);
  const bal = Math.round(+items[0].totalBalance.substring(1) * 100) / 100;
  return loading ? (
    <h1 data-testid="header">Loading...</h1>
  ) : (
    <Box>
      {error && <p data-testid="para1">{error}</p>}
      <StyledGrid
        container
        direction={"column"}
        display="flex"
        maxWidth="766px"
        gap={"16px"}
        padding="24px"
      >
        <Grid item>
          <TypographyComponent
            variant="body1"
            children={title}
            fontWeight="bold"
          />
        </Grid>
        <Grid item>
          <StyledGrid
            padding={"15px"}
            container
            display={"flex"}
            direction={"row"}
            justifyContent="space-between"
            alignItems={"center"}
          >
            <Grid item>
              <Grid
                container
                direction={"row"}
                display="flex"
                alignItems={"center"}
                gap={2}
              >
                <Grid item>
                  <Image source={getImage(items[0].iconURL)} alt="USDCoin" />
                </Grid>
                <Grid item>
                  <Grid container direction={"column"} gap={0.5}>
                    <Grid item>
                      <TypographyComponent
                        variant="caption1"
                        children={`${items[0].cryptoName} (cash)`}
                      />
                    </Grid>
                    <Grid item>
                      <TypographyComponent
                        variant="subtitle1"
                        children={`Total balance: $${bal}`}
                        color={theme.palette.textColor.mediumEmphasis}
                      />
                    </Grid>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
            <Grid item>
              <TypographyComponent
                variant="caption1"
                color={theme.palette.textColor.mediumEmphasis}
                children={DEFAULT}
              />
            </Grid>
          </StyledGrid>
        </Grid>
      </StyledGrid>
    </Box>
  );
};
export default PaymentAndDetailsCard;
