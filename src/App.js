import React, {useState} from 'react';
import Paper from "@material-ui/core/Paper"
import Tabs from '@material-ui/core/Tabs';
import Tab from "@material-ui/core/Tab";
import TabList from "./TabList";
import "./styles/App.css";

function App() {
  const [tabSelected, setTabSelected] = useState(0);

  const handleChange = (event, newValue) => {
    setTabSelected(newValue);
  }

  return (
    <div className='main-container'>
      <div className="paper-container">
        <h1 className='title'>To Do List</h1>
        <Paper>
          <Tabs
            value={tabSelected}
            onChange={handleChange}
            indicatorColor="primary"
            textColor="primary"
            centered
          >
            <Tab label="To Do"/>
            <Tab label="Done" />
          </Tabs>
        </Paper>
        <TabList isToDoTab={tabSelected === 0}/>
      </div>
    </div>
  )
}

export default App;
