import * as fos from "@fiftyone/state";
import { useRecoilValue } from "recoil";
import { useCallback } from "react";
import { Button } from "@fiftyone/components";
import {
  types,
  useOperatorExecutor,
  Operator,
  OperatorConfig,
  registerOperator,
  executeOperator,
} from "@fiftyone/operators";
import Divider from '@mui/material/Divider';
import { Height } from "@mui/icons-material";
import Paper from '@mui/material/Paper';


import { styled } from '@mui/material/styles';
import { alignProperty } from "@mui/material/styles/cssUtils";

const DemoPaper = styled(Paper)(({ theme }) => ({
  width: 400,
  height: 400,
  padding: theme.spacing(2),
  ...theme.typography.body2,
  textAlign: 'center',
  bgcolor: 'gray',
  color: 'white',
  backgroundColor:'gray',
  ml: 0
  
}));

export function HelloWorld() {
  const executor =  ("@voxel51/hello-world/count_samples");
  const onClickAlert = useCallback(() =>
    executeOperator("@voxel51/hello-world/show_alert")
  );
  const dataset = useRecoilValue(fos.dataset);

  if (executor.isLoading) return <h3>Loading...</h3>;
  if (executor.result) return <h3>Dataset size: {executor.result.count}</h3>;

  // return (
  //   <>
  //     <h1>Hello, world!</h1>
  //     <h2>
  //       You are viewing the <strong>{dataset.name}</strong> dataset
  //     </h2>
  //     <Button onClick={() => executor.execute()}>Count samples</Button>
  //     <Button onClick={onClickAlert}>Show alert</Button>
  //   </>
  // );
  return (
    <Grid
      container
      direction="row"
      spacing={2}
      sx={{ height: "20%" , width: '60%'}}
      style={{margin: '400px 0px 0px 0px', height: '150px'}}
      justifyContent="center"
    >
      {/* {!hasMessages && <Intro />} */}
      {hasMessages && (
        <Grid item lg={12}>
          <Chat />
        </Grid>
      )}
      <Grid
        item
        container
        sx={{ marginTop: hasMessages ? "auto" : undefined }}
        justifyContent="left"
      >
        <Grid item sm={12} md={12} lg={12}>
          Update Attriute or Class
        </Grid>
        <Divider  sx={{width:'100%', height:"1px"}} style={{ background: 'white' }} />
        <Grid item sm={6} md={6} lg={6}>
          <InputBar
            hasMessages='false'
            disabled={false}
            placeHoldermsg="Enter Attribute"
            needIcon="false"
            onMessageSend={()=>{}}
          />
          {/* <Typography
            variant="caption"
            sx={{ marginTop: "8px", display: "block", textAlign: "center" }}
          >
            VoxelGPT is in beta and may not understand certain queries.{" "}
            <Link href="https://github.com/voxel51/voxelgpt" target="_blank">
              Learn more
            </Link>
          </Typography> */}
        </Grid>
        <Divider  sx={{width:'100%', height:"1px"}} style={{ background: 'white' }} />
        <Grid item sm={4} md={4} lg={4}>
          <InputBar
            hasMessages={hasMessages}
            disabled={receiving || waiting}
            placeHoldermsg="Add new class here"
            needIcon="true"
            onMessageSend={()=>{}}
          />
          {/* <Typography
            variant="caption"
            sx={{ marginTop: "8px", display: "block", textAlign: "center" }}
          >
            VoxelGPT is in beta and may not understand certain queries.{" "}
            <Link href="https://github.com/voxel51/voxelgpt" target="_blank">
              Learn more
            </Link>
          </Typography> */}
        </Grid>
        <Grid item sm={8} md={8} lg={8}>
          <DemoPaper elevation={3} variant="outlined" >
            <div style={{textAlign:"left"}}>X class Deine:</div>
            {/* {JSON.stringify(data)} */}
          </DemoPaper>
          {/* <Typography
            variant="caption"
            sx={{ marginTop: "8px", display: "block", textAlign: "center" }}
          >
            VoxelGPT is in beta and may not understand certain queries.{" "}
            <Link href="https://github.com/voxel51/voxelgpt" target="_blank">
              Learn more
            </Link>
          </Typography> */}
        </Grid>
      </Grid>
    </Grid>
  );
}

class AlertOperator extends Operator {
  get config() {
    return new OperatorConfig({
      name: "show_alert",
      label: "Show alert",
      unlisted: true,
    });
  }
  async execute() {
    alert(`Hello from plugin ${this.pluginName}`);
  }
}

registerOperator(AlertOperator, "@voxel51/hello-world");
