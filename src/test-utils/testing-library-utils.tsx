import { render, RenderOptions } from "@testing-library/react";
import { ReactElement } from "react";
import {CartContextProvider} from "../context/CartListContext"

const renderWithContext = (ui: ReactElement) =>
  render(ui, { wrapper: CartContextProvider });

export * from "@testing-library/react";

export { renderWithContext as render };