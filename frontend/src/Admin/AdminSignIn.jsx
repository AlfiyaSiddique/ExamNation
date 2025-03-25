import React, { useState } from 'react';
import {
  Container,
  Paper,
  Typography,
  Grid,
  TextField,
  MenuItem,
  FormControl,
  FormLabel,
  RadioGroup,
  FormControlLabel,
  Radio,
  Button,
  Divider,
  Box,
  InputAdornment
} from '@mui/material';
import { 
  Person, 
  Cake, 
  Email, 
  Phone, 
  School, 
  Badge, 
  Lock,
  Book 
} from '@mui/icons-material';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { LocalizationProvider, DatePicker } from '@mui/x-date-pickers';

const StudentSignIn = ({StudentFormEnable}) => {
  // State for form fields
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  // Handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // Here you would typically send the data to your backend
  };

  return (
    <>
     <Box sx={{position: "fixed", zIndex: 3, backgroundColor: "#000", opacity: "0.3", width: "100vw", height: "100vh"}} onClick={()=>StudentFormEnable("close")}></Box>
    <Container sx={{position: "absolute", top: "10vh", zIndex: 4, width: "50vw", left: "25%", }}>
      <Paper elevation={3} sx={{ p: 4, borderRadius: 2 }}>
        <Typography variant="h4" component="h1" align="center" gutterBottom sx={{ fontWeight: 'bold', color: 'primary.main' }}>
          Student Sign In
        </Typography>
        <Typography sx={{textAlign: "center", color: "GrayText", cursor: "pointer"}}>Do not have an Account? Sign Up</Typography>
        <Typography sx={{textAlign: "center", color: "GrayText",cursor: "pointer"}}>Admin Sign in</Typography>
        
        <form onSubmit={handleSubmit}>
          {/* Basic Student Information */}
          <Box sx={{ mb: 4 }}>
           
            
              {/* Email Address */}
              <Grid item xs={12} sm={6} margin={5}>
                <TextField
                  required
                  fullWidth
                  label="Email Address"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">
                        <Email color="primary" />
                      </InputAdornment>
                    ),
                  }}
                />
              </Grid>
              
           
              <Grid item xs={12} sm={6} marginLeft={5} marginRight={5}>
                <TextField
                  required
                  fullWidth
                  label="Password"
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">
                        <Lock color="primary" />
                      </InputAdornment>
                    ),
                  }}
                />
              </Grid>
          {/* Submit Button */}
          <Box sx={{ mt: 4, textAlign: 'center' }}>
            <Button
              type="submit"
              variant="contained"
              size="large"
              sx={{ 
                px: 4, 
                py: 1.5,
                borderRadius: 2,
                fontSize: '1rem',
                color: "white",
                fontWeight: "bolder"
              }}
            >
              Login
            </Button>
          </Box>
          </Box>
        </form>
      </Paper>
    </Container>
    </>
  );
};

export default StudentSignIn;
