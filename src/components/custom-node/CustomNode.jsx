import { memo } from "react";
import { Handle, Position } from "reactflow";
import "./CustomNode.css";
export default memo(({ isConnectable }) => {
  return (
    <>
      <Handle
        type="target"
        position={Position.Top}
        style={{ background: "#555" }}
        onConnect={(params) => console.log("handle onConnect", params)}
        isConnectable={isConnectable}
      />
      <div className="expent-customnode-wrapper">
        <div>icon</div>
        <div>
          <p>Heading</p>
          <p>subheading</p>
        </div>
      </div>
      <Handle
        type="source"
        position={Position.Bottom}
        style={{ background: "#555" }}
        onConnect={(params) => console.log("handle onConnect", params)}
        isConnectable={isConnectable}
      />
    </>
  );
});
