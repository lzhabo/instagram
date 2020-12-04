import React from "react";

export interface IFlexContainerProps
  extends React.DetailedHTMLProps<
    React.HTMLAttributes<HTMLDivElement>,
    HTMLDivElement
  > {
  padding?: string;
  flexDirection?: "row" | "column";
  justifyContent?:
    | "start"
    | "flex-end"
    | "space-around"
    | "space-between"
    | "center";
  alignItems?:
    | "start"
    | "end"
    | "center"
    | "inherit"
    | "unset"
    | "flex-end"
    | "flex-start";
  alignContent?:
    | "start"
    | "end"
    | "center"
    | "space-between"
    | "space-around"
    | "space-evenly"
    | "stretch";

  crossAxisSize?: "min" | "max";
}

export const FlexContainer: React.FunctionComponent<IFlexContainerProps> = ({
  children,
  padding,
  flexDirection,
  justifyContent,
  alignItems,
  alignContent,
  crossAxisSize,
  style,
  ...props
}) => (
  <div
    style={{
      [flexDirection === "column" ? "height" : "width"]: "100%",
      [flexDirection === "column" ? "width" : "height"]:
        crossAxisSize === "max" ? "100%" : null,
      display: "flex",
      flexDirection: flexDirection ?? "row",
      justifyContent: justifyContent ?? "start",
      alignItems: alignItems ?? "start",
      alignContent: alignContent ?? "normal",
      padding: padding,
      ...style,
    }}
    {...props}
  >
    {children}
  </div>
);
