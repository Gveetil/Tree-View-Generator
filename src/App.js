import React, { useEffect, useState } from 'react';
import { HashRouter, Route, Switch } from "react-router-dom";
import './App.css';
import Navbar from './components/Navbar';
import Homepage from './pages/Homepage';
import VerticalTree from './pages/VerticalTree';
import HorizontalTree from './pages/HorizontalTree';
import { AppContextAction, useAppContext } from "./utils/AppContext";
import treeDataParser from './utils/TreeDataParser';

function App() {
  /* eslint-disable no-unused-vars */
  const [state, dispatch] = useAppContext();
  const [sampleSizeSmall, setSampleSizeSmall] = useState(true)

  // Toggles size of the sample data
  function handleSizeChange(event) {
    const smallSampleSelected = (event.target.name === "smallSample")
    setSampleSizeSmall(smallSampleSelected)
  }

  // Load sample tree view data on load of this page and when 
  // sample size selection changes
  useEffect(() => {

    async function loadSampleData() {
      const treeData = await treeDataParser.loadSampleFile(sampleSizeSmall)
      dispatch({
        type: AppContextAction.LOAD_TREE_DATA,
        value: treeData,
      });
    }

    loadSampleData()

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [sampleSizeSmall]);

  return (
    <HashRouter basename={process.env.PUBLIC_URL}>
      <Navbar sampleSizeSmall={sampleSizeSmall} handleSizeChange={handleSizeChange} />
      <div className="page-navbar-offset">
        <Switch>
          <Route exact path="/vertical">
            <VerticalTree />
          </Route>
          <Route exact path="/horizontal">
            <HorizontalTree />
          </Route>
          <Route path="/">
            <Homepage />
          </Route>
        </Switch>
      </div>
    </HashRouter >
  );
}

export default App;
