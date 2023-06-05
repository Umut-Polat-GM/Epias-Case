import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import SplitPane from "react-split-pane";
import Navbar from "./components/Navbar";
import {
  setSplitSize,
  setSimulation1Size,
  setSimulation2Size,
} from "./app/features/size/sizeSlice";
import Settings from "./components/Settings";
import DataTable from "./components/DataTable";

function App() {
  const { splitSize, simulation1Size, simulation2Size } = useSelector(
    (state) => state.size
  );
  const dispatch = useDispatch();

  const handleSplitChange = (newSize) => {
    dispatch(setSplitSize(newSize));
    // const containerSize = window.innerWidth;
    // const percentage = (newSize / containerSize) * 100;
    // console.log("Split Size:", `${percentage.toFixed(2)}%`);
  };

  const handleSimulation1Change = (newSize) => {
    dispatch(setSimulation1Size(newSize));
    // const containerSize = window.innerWidth;
    // const percentage = (newSize / containerSize) * 100;
    // console.log("Simulation 1 Size:", `${percentage.toFixed(2)}%`);
  };

  const handleSimulation2Change = (newSize) => {
    dispatch(setSimulation2Size(newSize));
    // const containerSize = window.innerWidth;
    // const percentage = (newSize / containerSize) * 100;
    // console.log("Simulation 2 Size:", `${percentage.toFixed(2)}%`);
  };

  useEffect(() => {
    // Load initial state from localStorage if available
    const savedState = JSON.parse(localStorage.getItem("appState"));
    if (savedState) {
      dispatch(setSplitSize(savedState.splitSize));
      dispatch(setSimulation1Size(savedState.simulation1Size));
      dispatch(setSimulation2Size(savedState.simulation2Size));
    }
  }, [dispatch]);

  useEffect(() => {
    // Save state to localStorage whenever it changes
    const stateToSave = {
      splitSize,
      simulation1Size,
      simulation2Size,
    };
    localStorage.setItem("appState", JSON.stringify(stateToSave));
  }, [splitSize, simulation1Size, simulation2Size]);

  return (
    <div className="App">
      <Navbar />
      <SplitPane
        split="horizontal"
        defaultSize={splitSize}
        onChange={handleSplitChange}
        style={{ position: "relative" }}
      >
        <SplitPane
          split="vertical"
          defaultSize={simulation1Size}
          onChange={handleSimulation1Change}
        >
          <div className="simulationDiv1">
            <DataTable />
          </div>
          <div className="statisticsDiv2">
            <Settings />
          </div>
        </SplitPane>
        <SplitPane
          split="vertical"
          defaultSize={simulation2Size}
          onChange={handleSimulation2Change}
        >
          <div className="simulationDiv2 container">3</div>
          <div className="statisticsDiv2 container">4</div>
        </SplitPane>
      </SplitPane>
    </div>
  );
}

export default App;
