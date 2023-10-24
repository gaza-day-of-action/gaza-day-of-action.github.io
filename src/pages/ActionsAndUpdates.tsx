import { Panel } from "../components/Panel";
import * as UI from "@mui/material";

export const ActionsAndUpdates = () => {
  return (
    <Panel title="Actions!">
      <UI.Typography sx={{ pb: 2 }}>
        Please tell us about your actions by filling out{" "}
        <UI.Link href="https://forms.gle/U3tNVGRrgK5Q4SiJ8">this form</UI.Link>{" "}
        and we'll add them to the website.
      </UI.Typography>
      <iframe
        src="https://docs.google.com/document/d/e/2PACX-1vQ2wjywQbsvvJUdAKkZPv-bALSRaZNxbhuZUT99drS6aGo3JzdelDARNBsMAicaVZblrn9stbC8NRq_/pub?embedded=true"
        style={{
          border: "1px solid #010101",
          width: "100%",
          height: "calc(100vh - 250px)",
        }}
      ></iframe>
    </Panel>
  );
};
