import { registerComponent, PluginComponentType } from "@fiftyone/plugins";
import { HelloWorld } from "./HelloWorld";

registerComponent({
  name: "khaitest",
  label: "Hello world",
  component: HelloWorld,
  type: PluginComponentType.Panel,
  activator: myActivator,
});

function myActivator({ dataset }) {
  // Example of activating the plugin in a particular context
  // return dataset.name === 'quickstart'

  return true;
}
