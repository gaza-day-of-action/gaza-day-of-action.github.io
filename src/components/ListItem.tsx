import * as UI from "@mui/material";
export const ListItem: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  return (
    <UI.Box
      component="div"
      sx={{
        my: 3,
      }}
    >
      {children}
    </UI.Box>
  );
};
