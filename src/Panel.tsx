// import React from 'react';
import { registerComponent, PluginComponentType } from "@fiftyone/plugins";
import * as fos from "@fiftyone/state";
import { useRecoilValue } from "recoil";
// import { Box } from '@mui/material/Box';
// import { TextField } from '@mui/material/TextField';
import { Box, Typography, TextField } from "@mui/material";

export function Panel() {
  const dataset = useRecoilValue(fos.dataset);
  return (
    <div>
      <div>Enter Attribute Name: *</div>
      <Box
      component="form"
      sx={{
        '& > :not(style)': { m: 1, width: '25ch' },
      }}
      noValidate
      autoComplete="off"
    >
      <TextField id="outlined-basic" label="Outlined" variant="outlined" />
      <TextField id="filled-basic" label="Filled" variant="filled" />
      <TextField id="standard-basic" label="Standard" variant="standard" />
    </Box>
  </div>
  );
}

registerComponent({
  name: "atlas_voxel",
  label: "atlas_voxel",
  component: Panel,
  type: PluginComponentType.Panel,
  activator,
});

function activator({ dataset }) {
  return true;
}
