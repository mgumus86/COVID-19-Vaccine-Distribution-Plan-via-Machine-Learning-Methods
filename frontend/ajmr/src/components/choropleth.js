import React, { useState, useEffect, memo } from "react";
import { ComposableMap, Geographies, Geography, ZoomableGroup } from "react-simple-maps";
import { scaleLinear, scaleQuantize } from "d3-scale";
import { csv } from "d3-fetch";
import csvfile from "./states_groups.csv"
const geoUrl = "https://cdn.jsdelivr.net/npm/us-atlas@3/states-10m.json";

const colorScale = scaleQuantize()
  .domain([4.55, 6.98])
  .range([
    "#feedde",
    "#fdbe85",
    "#fd8d3c",
    "#e6550d",
    "#a63603",

  ]);

const Choropleth = ({setToolTip}) => {
  const [data, setData] = useState([]);

  useEffect(() => {
    csv(csvfile).then(states => {
        setData(states);
    });
  }, []);

  return (
    <>
      <ComposableMap data-tip="" projection="geoAlbersUsa">
        <Geographies geography={geoUrl}>
          {({ geographies }) =>
            geographies.map(geo => {
              const state = data.find(state => state.state_name === geo.properties.name);
              return (
                <Geography
                  key={geo.rsmKey}
                  geography={geo}
                  fill={colorScale(state ? state.est_perc_dead : "#EEE")}
                  onMouseEnter={() => {
                    if(!state){
                      return ""
                    }
                    setToolTip(`<b>${geo.properties.name}</b> <br />
                    Estimated Percent Dead: ${state.est_perc_dead}<br />
                    Priority: ${state.rank}
                    `);
                  }}
                  onMouseLeave={() => {
                    setToolTip("");
                  }}
                  style={{
                    hover: {
                      fill: "#F53",
                    }}}
                />
              );
            })
          }
        </Geographies>
      </ComposableMap>
    </>
  );
};

export default memo(Choropleth);


