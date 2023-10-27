import React from 'react'
import {
    Box,
    Button,
    Card,
    CardActions,
    CardContent,
    Container,
    IconButton,
    InputAdornment,
    TextField,
    Typography,
  } from "@mui/material";

  import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";


const Login = () => {

    const [showPassword, setShowPassword] = React.useState(false);
    const [isPasswordFocused, setIsPasswordFocused] = React.useState(false);
  
    const handleClickShowPassword = () => setShowPassword(show => !show);
  
    const handleMouseDownPassword = event => {
      event.preventDefault();
    };


    const handlePasswordFocus = () => {
        setIsPasswordFocused(true);
      };
    
      const handlePasswordBlur = () => {
        if (!isPasswordFocused) {
          setIsPasswordFocused(false);
        }
      };



  return (
    <>
    <Box
      sx={{
        width: "100vw",
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        background:
          "linear-gradient(8deg, rgba(218,10,46,1) 0%, rgba(121,9,30,1) 35%, rgba(222,16,6,1) 100%)",
      }}
    >
      <Container
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Card sx={{maxWidth: 400, boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)"}}>
          <CardContent>
        
            <Typography
              variant="h4"
              sx={{
                textAlign: "center",
                marginTop: 2,
                marginBottom: 4,
                fontFamily: "Arial, sans-serif",
                fontSize: "2.5rem",
                fontWeight: "bold",
                color: "#79091E",
                textShadow: "2px 2px 4px rgba(0, 0, 0, 0.5)",
              }}
            >
              Admin Login
            </Typography>

            <TextField
              id="ProductId"
              label="Email"
              variant="outlined"
              fullWidth
              sx={{
                marginBottom: 2,
                boxShadow: "0 0 5px rgba(0, 0, 0, 0.2)",
                fontFamily: "Arial, sans-serif",
              }}
            />
            <TextField
              id="outlined-adornment-password"
              label={isPasswordFocused ? "Password" : "Password"}
              type={showPassword ? "text" : "password"}
              onFocus={handlePasswordFocus}
              onBlur={handlePasswordBlur}
              fullWidth
              variant="outlined"
              sx={{
                marginBottom: 2,
                boxShadow: "0 0 5px rgba(0, 0, 0, 0.2)",
                fontFamily: "Arial, sans-serif",
              }}
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    <IconButton
                      aria-label="toggle password visibility"
                      onClick={handleClickShowPassword}
                      onMouseDown={handleMouseDownPassword}
                      edge="end"
                    >
                      {showPassword ? <VisibilityOff /> : <Visibility />}
                    </IconButton>
                  </InputAdornment>
                ),
              }}
            />
          </CardContent>
          <CardActions
            sx={{
              display: "flex",
              justifyContent: "center",
              paddingTop: 2, // Add padding to the top of the CardActions
            }}
          >
            <Button
              variant="contained"
              sx={{
                background:
                  "linear-gradient(8deg, rgba(218,10,46,1) 0%, rgba(121,9,30,1) 35%, rgba(222,16,6,1) 100%)",
                color: "white",
                fontFamily: "Arial, sans-serif", // Change font style
                boxShadow: "0 0 5px rgba(0, 0, 0, 0.2)",
                padding: "12px 24px", // Add padding to the button
              }}
            >
              Login
            </Button>
          </CardActions>
          <CardContent>
            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                marginTop: 2,
              }}
            >
              <Typography
                variant="body2"
                color="textSecondary"
                sx={{
                  fontFamily: "Arial, sans-serif",
                  fontSize: "0.8rem", // Change font size
                }}
              >
                <a href="#">Forgot Password?</a>
              </Typography>
            </Box>
          </CardContent>
        </Card>
      </Container>
      </Box>
    </>
  )
}

export default Login
