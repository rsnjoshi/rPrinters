import React from "react";
import { Switch, Typography } from "@material-ui/core";

const Design = (props) => {
  const [state, setState] = React.useState({
    checked: true,
  });

  const handleChange = (event) => {
    setState({ ...state, [event.target.name]: event.target.checked });
  };

  return (
    <div>
      <Typography variant="h5">Is design available ? </Typography>
      <Switch
        checked={state.checked}
        onChange={handleChange}
        name="checked"
        color="primary"
        inputProps={{ "aria-label": "Deisgn Avialable" }}
      />
    </div>
  );
};

export default Design;
