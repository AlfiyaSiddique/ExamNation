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

const StudentSignUp = ({StudentFormEnable}) => {
  // State for form fields
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    dateOfBirth: null,
    gender: '',
    email: '',
    phone: '',
    institution: '',
    studentId: '',
    department: '',
    password: '',
    cpassword: ''
  });

  // Department options
  const departments = [
    'Computer Science',
    'Electrical Engineering',
    'Mechanical Engineering',
    'Civil Engineering',
    'Business Administration',
    'Physics',
    'Chemistry',
    'Mathematics',
    'Biology',
    'Other'
  ];

  // Handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  // Handle date change
  const handleDateChange = (date) => {
    setFormData({
      ...formData,
      dateOfBirth: date
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
          Student Sign Up
        </Typography>
        <Typography sx={{textAlign: "center", color: "GrayText", cursor: "pointer"}} onClick={()=>StudentFormEnable("signin")}>
        Already have an Account? Sign in
        </Typography>
        <Typography sx={{textAlign: "center", color: "GrayText",cursor: "pointer"}} >Admin Sign up</Typography>
        
        <form onSubmit={handleSubmit}>
          {/* Basic Student Information */}
          <Box sx={{ mb: 4 }}>
            <Typography 
              variant="h6" 
              component="h2" 
              gutterBottom 
              sx={{ 
                display: 'flex', 
                alignItems: 'center', 
                color: 'primary.main',
                '&::before': {
                  content: '"📌"',
                  marginRight: 1
                }
              }}
            >
              Basic Student Information
            </Typography>
            <Divider sx={{ mb: 3 }} />
            
            <Grid container spacing={3}>
              {/* First Name and Last Name */}
              <Grid item xs={12} sm={6}>
                <TextField
                  required
                  fullWidth
                  label="First Name"
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleChange}
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">
                        <Person color="primary" />
                      </InputAdornment>
                    ),
                  }}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  required
                  fullWidth
                  label="Last Name"
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleChange}
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">
                        <Person color="primary" />
                      </InputAdornment>
                    ),
                  }}
                />
              </Grid>
              
              {/* Date of Birth */}
              <Grid item xs={12} sm={6}>
                <LocalizationProvider dateAdapter={AdapterDateFns}>
                  <DatePicker
                    label="Date of Birth"
                    value={formData.dateOfBirth}
                    onChange={handleDateChange}
                    renderInput={(params) => (
                      <TextField 
                        {...params} 
                        required 
                        fullWidth 
                        InputProps={{
                          startAdornment: (
                            <InputAdornment position="start">
                              <Cake color="primary" />
                            </InputAdornment>
                          ),
                        }}
                      />
                    )}
                  />
                </LocalizationProvider>
              </Grid>
              
              {/* Gender */}
              <Grid item xs={12} sm={6}>
                <FormControl component="fieldset" required sx={{ width: '100%' }}>
                  <FormLabel component="legend">Gender</FormLabel>
                  <RadioGroup
                    row
                    name="gender"
                    value={formData.gender}
                    onChange={handleChange}
                  >
                    <FormControlLabel value="male" control={<Radio />} label="Male" />
                    <FormControlLabel value="female" control={<Radio />} label="Female" />
                    <FormControlLabel value="other" control={<Radio />} label="Other" />
                  </RadioGroup>
                </FormControl>
              </Grid>
              
              {/* Email Address */}
              <Grid item xs={12} sm={6}>
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
              
              {/* Phone Number */}
              <Grid item xs={12} sm={6}>
                <TextField
                  required
                  fullWidth
                  label="Phone Number"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">
                        <Phone color="primary" />
                      </InputAdornment>
                    ),
                  }}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
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
              <Grid item xs={12} sm={6}>
                <TextField
                  required
                  fullWidth
                  label="Confirm Password"
                  name="cpassword"
                  value={formData.cpassword}
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
            </Grid>
          </Box>
          
          {/* Academic Information */}
          <Box sx={{ mb: 4 }}>
            <Typography 
              variant="h6" 
              component="h2" 
              gutterBottom 
              sx={{ 
                display: 'flex', 
                alignItems: 'center', 
                color: 'primary.main',
                '&::before': {
                  content: '"📌"',
                  marginRight: 1
                }
              }}
            >
              Academic Information
            </Typography>
            <Divider sx={{ mb: 3 }} />
            
            <Grid container spacing={3}>
              {/* University/College/School Name */}
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  label="University/College/School Name"
                  name="institution"
                  value={formData.institution}
                  onChange={handleChange}
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">
                        <School color="primary" />
                      </InputAdornment>
                    ),
                  }}
                />
              </Grid>
              
              {/* Student ID */}
              <Grid item xs={12} sm={6}>
                <TextField
                  required
                  fullWidth
                  label="Roll Number / Student ID"
                  name="studentId"
                  value={formData.studentId}
                  onChange={handleChange}
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">
                        <Badge color="primary" />
                      </InputAdornment>
                    ),
                  }}
                />
              </Grid>
              
              {/* Department / Course */}
              <Grid item xs={12} sm={6}>
                <TextField
                  select
                  required
                  fullWidth
                  label="Department / Course"
                  name="department"
                  value={formData.department}
                  onChange={handleChange}
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">
                        <Book color="primary" />
                      </InputAdornment>
                    ),
                  }}
                >
                  {departments.map((option) => (
                    <MenuItem key={option} value={option}>
                      {option}
                    </MenuItem>
                  ))}
                </TextField>
              </Grid>
            </Grid>
          </Box>
          
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
              Register
            </Button>
          </Box>
        </form>
      </Paper>
    </Container>
    </>
  );
};

export default StudentSignUp;
