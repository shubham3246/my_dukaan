import React from 'react'
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

const Dropdown = () => {
  return (
    <FormControl sx={{ m: 0,minWidth: 120,bgcolor:"white" }} size="small">
      <InputLabel id="demo-select-small-label">Last Month</InputLabel>
      <Select
        labelId="demo-select-small-label"
        id="demo-select-small"
        label="Date"
      >
        <MenuItem value="">
          <em>None</em>
        </MenuItem>
        <MenuItem value={10}>Today</MenuItem>
        <MenuItem value={20}>Last Week</MenuItem>
        <MenuItem value={30}>Last Year</MenuItem>
      </Select>
    </FormControl>
  );
}

export default Dropdown