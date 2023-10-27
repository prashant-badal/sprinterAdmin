import React, { useState } from 'react'
import {
    Box,
    Button,
    Card,
    CardActions,
    CardContent,
    Container,
  
    InputLabel,
    TextField,
    Typography,
  } from "@mui/material";


const ContestDetail = () => {

    const [formData,setFormData]=useState({
        name:"",
      detail:"",
      startDate:"",
      endDate:"",
      rules:"",
      entry:"",
      prizes:"",

        
    }
    );
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
          ...formData,
          [name]: value,
        });
      };

      const handleSubmit = (e) => {
        e.preventDefault();
        // Handle form submission here
        console.log(formData);
      };
    

  
  return (
 <>
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
             Upload Contest
            </Typography>
      <Container
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >

        <form onSubmit={handleSubmit}>

       
        <Card sx={{width:"100%",p:3,boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)"}}>
          <CardContent>
        
           

           


<Box>
<InputLabel htmlFor="name" sx={{color:"black",fontSize:"1.5rem" ,marginBottom:".3rem"}}>Contest Name</InputLabel>
      <TextField
      sx={{
                marginBottom: 2,
                boxShadow: "0 0 5px rgba(0, 0, 0, 0.2)",
                fontFamily: "Arial, sans-serif",
              }}
      fullWidth
        id="input-field"
        name="name"
        variant="outlined"
        label="Input Field"
        placeholder="Enter something"
        value={formData.name}
        onChange={handleChange}
        />
</Box>

<Box>
<InputLabel htmlFor="input-field" sx={{color:"black",fontSize:"1.5rem" ,marginBottom:".3rem"}}>Contest Details</InputLabel>
      <TextField
       fullWidth
       multiline
       rows={4}
        id="input-detail"
        name="detail"
        variant="outlined"
        label="Input Details"
        placeholder="Enter Details"
        value={formData.detail}
        onChange={handleChange}
        sx={{
          
          marginBottom: 2,
          boxShadow: "0 0 5px rgba(0, 0, 0, 0.2)",
          fontFamily: "Arial, sans-serif",
        }}
        />
</Box>

            <Box sx={{display:"flex",justifyContent:"space-evenly",mt:2,flexWrap:"wrap"}}>

                <Box >
                <InputLabel htmlFor="startDate" sx={{color:"black",fontSize:"1.5rem" ,marginBottom:".3rem"}}>Contest Starting Date</InputLabel>
                <TextField
                label="Select a date"
                name="startDate"
                type="date" // Set the type attribute to "date"
                InputLabelProps={{
                 shrink: true,
                }}
                value={formData.startDate}
                onChange={handleChange}
                fullWidth
                margin="normal"
                sx={{
                
                  marginBottom: 2,
                  boxShadow: "0 0 5px rgba(0, 0, 0, 0.2)",
                  fontFamily: "Arial, sans-serif",
                }}
              />


                </Box>
                <Box >
                <InputLabel htmlFor="endDate" sx={{color:"black",fontSize:"1.5rem" ,marginBottom:".3rem"}}>Contest End Date</InputLabel>
                <TextField
                label="Select a date"
                name="endDate"
                type="date" // Set the type attribute to "date"
                InputLabelProps={{
                 shrink: true,
                }}
                value={formData.endDate}
                onChange={handleChange}
                fullWidth
                margin="normal"
                sx={{
               
                  marginBottom: 2,
                  boxShadow: "0 0 5px rgba(0, 0, 0, 0.2)",
                  fontFamily: "Arial, sans-serif",
                }}
              />


                </Box>
                 


                 

              </Box>  

              <Box>
<InputLabel htmlFor="rules" sx={{color:"black",fontSize:"1.5rem" ,marginBottom:".3rem"}}>Contest Rules</InputLabel>
      <TextField
       fullWidth
       multiline
       rows={4}
        id="rules"
        name="rules"
        variant="outlined"
        label="Input Rules"
        placeholder="Enter Rules"
        value={formData.rules}
        onChange={handleChange}
        
        sx={{
          
          marginBottom: 2,
          boxShadow: "0 0 5px rgba(0, 0, 0, 0.2)",
          fontFamily: "Arial, sans-serif",
        }}
        />
</Box>

<Box>
<InputLabel htmlFor="entry" sx={{color:"black",fontSize:"1.5rem" ,marginBottom:".3rem"}}>Contest Rules</InputLabel>
      <TextField
       fullWidth
       multiline
      
        id="entry"
        name="entry"
        variant="outlined"
        label="Input entry"
        placeholder="Contest Entry Requirements"
        value={formData.entry}
        onChange={handleChange}
        
        sx={{
          
          marginBottom: 2,
          boxShadow: "0 0 5px rgba(0, 0, 0, 0.2)",
          fontFamily: "Arial, sans-serif",
        }}
        />
</Box>

<Box>
<InputLabel htmlFor="prizes" sx={{color:"black",fontSize:"1.5rem" ,marginBottom:".3rem"}}>Contest Prizes</InputLabel>
      <TextField
       fullWidth
       multiline
    
        id="prizes"
        name="prizes"
        variant="outlined"
        label="Input prizes"
        placeholder="Enter contest prizes"
        value={formData.prizes}
        onChange={handleChange}
        
        sx={{
          
          marginBottom: 2,
          boxShadow: "0 0 5px rgba(0, 0, 0, 0.2)",
          fontFamily: "Arial, sans-serif",
        }}
        />
</Box>


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
              type="submit"
              sx={{
                background:
                  "linear-gradient(8deg, rgba(218,10,46,1) 0%, rgba(121,9,30,1) 35%, rgba(222,16,6,1) 100%)",
                color: "white",
                fontFamily: "Arial, sans-serif", // Change font style
                boxShadow: "0 0 5px rgba(0, 0, 0, 0.2)",
                padding: "12px 24px", // Add padding to the button
              }}
            >
             Add New Contest
            </Button>
          </CardActions>
          <CardContent>
           
          </CardContent>
        </Card>
        </form>
      </Container>
      </Box>
 
 </>
  )
}

export default ContestDetail
