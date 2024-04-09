import { registerComponent, PluginComponentType } from "@fiftyone/plugins";
import * as fos from "@fiftyone/state";
import { useRecoilValue } from "recoil";

export function Panel() {
  const dataset = useRecoilValue(fos.dataset);
  return (
    <div>
    <h1>
      khai You are viewing the <strong>{dataset.name}</strong> dataset.
    </h1>
    <label for="cars">Choose a car:</label>

    <select name="cars" id="cars">
      <option value="volvo">Volvo</option>
      <option value="saab">Saab</option>
      <option value="mercedes">Mercedes</option>
      <option value="audi">Audi</option>
    </select>

    <form action="/action_page.php">
      <label for="fname">First name:</label>
      <input type="text" id="fname" name="fname"/><br/><br/>
      <label for="lname">Last name:</label>
      <input type="text" id="lname" name="lname"/><br/><br/>
      <input type="submit" value="Submit"/>
    </form>
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
