import { ReactNode } from "react";

export interface NavButtonProps {
  x?: string;
  y?: string;
  label?: string;
  link?: string;
  icon: string;
  newTab?: boolean;
  labelDirection?: string;
}

export interface IconProps {
  iconClass: string;
  exRef?: string;
  children: ReactNode;
}
