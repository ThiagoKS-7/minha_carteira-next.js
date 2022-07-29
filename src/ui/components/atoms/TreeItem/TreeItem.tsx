import Tree from "@/molecules/Tree/Tree";
import { useState } from "react";
import { ITreeItemProps } from "./@types";
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import { Box } from "@mui/material";
import { ItemContainer } from "./styles";

export default function TreeItem(props: ITreeItemProps) {
    const { children, label } = props.node;
  
    const [showChildren, setShowChildren] = useState(false);
    const getStyle: any = () => {
        if (showChildren && props.node.children) {
            return {
                display:"flex",
                alignItems:"center",
                justifyContent:"space-between",
                fontWeight:550,
                fontSize:'18px'
            }
        } else if (props.node.children) {
            return {
                display:"flex",
                alignItems:"center",
                justifyContent:"space-between",
                fontWeight:500,
                fontSize:'18px'
            }
        } else {
            return {
                display:"flex",
                alignItems:"center",
                justifyContent:"flex-start",
                fontWeight:500,
                fontSize:'18px'
            }
        }
    };
    
  
    const handleClick = () => {
        if (props.node.children) {
            setShowChildren(!showChildren);
        }
    };
    return (
      <>
        <ItemContainer onClick={props.node.children ? handleClick : props.node.onClick}>
          <span style={getStyle()} >
            {props.node.icon ? <Box component={props.node.icon} style={{marginRight:"15px"}}/> : <></>}
            {label} 
            {props.node.children ? (showChildren ? <KeyboardArrowDownIcon style={{width: "3rem"}}/> : <KeyboardArrowRightIcon style={{width: "3rem"}}/>) : ''}
          </span>
        </ItemContainer>
        <ul style={{ paddingLeft: "15px",height: "fit-content", borderLeft: "1px solid black" }}>
          {showChildren && <Tree treeData={children} />}
        </ul>
      </>
    );
  }