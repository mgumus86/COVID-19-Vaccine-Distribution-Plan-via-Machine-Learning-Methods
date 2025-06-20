import React, { useRef, useEffect, useState } from 'react';
import axios from "axios";
import { ResponsiveLine } from '@nivo/line';
import {ChartControl } from './chartcontrol'


export const LineChart = (props) =>{

    const [data, setData] = useState([])
    const [model, setModel] = useState(['random-forest'])
    const [sex, setSex] = useState(['male'])
    const [race, setRace] = useState(['wn'])

    useEffect(() => {
        let mounted = true;
        getData(model, sex, race)
          .then(data => {
            if(mounted) {
              setData(data)
            }
          })
        return () => mounted = false;
      }, [model, sex, race])
    return(
        <div style={{ height: 500, display:'flex', flexDirection:'row' }}>
            <ChartControl {...{model, setModel, sex, setSex, race, setRace}}/>
            <Line data={data}/>
        </div>
    );
}

const getData = async (model, sex, race) => {
    const  {data} =  await axios.get(`http://localhost:5000/data/all-age?model=${model}&sex=${sex}&race=${race}`)
    return data
}


export const Line = ({data}) => {
    return(
    data && <ResponsiveLine
        data={data}
        margin={{ top: 50, right: 110, bottom: 50, left: 60 }}
        xScale={{ type: 'point' }}
        yScale={{ type: 'linear', min: 0, max: 60, stacked: true, reverse: false }}
        yFormat=" >-.2f"
        axisTop={null}
        axisRight={null}
        axisBottom={{
            orient: 'bottom',
            tickSize: 5,
            tickPadding: 5,
            tickRotation: 0,
            legend: 'Age Group',
            legendOffset: 36,
            legendPosition: 'middle'
        }}
        axisLeft={{
            orient: 'left',
            tickSize: 5,
            tickPadding: 5,
            tickRotation: 0,
            legend: 'Probability of Death',
            legendOffset: -40,
            legendPosition: 'middle',
            format: v => `${v}%`
        }}
        pointSize={10}
        pointColor={{ theme: 'background' }}
        pointBorderWidth={2}
        pointBorderColor={{ from: 'serieColor' }}
        pointLabelYOffset={-12}
        useMesh={true}
        labelFormat=".0s"
    />
  );}