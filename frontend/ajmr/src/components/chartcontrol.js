import { motionDefaultProps } from '@nivo/core';
import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';

export const ChartControl = (props) =>{
    const {model, setModel, race, setRace, sex, setSex} = props

    const onModelChange = (e) =>{
        setModel(e.target.value)
    }
    const onRaceChange = (e) =>{
        setRace(e.target.value)
    }
    const onSexChange = (e) =>{
        setSex(e.target.value)
    }

    return (<div style={{ height: 500, paddingTop: 200}}>
        <FormControl>
        <Select
          value={model}
          onChange={onModelChange}
        >
          <MenuItem value={'random-forest'}>Random Forest</MenuItem>
          <MenuItem value={'naive-bayes'}>Naive Bayes</MenuItem>
          <MenuItem value={'logistic-regression'}>Logistic Regression</MenuItem>
        </Select>
        <Select
          value={sex}
          onChange={onSexChange}
        >
          <MenuItem value={'male'}>Male</MenuItem>
          <MenuItem value={'female'}>Female</MenuItem>
        </Select>
        <Select
          value={race}
          onChange={onRaceChange}
        >
          <MenuItem value={'wn'}>White, Non-Hispanic</MenuItem>
          <MenuItem value={'hl'}>Hispanic/Latino</MenuItem>
          <MenuItem value={'bn'}>Black, Non-Hispanic</MenuItem>
          <MenuItem value={'an'}>Asian, Non-Hispanic</MenuItem>
          <MenuItem value={'mo'}>Multiple/Other, Non-Hispanic</MenuItem>
          <MenuItem value={'hn'}>Native Hawaiian/Other Pacific Islander, Non-Hispanic</MenuItem>
          <MenuItem value={'nn'}>American Indian/Alaska Native, Non-Hispanic</MenuItem>
        </Select>
      </FormControl></div>)

}