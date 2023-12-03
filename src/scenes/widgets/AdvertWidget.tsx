import { Typography, useTheme } from "@mui/material";
import FlexBetween from "components/FlexBetween";
import WidgetWrapper from "components/WidgetWrapper";

const AdvertWidget = () => {
  const { palette } = useTheme();
  const dark = palette.primary.dark;
  const main = palette.primary.main;
  const medium = palette.primary.contrastText;

  return (
    <WidgetWrapper>
      <FlexBetween>
        <Typography color={dark} variant="h5" fontWeight="500">
          Sponsored
        </Typography>
        <Typography color={medium}>Create Ad</Typography>
      </FlexBetween>
      <img
        width="100%"
        height="auto"
        alt="advert"
        src="http://localhost:3001/assets/info4.jpeg"
        style={{ borderRadius: "0.75rem", margin: "0.75 0" }}
      />
      <FlexBetween>
        <Typography color={medium}>MikaCosmetics</Typography>
        <Typography color={medium}>mikaCosmetics.com</Typography>
      </FlexBetween>
      <FlexBetween color={medium} m="0.5rem 0">
        Your pathwet to stunnung and imaculate beauty and made sure your skin is
        exfoliating skin and shining like light.
      </FlexBetween>
    </WidgetWrapper>
  );
};

export default AdvertWidget;
