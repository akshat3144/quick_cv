import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { ChakraProvider, extendTheme } from "@chakra-ui/react";

const theme = extendTheme({
  fonts: {
    heading: "Poppins, sans-serif",
    body: "Poppins, sans-serif",
  },
  colors: {
    primary: {
      50: "#e5f4fd",
      100: "#c0e2f9",
      200: "#99cff5",
      300: "#70bbf0",
      400: "#47a7eb",
      500: "#2894ec", // Main brand color
      600: "#1a77cd",
      700: "#115aad",
      800: "#0a3e8d",
      900: "#05246e",
    },
  },
});

ReactDOM.render(
  <React.StrictMode>
    <ChakraProvider theme={theme}>
      <App />
    </ChakraProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
