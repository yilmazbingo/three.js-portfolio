import { ReactNode } from "react";

type ChildFunction = (props: { size: number }) => React.ReactNode;

export interface ResponsiveComponentProps {
  children: ChildFunction;
}
