"use client";

import React from "react";
import useScreenSize from "../../hooks/useScreenSize";
import { ResponsiveComponentProps } from "./ResponsiveComponent.types";

const ResponsiveComponent = ({ children }: ResponsiveComponentProps) => {
  const size = useScreenSize();

  if (size === undefined) {
    return null;
  }
  return <>{children({ size })}</>;
};

export default ResponsiveComponent;
