import * as UI from "@mui/material";

export const Panel: React.FC<{
  title: string;
  subtitle?: string;
  children?: React.ReactNode;
}> = ({ title, subtitle, children }) => {
  return (
    <UI.Fade in>
      <UI.Box
        sx={{
          position: "relative",
          p: 2,
        }}
      >
        <UI.Typography
          variant="h2"
          component="h1"
          sx={{ pr: 8, textTransform: "uppercase", fontWeight: "bold" }}
        >
          {title}
        </UI.Typography>

        {subtitle && (
          <UI.Typography
            variant="h4"
            sx={{ textTransform: "uppercase", fontWeight: "bold" }}
          >
            {subtitle}
          </UI.Typography>
        )}
        <UI.Box sx={{ pt: 3 }}>{children}</UI.Box>
      </UI.Box>
    </UI.Fade>
  );
};
