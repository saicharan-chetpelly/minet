import { Stack } from "@mui/material";
import React from "react";
import ApplicationHeader from "../../organisms/ApplicationHeader";
import NavigationBar from "../../organisms/NavigationBar";
import DiscoverAssets from "../../organisms/DiscoverAssets";
import { TRADE } from "../../utils/constants";
import Footer from "../../molecules/Footer";
const TradePage = () => {
  return (
    <Stack direction="row">
      <NavigationBar currentPage="Trade" />
      <Stack flexGrow={1}>
        <ApplicationHeader isButtonsRequired={true} headerTitle={TRADE} />
        <Stack overflow="auto">
          <DiscoverAssets />
          <Footer />
        </Stack>
      </Stack>
    </Stack>
  );
};

export default TradePage;
