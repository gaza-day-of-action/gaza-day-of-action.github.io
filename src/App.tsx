import { Routes, Route, Navigate, Link, useLocation } from "react-router-dom";
import { JoinUs } from "./pages/JoinUs";
import { Home } from "./pages/Home";
import * as UI from "@mui/material";
import header from "./header.jpg";
import { OurDemands } from "./pages/OurDemands";
import { ActNow } from "./pages/ActNow";
import { HowToPlanALocalAction } from "./pages/HowToPlanALocalAction";
import { HowToTakePartInThePhoneBlockade } from "./pages/HowToTakePartInThePhoneBlockade";
import { FlyersToDownload } from "./pages/FlyersToDownload";
import { ActionsAndUpdates } from "./pages/ActionsAndUpdates";
import { ArrowBack, Email } from "@mui/icons-material";
import { useState } from "react";

const PanelContainer = () => {
  const [show, setShow] = useState(true);
  const [unmounted, setUnmounted] = useState(false);

  if (unmounted) return <Navigate to="/" />;

  return (
    <UI.Slide in={show} direction="right" onExited={() => setUnmounted(true)}>
      <UI.Paper
        elevation={3}
        sx={{
          position: "fixed",
          left: "0px",
          right: "0px",
          top: "0px",
          bottom: "0px",
          backgroundColor: "white",
          borderRadius: "0",
          border: "3px solid #010101",
          overflowY: "auto",
        }}
      >
        <>
          <Routes>
            <Route path="/join-us" Component={JoinUs} />
            <Route path="/our-demands" Component={OurDemands} />
            <Route
              path="/how-to-plan-a-local-action"
              Component={HowToPlanALocalAction}
            />
            <Route
              path="/how-to-take-part-in-the-phone-blockade"
              Component={HowToTakePartInThePhoneBlockade}
            />
            <Route path="/flyers-to-download" Component={FlyersToDownload} />
            <Route path="/actions" Component={ActionsAndUpdates} />
          </Routes>

          <UI.IconButton
            sx={{
              color: "#010101",
              position: "absolute",
              right: "5px",
              top: "5px",
            }}
            size="large"
            onClick={() => setShow(false)}
          >
            <ArrowBack sx={{ height: "60px", width: "60px" }} />
          </UI.IconButton>

          <UI.Box sx={{ mb: 3, mx: 3 }}>
            <UI.Button fullWidth variant="text" onClick={() => setShow(false)}>
              <UI.Typography
                variant="h2"
                component="div"
                sx={{
                  textTransform: "uppercase",
                  fontWeight: "bold",
                  color: "#010101",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <ArrowBack sx={{ height: "60px", width: "60px" }} />
                Back
              </UI.Typography>
            </UI.Button>
          </UI.Box>
        </>
      </UI.Paper>
    </UI.Slide>
  );
};

function App() {
  const location = useLocation();
  return (
    <UI.Box sx={{ flexGrow: 1 }}>
      <UI.AppBar
        position="static"
        sx={{
          backgroundColor: "#010101",
          textAlign: "center",
        }}
      >
        <UI.Toolbar
          sx={{
            backgroundColor: "#010101",
          }}
        >
          <img
            src={header}
            style={{ height: "120px", maxWidth: "100%", margin: "auto" }}
          />
        </UI.Toolbar>
        <UI.Typography variant="h5" component="div" sx={{ fontWeight: "bold" }}>
          GAZA DAY OF ACTION
        </UI.Typography>
        <UI.Link
          variant="h1"
          component={Link}
          to="/action-now"
          sx={{
            backgroundColor: "#fff",
            color: "#000",
            py: 2,
            my: 2,
            display: "flex",
            alignItems: "middle",
            justifyContent: "center",
          }}
        >
          ACT NOW
        </UI.Link>

        <UI.Typography variant="h6" sx={{ fontWeight: "bold", m: 2 }}>
          Stop UK Government Complicity in Genocide - Demand Your MP Uphold
          International Law!
        </UI.Typography>
      </UI.AppBar>
      {["/act-now", "/action-now"].includes(location.pathname) ? (
        <ActNow />
      ) : (
        <>
          <UI.Box
            sx={{
              maxWidth: "400px",
              margin: "auto",
              textAlign: "center",
            }}
          >
            <UI.Typography
              variant="h6"
              sx={{
                fontWeight: "bold",
                mb: 2,
                color: "#fff",
                textTransform: "uppercase",
              }}
            >
              UK politicians are enabling Israel to commit genocide and breach
              international law with impunity. The Labour Party leadership has
              given the green light.
            </UI.Typography>
            <UI.Typography
              variant="h6"
              sx={{
                fontWeight: "bold",
                color: "#fff",
                textTransform: "uppercase",
              }}
            >
              Join us in saying <u>shame on you!</u>
            </UI.Typography>
          </UI.Box>
          <Routes>
            <Route path="/" Component={Home} />
            <Route path="/act-now" Component={ActNow} />
            <Route path="/action-now" Component={ActNow} />
            <Route path="*" Component={PanelContainer} />
          </Routes>
          <UI.Box sx={{ mb: 3 }}>
            <UI.Link
              href="mailto:londonpalestineaction@gmail.com"
              sx={{
                color: "#fff",
                display: "flex",
                justifyContent: "center",
                textDecorationColor: "#fff",
              }}
            >
              <Email sx={{ mr: 1 }} /> londonpalestineaction@gmail.com
            </UI.Link>
          </UI.Box>
        </>
      )}
    </UI.Box>
  );
}

export default App;
