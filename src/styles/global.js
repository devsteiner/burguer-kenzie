import { createGlobalStyle } from "styled-components";

export const StyledGlobal = createGlobalStyle`

  :root {
    --color-primary: #27ae60;
    --color-primary-50: #93d7af;
    --color-secondary: #eb5757;
    --color-white: white;

    --color-gray-100: #333333;
    --color-gray-50: #828282;
    --color-gray-20: #e0e0e0;
    --color-gray-0: #f5f5f5;

    --color-negative: #e60000;
    --color-warning: #ffcd07;
    --color-sucess: #168821;
    --color-information: #155bcb;

    --sz-title-1: 22px;
    --sz-title-2: 18px;

    --sz-text-1: 16px;
    --sz-text-2: 14px;
    --sz-text-3: 12px;

    --font-weg-700: 700;
    --font-weg-600: 600;
    --font-weg-500: 500;
    --font-weg-400: 400;

    --bd-radius-1: 8px;
    --bd-radius-2: 5px;
  }

  body {
    font-family: "Inter", sans-serif;
    color: var(--color-gray-100);
  }
`;
