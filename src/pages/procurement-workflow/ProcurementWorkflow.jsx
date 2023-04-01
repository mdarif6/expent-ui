import ReactFlow, {
  Background,
  Controls,
  applyEdgeChanges,
  applyNodeChanges,
} from "reactflow";
import "reactflow/dist/style.css";
import { useState, useCallback } from "react";

const initialNodes = [
  {
    id: "1",
    position: { x: 0, y: 0 },
    data: { label: "Start" },
    type: "input",
    style: { backgroundColor: "#6ede87", color: "white" },
  },
  {
    id: "2",
    type: "customNode",
    position: { x: 0, y: 100 },
    data: { label: "Requirement Selection" },
  },

  {
    id: "3",
    position: { x: 0, y: 200 },
    data: { label: "dfd" },
  },
  {
    id: "4",
    position: { x: 0, y: 300 },
    data: { label: "Collaborator" },
  },
  {
    id: "5",
    position: { x: -200, y: 300 },
    data: { label: "Collaborator" },
  },
  {
    id: "6",
    position: { x: 200, y: 300 },
    data: { label: "Collaborator" },
  },
];
const initialEdges = [
  { id: "1-2", source: "1", target: "2" },
  { id: "2-3", source: "2", target: "3" },
  { id: "3-4", source: "3", target: "4", label: "Add Condition", type: "step" },
  { id: "3-5", source: "3", target: "5" },
  { id: "3-6", source: "3", target: "6" },
];

export default function ProcurementWorkflow() {
  const [nodes, setNodes] = useState(initialNodes);
  const [edges, setEdges] = useState(initialEdges);

  const onNodesChange = useCallback(
    (changes) => setNodes((nds) => applyNodeChanges(changes, nds)),
    []
  );
  const onEdgesChange = useCallback(
    (changes) => setEdges((eds) => applyEdgeChanges(changes, eds)),
    []
  );

  //   const nodeTypes = {
  //     customNode: CustomNode,
  //   };

  return (
    <div style={{ height: "100vh", width: "100vw" }}>
      <ReactFlow
        nodes={nodes}
        edges={edges}
        onNodesChange={onNodesChange}
        onEdgesChange={onEdgesChange}
        // nodeTypes={nodeTypes}
      >
        <Background />
        <Controls />
      </ReactFlow>
    </div>
  );
}
