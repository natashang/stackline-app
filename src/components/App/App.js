import "./App.css";
import LeftPanel from "../LeftPanel/LeftPanel";

function App(props) {
  return (
    <div className="appContainer">
      <div className="leftPanelContainer">
        <p>app.js-left panel container</p>
        <LeftPanel />
      </div>

      <div className="rightContentContainer">
        <p>app.js-right content container</p>
        {/* <props.RightContent /> */}
      </div>
      {/* */}
    </div>
  );
}

export default App;
