import type { JSX } from "react";

export type TNavItem = {
  path: string;
  name: string;
  dropdown?: {
    path: string;
    name: string;
  }[];
};

export type Props = {
  navItem: TNavItem;
};

export type TNavlink = {
  path: string;
  name: JSX.Element | string;
};
