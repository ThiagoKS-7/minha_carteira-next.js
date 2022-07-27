import { TreeItemProps } from "@mui/lab";
import { SvgIconProps } from "@mui/material";

export type StyledTreeItemProps = TreeItemProps & {
    bgColor?: string;
    color?: string;
    labelIcon: React.ElementType<SvgIconProps>;
    labelInfo?: string;
    labelText: string;
    onClick?: () => void;
  };