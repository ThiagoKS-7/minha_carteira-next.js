import { StyledTreeItemRoot } from "./styles";
import { StyledTreeItemProps } from "./@types";
import Box from '@mui/material/Box';
import { Typography } from "@mui/material";

export default function StyledTreeItem(props: StyledTreeItemProps) {
    const {
      bgColor,
      color,
      labelIcon: LabelIcon,
      labelInfo,
      labelText,
      onClick,
      ...other
    } = props;
  
    return (
      <StyledTreeItemRoot
        label={
          <Box sx={{ display: 'flex', alignItems: 'center', p: 0.5, pr: 0 }}>
            <Box component={LabelIcon} color="inherit" sx={{ mr: 1 }} />
            <Typography variant="body2" sx={{ display: 'flex', alignItems: 'center', fontSize: '1.1rem', fontWeight: 'inherit', flexGrow: 1 }}>
              {labelText}
            </Typography>
            <Typography variant="caption" color="inherit">
              {labelInfo}
            </Typography>
          </Box>
        }
        onClick={onClick}
        style={{
          '--tree-view-color': color,
          '--tree-view-bg-color': bgColor,
        }}
        {...other}
      />
    );
  }