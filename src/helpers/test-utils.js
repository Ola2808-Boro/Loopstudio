import React from "react";
import { render } from "@testing-library/react";
import { ThemeProvider } from "styled-components";
import { theme } from "assets/styles/theme";
import GlobalStyle from "assets/styles/GlobalStyle";
import DataProvider from "providers/DataProvider";
const AllTheProviders = ({ children }) => {
  return (
    <ThemeProvider theme={theme}>
      <DataProvider>
        <GlobalStyle />
        {children}
      </DataProvider>
    </ThemeProvider>
  );
};

const customRender = (ui, options) =>
  render(ui, { wrapper: AllTheProviders, ...options });

// re-export everything
export * from "@testing-library/react";

// override render method
export { customRender as render };
