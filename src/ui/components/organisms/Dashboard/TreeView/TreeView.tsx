import TreeView from '@mui/lab/TreeView';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import ArrowRightIcon from '@mui/icons-material/ArrowRight';
import { ITreeViewProps } from './@types';




export default function DefaultTreeView(props:ITreeViewProps) {
  return (
    <TreeView
      aria-label="gmail"
      defaultExpanded={['3']}
      defaultCollapseIcon={<ArrowDropDownIcon />}
      defaultExpandIcon={<ArrowRightIcon />}
      defaultEndIcon={<div style={{ width: 24 }} />}
      sx={{ height: 'fit-content', flexGrow: 1, maxWidth: 400, overflowY: 'auto' }}
    >
        {props.children}
    </TreeView>
  );
}