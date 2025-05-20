import { useState } from "react";
import "./App.css";
import { CustomCase, DefaultCase } from "./components/CustomSwitchWithBreak";
import CustomSwitchWithBreak from "./components/CustomSwitchWithBreak";

function App() {
  const [inputValue, setInputValue] = useState("");

  return (
    <>
      <div>
        <input
          type="text"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          placeholder="Enter the no"
        />
        <CustomSwitchWithBreak value={inputValue}>
          <CustomCase value="10">
            <div>Case for 10</div>
          </CustomCase>
          <CustomCase value="20">
            <div>Case for 20</div>
          </CustomCase>
          <CustomCase value={(v) => v.length > 3}>
            <div>Length +"{">"}"+ 3</div>
          </CustomCase>
          <DefaultCase>
            <div>Default : No Match</div>
          </DefaultCase>
        </CustomSwitchWithBreak>
      </div>
    </>
  );
}

export default App;
