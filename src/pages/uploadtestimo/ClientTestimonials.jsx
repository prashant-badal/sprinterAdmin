import React from 'react'
import NavBar from '../../component/navbar/NavBar'
import { Box, Container, Typography } from '@mui/material'

const ClientTestimonials = () => {
  return (
  <>
  <NavBar>
  <Box

      sx={{
        width: "100%",
        height: "100%",
        // display: "flex",
        // justifyContent: "center",
        // alignItems: "center",

        background:"#C97280",
        p:5
      }}
    >

<Typography
              variant="h4"
              sx={{
                textAlign: "center",
                marginTop: 2,
                marginBottom: 4,
                fontFamily: "Arial, sans-serif",
                fontSize: "2.5rem",
                fontWeight: "bold",
                color: "#00000",
                textShadow: "2px 2px 4px rgba(0, 1, .7, 0.5)",
              }}
            >
              Add Client Testimionals
            </Typography>
      <Container
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          flexDirection:"column",
          
        }}
      >
        </Container>
        </Box>
   
  </NavBar>
  </>
  )
}

export default ClientTestimonials
