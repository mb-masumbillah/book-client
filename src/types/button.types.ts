import type { JSX, MouseEventHandler } from "react";

export type TButton = {
  name: string | JSX.Element;
  className?: string;
  onClick?: MouseEventHandler<HTMLButtonElement>;
};