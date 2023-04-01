import { ReactFlowProvider } from "reactflow";
import "./App.css";
import ProcurementWorkflow from "./pages/procurement-workflow/ProcurementWorkflow";
import Intakeform from "./pages/project-information/IntakeForm";

function App() {
  return (
    <div className="App">
      <Intakeform />
      <ReactFlowProvider>
        <ProcurementWorkflow />
      </ReactFlowProvider>
    </div>
  );
}

export default App;
