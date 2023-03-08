import React from 'react';
import { Box, Button, Typography } from "@mui/material";
import { Link } from 'react-router-dom';
import backgroundImage from '../images/background.png'

const MainPage = () => {
  return (
    <Box
      display="flex"
      flexDirection="column"
      alignItems="center"
      justifyContent="flex-start"
      height="100vh"
      sx={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <Box mt={20}>
        <Typography variant="h2" align="center" gutterBottom sx={{ color: '#fff', fontWeight: 'bold' }}>
          Restaurant Picker
        </Typography>
        <Typography variant="h5" align="center" gutterBottom sx={{ color: '#fff' }}>
          Can't decide where to eat? Let us help you pick a restaurant at random!
        </Typography>
      </Box>
      <Box display="flex" justifyContent="center" mt={10}>
        <Button component={Link} to="/join-room" variant="contained" color="error" size="large" style={{ marginRight: 24 }} sx={{width:'185px'}}>
        <Typography sx={{fontWeight:'bold',fontSize:'18px'}}>
            Join Room
          </Typography>
        </Button>
        <Button component={Link} to="/create-room" variant="outlined" color="error" size="large" sx={{border: '2px solid',width:'185px'}}>
          <Typography sx={{fontWeight:'bold',fontSize:'18px'}}>
            Create Room
          </Typography>
        </Button>
      </Box>
    </Box>
  )
}

export default MainPage;
