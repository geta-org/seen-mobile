import { extendTheme } from "native-base";

export const THEME = extendTheme({
  colors: {
    purple: {
      10: "#E8E6EE",
      20: "#D0CCDC",
      30: "#B8B3CC",
      40: "#A099BA",
      50: "#887FA8",
      60: "#716697",
      70: "#5A4D86",
      80: "#413375",
      90: "#2A1A64",
      100: "#120052",
    },
    black: {
      5: "#F8F8F9",
      10: "#D8D8DB",
      20: "#BDBDC2",
      50: "#7C7C86",
      100: "#26262B",
    },
    cyan: {
      5: "#F6FDFD",
      10: "#EDFCFC",
      20: "#DBF8F8",
      50: "#A4EEED",
      100: "#4ADEDD",
    },
    light_blue: {
      5: "#F8FCFE",
      10: "#F2F9FE",
      20: "#E3F2FB",
      50: "#B9DFF5",
      100: "#74C0EC",
    },
    red: {
      5: "#FEF4F4",
      20: "#FCD5D5",
      50: "#F89595",
      100: "#F12B2C",
    },
    green: {
      5: "#F4FCFA",
      20: "#D4F5EA",
      50: "#94E5CB",
      100: "#29CC97",
    },
    white: "#FCFCFD",
  },
  fonts: {
    light: "Comfortaa_300Light",
    medium: "Comfortaa_500Medium",
    bold: "Comfortaa_700Bold",
    regular: "Comfortaa_400Regular",
  },
  fontSizes: {
    xs_2: 10,
    xs: 12,
    sm: 14,
    md: 16,
    xl: 20,
    xl_2: 26,
    xl_3: 32,
    xl_4: 40,
    xl_5: 52,
  },
  sizes: {
    14: 56,
  },
});
