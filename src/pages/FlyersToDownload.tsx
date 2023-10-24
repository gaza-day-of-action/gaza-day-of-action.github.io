import { Panel } from "../components/Panel";
import * as UI from "@mui/material";
import flyer from "../flyer.jpg";

export const FlyersToDownload = () => {
  return (
    <Panel title="Flyers to download">
      <UI.Box sx={{ m: 3 }}>
        <img src={flyer} style={{ maxWidth: "100%" }} />
      </UI.Box>
    </Panel>
  );
};
