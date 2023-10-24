import { Panel } from "../components/Panel";
import * as UI from "@mui/material";

export const OurDemands = () => {
  return (
    <Panel title="Our demands">
      <UI.Typography variant="h5">MPs - we demand you call for:</UI.Typography>
      <UI.Typography
        variant="h2"
        component="h1"
        sx={{ px: 3, textTransform: "uppercase", fontWeight: "bold" }}
      >
        An immediate ceasefire now.
      </UI.Typography>
      <UI.Typography
        variant="h2"
        component="h1"
        sx={{ px: 3, textTransform: "uppercase", fontWeight: "bold" }}
      >
        The UK to stop arming Israel.
      </UI.Typography>
      <UI.Typography
        variant="h2"
        component="h1"
        sx={{ px: 3, textTransform: "uppercase", fontWeight: "bold" }}
      >
        An end to the occupation.
      </UI.Typography>
    </Panel>
  );
};
