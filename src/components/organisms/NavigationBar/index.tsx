import React, { useEffect, useState } from "react";
import styled from "@emotion/styled";
import { Stack, Tooltip, tooltipClasses, TooltipProps } from "@mui/material";
import AvatarComponent from "../../atoms/Avatar";
import Icon from "../../atoms/Icon";
import IconButton from "@mui/material/IconButton";
import { navigationList } from "../../utils/constants";
import theme2 from "../../../theme/theme";
import logo from "../../../../public/assets/images/logo.svg";
import { useNavigate } from "react-router";

const CustomStack = styled(Stack)({
  left: "0px",
  padding: "24px",
  height: "auto",
  width: "32px",
  borderRight: "1px solid #E8E8F7",
  backgroundColor: theme2.palette.warning.contrastText,
});
const CustomAvatar = styled(AvatarComponent)({
  height: "32px",
  width: "32px",
  marginBottom: "50px",
});
interface NavigationItem {
  title: string;
  path: string;
  function: () => void;
}

const ColoredTooltip = styled(({ className, ...props }: TooltipProps) => (
  <Tooltip {...props} arrow classes={{ popper: className }} />
))(({ theme }) => ({
  [`& .${tooltipClasses.arrow}`]: {
    color: theme2.palette.greyShade.grey500,
  },
  [`& .${tooltipClasses.tooltip}`]: {
    backgroundColor: theme2.palette.greyShade.grey500,
  },
}));
interface NavBarProps {
  currentPage?: string;
}

const NavigationBar = (props: NavBarProps) => {
  const [activeIcon, setActiveIcon] = useState(props.currentPage);
  const navigate = useNavigate();

  useEffect(() => {
    console.log(activeIcon);
  }, [activeIcon]);

  const handleClick = (item: NavigationItem) => {
    setActiveIcon(item.title);
    item.function();
    console.log(item.title);
    console.log(activeIcon);

    if (item.title === "Dashboard") {
      navigate("/");
    }
    if (item.title === "Trade") {
      navigate("/trade-page", { state: { tabValue: 0 } });
    }
  };

  return (
    <CustomStack>
      <CustomAvatar src={logo} />
      <Stack alignItems="center" spacing="56px">
        {navigationList.map((item) => (
          <ColoredTooltip
            title={item.title}
            placement="right"
            arrow
            key={item.title}
          >
            <IconButton onClick={() => handleClick(item)}>
              <Icon
                src={item.title === activeIcon ? item.filled : item.path}
                height="20px"
                width="20px"
              />
            </IconButton>
          </ColoredTooltip>
        ))}
      </Stack>
    </CustomStack>
  );
};

export default NavigationBar;
