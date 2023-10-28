import * as UI from "@mui/material";

export const ActNow = () => {
  return (
    <UI.Box
      sx={{
        display: "flex",
        justifyContent: "center",
        width: "100%",
        textAlign: "center",
      }}
    >
      <iframe
        src="https://docs.google.com/document/d/e/2PACX-1vT0wGfkW9dzzCaOcmgrjgxeJGe5ZHQ4y-1lBdZTVeYn5mpwur0mVgqp8rM_Z6yeiI2mKlh6_4zCc9Pg/pub?embedded=true"
        style={{
          border: "1px solid #010101",
          width: "100%",
          maxWidth: "816px",
          height: "calc(100vh - 250px)",
          margin: "auto",
        }}
      ></iframe>
    </UI.Box>
  );
};
