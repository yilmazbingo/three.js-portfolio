import React from "react";
import { IconProps } from "./Navigation.types";

const Icon = ({ iconClass, exRef, children }: IconProps) => {
  return (
    <a target="_blank" className={iconClass} href={exRef}>
      {children}
    </a>
  );
};

export default Icon;
