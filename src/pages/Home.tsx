import { ArrowForward } from "@mui/icons-material";
import * as UI from "@mui/material";
import { Link } from "react-router-dom";

export const Section: React.FC<{
  title: string;
  url: string;
  children?: React.ReactNode | React.ReactNode[];
}> = ({ title, url, children }) => {
  return (
    <UI.Grid item xs={12} sm={6} xl={4} sx={{ p: 1 }}>
      <Link
        to={url}
        style={{
          textDecoration: "none",
        }}
      >
        <UI.Card
          sx={{
            border: "3px solid #fff",
            width: "100%",
            height: "200px",
            cursor: "pointer",
            textDecoration: "none !important",
            "&:hover": {
              color: "#fff",
              backgroundColor: "#010101",
              textDecoration: "underline",
              textDecorationColor: "#9D3B37",
            },
          }}
        >
          <UI.CardHeader
            title={
              <>
                {title} <ArrowForward />
              </>
            }
          />
          <UI.CardContent>{children}</UI.CardContent>
        </UI.Card>
      </Link>
    </UI.Grid>
  );
};

export const Home = () => {
  return (
    <UI.Fade in>
      <UI.Box sx={{ p: 2 }}>
        <UI.Grid container>
          <UI.Grid item xs={0} lg={2} xl={1} />
          <UI.Grid item xs={12} lg={8} xl={10} container>
            <Section url="/join-us" title="Join us on Friday 20th October" />
            <Section url="/our-demands" title="Our demands"></Section>
            <Section
              url="/how-to-plan-a-local-action"
              title="How to plan a local action"
            ></Section>
            <Section
              url="/how-to-take-part-in-the-phone-blockade"
              title="How to take part in the phone blockade"
            ></Section>
            <Section
              url="/flyers-to-download"
              title="Flyers to download"
            ></Section>
            <Section url="/actions" title="Actions we've taken!"></Section>
          </UI.Grid>
          <UI.Grid item xs={0} lg={2} xl={1} />
        </UI.Grid>
      </UI.Box>
    </UI.Fade>
  );
};
