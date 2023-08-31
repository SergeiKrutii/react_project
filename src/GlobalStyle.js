import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
body {
  background: ${(props) => (props.isDark ? "#ffffff" : "#DCDCDC")};
}
  :root {
    --primary-color: #000000;
    // --secondary-color: #52555f;
    --secondary-color: ${(props) => (props.isDark ? "#52555f" : "black")}
    --transparent-color: rgba(82, 85, 95, 0.7);
    --category-placeholder-color: ${(props) =>
      props.isDark ? "#c7ccdc " : "#000000"};
    --main-bg-button-color: #ff751d;
    --graph-bg-color: #ffdac0;
    --hover-button-color: ${(props) => (props.isDark ? "#ffffff" : "#DCDCDC")};
    --main-bg-color: ${(props) => (props.isDark ? "#f5f6fb" : "#C0C0C0")};
    --expence-text-color: #e7192e;
    --income-text-color: #407946;
    --main-popup-color: linear-gradient(117.84deg, #1d346a 2.84%, #031634 67.28%);
  },
  `;
