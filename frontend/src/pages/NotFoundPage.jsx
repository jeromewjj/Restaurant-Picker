import { Box, Typography } from "@mui/material";
import backgroundImage from "../images/background.png";

const NotFoundPage = () => {
  return (
    <Box
      display="flex"
      flexDirection="column"
      alignItems="center"
      justifyContent="center"
      height="100vh"
      sx={{
        position: "relative",
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        "&::before": {
          content: '""',
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          backgroundColor: "rgba(0, 0, 0, 0.6)",
          zIndex: 1,
        },
      }}
    >
      <Box
        sx={{
          backgroundColor: "#fff",
          padding: "32px",
          borderRadius: "8px",
          boxShadow: "0px 0px 20px rgba(0,0,0,0.3)",
          zIndex: 2,
          width: "25%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          textAlign: "center",
        }}
      >
        <Typography
          variant="h3"
          align="center"
          gutterBottom
          sx={{ color: "#333", fontWeight: "bold" }}
        >
          Page Not Found
        </Typography>
      </Box>
    </Box>
  );
};

export default NotFoundPage;
