import { AppBar, Toolbar, Typography, Tabs, Tab } from "@material-ui/core";
import React from "react";

export default function Header(props) {
  const displayDesktop = () => {
    const {tab, setTab} = props
    return <Toolbar>
      <Typography variant="h6" component="h1">COVID-19 Vaccination Distribution Plan</Typography>
      <Tabs value={tab} onChange={(event, newValue)=> {setTab(newValue)}} >
       <Tab label="Distribution Priority" value={0}/>
       <Tab label="Comparison" value={1}/>
       <Tab label="Individual Risk" value={2}/>
       </Tabs>
    </Toolbar>;
  };

  return (
    <header>
      <AppBar position="sticky" >{displayDesktop()}</AppBar>
    </header>
  );
}