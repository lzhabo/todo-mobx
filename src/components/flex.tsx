import styled from "@emotion/styled";

interface IFlexProps {
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
  crossAxisSize?: "min" | "max";
}

export const Row = styled.div<IFlexProps>`
  display: flex;
  flex-direction: row;
  justify-content: ${({ justifyContent }) => justifyContent ?? "start"};
  align-items: ${({ alignItems }) => alignItems ?? "start"};
  height: ${({ crossAxisSize }) =>
    crossAxisSize === "max" ? "100%" : "fit-content"};
`;

export const Column = styled.div<IFlexProps>`
  display: flex;
  flex-direction: column;
  justify-content: ${({ justifyContent }) => justifyContent ?? "start"};
  align-items: ${({ alignItems }) => alignItems ?? "start"};
  width: ${({ crossAxisSize }) =>
    crossAxisSize === "max" ? "100%" : "fit-content"};
`;
