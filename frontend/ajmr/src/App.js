import logo from './logo.svg';
import './App.css';
import Header from './components/header';
import { LineChart } from './components/linechart';
import Choropleth from './components/choropleth'
import ReactTooltip from "react-tooltip";
import React, { useState, useEffect } from "react";
import { Legend } from './components/legend';
import { Typography } from '@material-ui/core';
import { MultiLine } from './components/multilinechart';

function App() {
    const [tooltip, setTooltip] = useState("");
    const [tab, setTab] = React.useState(0);
  return (
    <div>
    <div className="App">
      <Header setTab={setTab} tab={tab}/>
    </div>
    {tab === 1 && (
    <div style={{ height: 500, maxWidth: 1000, marginLeft: 100, marginTop: 50}}>
    <Typography variant={'h4'} align={'center'}>Effectivness of Distribution Plan</Typography>
        <MultiLine />
      </div>)}
    {tab === 2 && (
    <div style={{ maxWidth: 1000, marginLeft: 50, marginTop: 50}}>
    <Typography variant={'h4'} align={'center'}>Risk of Death for an Individual with COVID-19</Typography>
        <LineChart />
      </div>)}
      {tab === 0 && (
    <div style={{ maxWidth: 1000, marginLeft: 50}}>
      <Typography variant={'h4'} align={'center'}>State Priority to Recieve Vaccine</Typography>
      <div style={{display: 'flex'}}>
        <ReactTooltip html={true} >{tooltip}</ReactTooltip>
        <Choropleth setToolTip={setTooltip}/>
        <div style={{marginTop: 200}}><Legend></Legend></div>
      </div>
      </div>)}
    </div>
  );
}

export default App;
