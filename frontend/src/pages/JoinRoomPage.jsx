import React from "react";
import { Box, Button, TextField, Typography } from "@mui/material";
import backgroundImage from "../images/background.png";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import reqInstance from "../config";

const JoinRoomPage = () => {
  const [name, setName] = useState("");
  const [restaurant, setRestaurant] = useState("");
  const [roomId, setRoomId] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    try {
      e.preventDefault();
      const createUserRes = await reqInstance.post(
        `http://localhost:8080/user/createUser`,
        {
          name,
          restaurant,
        }
      );
      console.log(createUserRes);
      const joinGroupRes = await reqInstance.put(
        `http://localhost:8080/room/${roomId}`
      );
      console.log(joinGroupRes);
      navigate(`/room/${roomId}`,{state:{roomId, ownerId: joinGroupRes.data.ownerId}})
    } catch (error) {
      setErrorMessage(error.response.data);
    }
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
          Join Room
        </Typography>
        {errorMessage&&(
          <Typography
          variant="h5"
          align="center"
          gutterBottom
          sx={{ color: "red", fontWeight: "bold" }}
        >
          {errorMessage}
        </Typography>
        )}
        <form noValidate autoComplete="off" onSubmit={handleSubmit}>
          <Box
            display="flex"
            flexDirection="column"
            alignItems="center"
            justifyContent="center"
          >
            <TextField
              id="roomId"
              label="Room ID"
              margin="normal"
              variant="outlined"
              onChange={(e) => setRoomId(e.target.value)}
              value={roomId}
              sx={{ width: "100%", mb: 2 }}
              InputLabelProps={{ style: { fontWeight: "100" } }}
            />
            <TextField
              id="name"
              label="Name"
              margin="normal"
              variant="outlined"
              onChange={(e) => setName(e.target.value)}
              value={name}
              sx={{ width: "100%", mb: 2 }}
              InputLabelProps={{ style: { fontWeight: "100" } }}
            />
            <TextField
              id="restaurant"
              label="Restaurant"
              margin="normal"
              variant="outlined"
              onChange={(e) => setRestaurant(e.target.value)}
              value={restaurant}
              sx={{ width: "100%", mb: 2 }}
              InputLabelProps={{ style: { fontWeight: "100" } }}
            />
            <Button
              type="submit"
              variant="contained"
              color="error"
              size="large"
              sx={{ width: "100%" }}
            >
              <Typography sx={{ fontWeight: "bold", fontSize: "18px" }}>
                Join Room
              </Typography>
            </Button>
          </Box>
        </form>
      </Box>
    </Box>
  );
};

export default JoinRoomPage;
