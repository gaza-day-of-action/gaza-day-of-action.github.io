import * as UI from "@mui/material";
export const List: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <UI.Box
      sx={{
        backgroundColor: "#010101",
        mx: -2,
        py: 3,
        px: 7,
        color: "#fff",
        lineHeight: "150%",
        fontSize: "30px",
        fontWeight: "bold",
        textAlign: "center",
      }}
    >
      {children}
    </UI.Box>
  );
};
