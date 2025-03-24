import React, { useState } from "react";
import {
  Container,
  Paper,
  Typography,
  Grid,
  FormControl,
  TextField,
  Button,
  InputLabel,
  Select,
  MenuItem,
  Box,
  InputAdornment,
} from "@mui/material";
import {
  Email,
  Lock,
} from "@mui/icons-material";
import { useNavigate } from "react-router-dom";

const StudentSignIn = ({ StudentFormEnable }) => {
  // State for form fields
  const navigator = useNavigate()
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    role: "",
  });

  // Handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    // Here you would typically send the data to your backend
  };

  return (
    <>
      <Box
        sx={{
          position: "fixed",
          zIndex: 3,
          backgroundColor: "#000",
          opacity: "0.3",
          width: "100vw",
          height: "100vh",
        }}
        onClick={() => StudentFormEnable("close")}
      ></Box>
      <Container
        sx={{
          position: "absolute",
          top: "10vh",
          zIndex: 4,
          width: "50vw",
          left: "25%",
        }}
      >
        <Paper elevation={3} sx={{ p: 4, borderRadius: 2 }}>
          <Typography
            variant="h4"
            component="h1"
            align="center"
            gutterBottom
            sx={{ fontWeight: "bold", color: "primary.main" }}
          >
            Sign In
          </Typography>
          <Typography
            sx={{ textAlign: "center", color: "GrayText", cursor: "pointer" }}
            onClick={() => StudentFormEnable("signup")}
          >
            Do not have an Account? Sign Up
          </Typography>

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

              <Grid item xs={12} marginBottom={5} sm={6} marginLeft={5} marginRight={5}>
                <TextField
                  required
                  fullWidth
                  label="Password"
                  name="password"
                  type="password"
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

              <Grid item xs={12} sm={6} marginLeft={5} marginRight={5}>
                <FormControl fullWidth required>
                  <InputLabel>Role</InputLabel>
                  <Select
                    name="role"
                    value={formData.role}
                    onChange={handleChange}
                    label="Role"
                  >
                    <MenuItem value="student">Student</MenuItem>
                    <MenuItem value="admin">Admin</MenuItem>
                  </Select>
                </FormControl>
              </Grid>

              {/* Submit Button */}
              <Box sx={{ mt: 4, textAlign: "center" }}>
                <Button
                  type="submit"
                  variant="contained"
                  size="large"
                  sx={{
                    px: 4,
                    py: 1.5,
                    borderRadius: 2,
                    fontSize: "1rem",
                    color: "white",
                    fontWeight: "bolder",
                  }}
                  onClick={()=>{
                    formData.role == "student"? navigator("/student/dashboard"):navigator("/admin/dashboard")
                    }
                  }>
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
