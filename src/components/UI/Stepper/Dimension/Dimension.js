import React from "react";
import { Typography, FormControl, InputLabel, Select } from "@material-ui/core";

const Dimension = (props) => {
  const [state, setState] = React.useState({
    size: "",
  });

  const handleChange = (event) => {
    const name = event.target.name;
    setState({
      ...state,
      [name]: event.target.value,
    });
  };

  return (
    <div>
      <Typography variant="h5">Choose Sizing</Typography>
      <FormControl variant="outlined">
        <InputLabel htmlFor="required-size">Size</InputLabel>
        <Select
          value={state.size}
          onChange={handleChange}
          label="Size"
          inputProps={{
            name: "size",
            id: "required-size",
          }}
        >
          <option aria-label="None" value="None" />
          <option value={10}>10</option>
          <option value={20}>20</option>
          <option value={30}>30</option>
        </Select>
      </FormControl>
    </div>
  );
};

export default Dimension;
