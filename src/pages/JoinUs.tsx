import * as UI from "@mui/material";
import { Panel } from "../components/Panel";
import { Link } from "react-router-dom";

import strike from "../strike.png";
import { Demands } from "../components/Demands";

export const JoinUs = () => {
  return (
    <Panel title="Join us" subtitle="on Friday 20th October">
      <UI.Typography sx={{ mb: 2 }}>
        London Palestine Action are calling for a{" "}
        <strong>national day of action on Friday 20th October</strong>.
      </UI.Typography>
      <UI.Typography>
        UK politicians are enabling Israel to commit genocide and breach
        international law with complete impunity.
      </UI.Typography>
      <UI.Typography sx={{ my: 3 }}>
        We want to put pressure on MPs and demand that they call for:
      </UI.Typography>
      <Demands />

      <UI.Typography variant="h6" sx={{ mt: 3, mb: 1 }}>
        Would you be up for helping to organise an action to put our demands to
        your local MP?
      </UI.Typography>
      <UI.Typography>
        Your action would be part of a coordinated, nationwide series of events
        on Friday 20th October. It could be a family-friendly picket or a vigil.
        We have a "How to" guide for planning a local action{" "}
        <UI.Link component={Link} to="/how-to-plan-a-local-action">
          here
        </UI.Link>
        .
      </UI.Typography>

      <UI.Typography variant="h6" sx={{ mt: 3, mb: 1 }}>
        Can you take part in our coordinated phone blockade?
      </UI.Typography>
      <UI.Typography>
        Here's our{" "}
        <UI.Link component={Link} to="/how-to-take-part-in-the-phone-blockade">
          guide on how to take part in the blockade
        </UI.Link>{" "}
        - you only need 10 minutes to take part!
      </UI.Typography>

      <UI.Typography variant="h6" sx={{ mt: 3, mb: 1 }}>
        Are you in a union?
      </UI.Typography>
      <UI.Typography>
        Palestinian trade unions have issued a{" "}
        <a
          href="https://twitter.com/workersinpales1/status/1713908923848130880?s=46&t=1XCSUq1Ga1Wqklu7mX1B9Q"
          target="_blank"
        >
          global call to action to end all complicity and stop arming Israel.
        </a>
      </UI.Typography>

      <UI.Typography variant="h6" sx={{ mt: 3, mb: 1 }}>
        General strike!
      </UI.Typography>

      <UI.Typography>
        There is also a call for a General Strike in solidarity with Palestine:
        <UI.Box sx={{ m: 3 }}>
          <img src={strike} style={{ maxWidth: "100%" }} />
        </UI.Box>
      </UI.Typography>
    </Panel>
  );
};
