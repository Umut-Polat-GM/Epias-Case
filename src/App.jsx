import SplitPane from "react-split-pane";

function App() {
  return (
    <div className="App">
      <SplitPane split="horizontal" defaultSize={500} allowResize={true}>
        <SplitPane
          split="vertical"
          minSize={100}
          maxSize={-100}
          defaultSize={"60%"}
        >
          <div className="simulationDiv1 container">1</div>
          <div className="statisticsDiv1 container">2</div>
        </SplitPane>
        <SplitPane split="horizontal" defaultSize={500} allowResize={true}>
          <SplitPane
            split="vertical"
            minSize={100}
            maxSize={-100}
            defaultSize={"60%"}
          >
            <div className="simulationDiv2 container">3</div>
            <div className="statisticsDiv2 container">4</div>
          </SplitPane>
        </SplitPane>
      </SplitPane>
    </div>
  );
}

export default App;
