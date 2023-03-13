import React from "react";
import { Box, Button, Typography } from "@mui/material";
import backgroundImage from "../images/background.png";
import { useLocation } from "react-router-dom";
import { useState } from "react";
import reqInstance from "../config";
import Cookies from "js-cookie";

const RoomPage = () => {
  const [restaurant, setRestaurant] = useState("");
  const location = useLocation();
  const roomId = location.state.roomId;

  const handlePickRestaurant = async () => {
    try {
      const response = await reqInstance.get(
        `http://localhost:8080/room/getRandomRestaurant/${roomId}`
      );
      setRestaurant(response.data.generatedChoice);
    } catch {}
  };

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
        }}
      >
        <Typography
          variant="h3"
          align="center"
          gutterBottom
          sx={{ color: "#333", fontWeight: "bold" }}
        >
          Room ID: {roomId}
        </Typography>
        <Box
          display="flex"
          flexDirection="column"
          alignItems="center"
          justifyContent="center"
          mt={2}
        >
          <Typography
            variant="h2"
            align="center"
            gutterBottom
            sx={{ color: "#333", fontWeight: "bold" }}
          >
            {restaurant}
          </Typography>

          <Button
            variant="contained"
            color="error"
            size="large"
            onClick={handlePickRestaurant}
          >
            <Typography sx={{ fontWeight: "bold", fontSize: "18px" }}>
              Pick Restaurant
            </Typography>
          </Button>
        </Box>
      </Box>
    </Box>
  );
};

export default RoomPage;
