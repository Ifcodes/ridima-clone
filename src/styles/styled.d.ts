import {} from "styled-components";
import { themeType } from "./AppTheme";

declare module 'style-components' {
  export interface DefaultTheme extends themeType {}
}