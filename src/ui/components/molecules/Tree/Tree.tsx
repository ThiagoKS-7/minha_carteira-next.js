import TreeItem from "@/atoms/TreeItem/TreeItem";
import { ITreeProps } from "./@types";

export default function Tree(props: ITreeProps) {
    return (
      <ul style={{height:"fit-content"}}>
        {props.treeData.map((node) => (
          <TreeItem node={node} key={node.key} />
        ))}
      </ul>
    );
}