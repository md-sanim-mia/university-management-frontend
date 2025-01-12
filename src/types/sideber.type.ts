import { ReactNode } from "react";

export type TRoute = {
  path: string;
  element: ReactNode;
};
export type TPathRoute = {
  name: string;
  path?: string;
  element?: ReactNode;
  children?: TPathRoute[];
};

export type TSideber = {
  key: string;
  label: ReactNode;
  children?: TSideber[];
};
