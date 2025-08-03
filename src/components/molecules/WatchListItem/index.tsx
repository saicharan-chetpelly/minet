import React, { useEffect, useState } from "react";
import { Chip, Grid, styled } from "@mui/material";
import IconWithTypography from "../IconTypo";
import { Image } from "../../atoms/Image";
import TypographyComponent from "../../atoms/Typography";
import theme from "../../../theme/theme";
import { AreaChart, Area } from "recharts";
import { chartsData } from "../../utils/watchlistChartData";
import axios from "axios";
import { act } from "react-dom/test-utils";
import GreenArrow from "../../../../public/assets/images/green-arrow.svg";
import RedArrow from "../../../../public/assets/images/red-arrow.svg";
import { CHIP_LABEL } from "../../utils/constants";
import { useNavigate } from "react-router";

let length = 1;

const StyledGrid = styled(Grid)({
  display: "flex",
  flexDirection: "row",
  justifyContent: "space-between",
  alignItems: "center",
  padding: "24px",
  height: "130px",
  border: `1px solid ${theme.palette.greyShade.grey100}`,
  borderRadius: "4px",
  cursor: "pointer"
});

export const WatchListItem = () => {
  const [data, setData] = useState(chartsData);
  const navigate=useNavigate();
  useEffect(() => {
    let presence: boolean;
    axios.get("http://localhost:3001/cryptoCurrency").then((res) => {
      const result: [{ isWatchlisted: boolean }] = res.data;
      length = 0;
      for (let i = 0; i < 10; i++) {
        presence = result[i].isWatchlisted;
        data[i].isWatchlisted = presence;
        act(() => {
          setData([...data]);
        });
        if (data[i].isWatchlisted) length++;
      }
    });
  }, []);
  const ternaryOperatorFunc = (
    condition: boolean,
    trueVal: any,
    falseVal: any
  ) => {
    return condition ? trueVal : falseVal;
  };
  return (
    <Grid container rowSpacing={3} columnSpacing={3}>
      {data.map((item) =>
        item.isWatchlisted ? (
          <Grid item key={item.id} xs={ternaryOperatorFunc(length > 1, 6, 12)} onClick={()=>{ navigate(`/${item.name.toLowerCase()}`)}}>
            <StyledGrid
              width={ternaryOperatorFunc(length > 1, "450px", "910px")}
            >
              <Grid item>
                <Grid container direction="column">
                  <Grid item>
                    <IconWithTypography
                      image={item.logo}
                      imageHeight={"42px"}
                      imageWidth={"42px"}
                      text={item.name}
                      textVariant={"body1"}
                      subText={item.amount}
                      subTextVariant={"body1"}
                      textWeight={"600"}
                      subTextWeight={"600"}
                      imageAlt={item.name}
                    ></IconWithTypography>
                  </Grid>
                  <Grid item paddingLeft={"52px"} paddingTop={"10px"}>
                    <Chip
                      label={CHIP_LABEL}
                      size="small"
                      style={{
                        color: theme.palette.textColor.mediumEmphasis,
                        backgroundColor: theme.palette.greyShade.grey50,
                      }}
                    />
                  </Grid>
                </Grid>
              </Grid>
              <Grid item>
                <div
                  style={{
                    position: "relative",
                    left: ternaryOperatorFunc(length > 1, 145, 570),
                  }}
                >
                  <Image
                    source={ternaryOperatorFunc(
                      item.status,
                      GreenArrow,
                      RedArrow
                    )}
                  ></Image>
                  <TypographyComponent
                    variant="overline"
                    style={{
                      color: ternaryOperatorFunc(
                        item.status,
                        theme.palette.semantic.success500,
                        theme.palette.semantic.error500
                      ),
                    }}
                  >
                    {" "}
                    {item.percentage}
                  </TypographyComponent>
                </div>

                <AreaChart
                  data={item.data}
                  height={58}
                  width={ternaryOperatorFunc(length > 1, 190, 622)}
                >
                  <defs>
                    <linearGradient id="color-green">
                      <stop
                        stopColor={theme.palette.semantic.success500}
                        stopOpacity={0.1}
                      />
                    </linearGradient>
                    <linearGradient id="color-red">
                      <stop
                        stopColor={theme.palette.semantic.error500}
                        stopOpacity={0.1}
                      />
                    </linearGradient>
                  </defs>
                  <Area
                    dataKey="value"
                    stroke={ternaryOperatorFunc(
                      item.status,
                      `${theme.palette.semantic.success500}`,
                      `${theme.palette.semantic.error500}`
                    )}
                    fill={ternaryOperatorFunc(
                      item.status,
                      "url(#color-green)",
                      "url(#color-red)"
                    )}
                  />
                </AreaChart>
              </Grid>
            </StyledGrid>
          </Grid>
        ) : (
          <div key={item.id}></div>
        )
      )}
    </Grid>
  );
};
