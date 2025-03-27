import React, { useState } from "react";
import axios from "axios";
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
  Snackbar,
  Alert,
} from "@mui/material";
import { Email, Lock } from "@mui/icons-material";
import { useNavigate } from "react-router-dom";
import { useSnackbar } from "./context/SnackBarContext";

const SignIn = ({ FormEnable }) => {
  const navigator = useNavigate();
  
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    role: "",
  });

  const {showSnackbar} = useSnackbar();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
      try {
        const { data } = await axios.post(
            `${import.meta.env.VITE_API_URL}/user/login`, 
            formData, 
            {
                headers: { "Content-Type": "application/json" },
                withCredentials: true,
            }
        );
  
        if (data.success) {
          showSnackbar(data.message, "success")
          localStorage.setItem("token", data.token);
          navigator("/student/dashboard");
        }
    } catch (error) {
        console.error(error);
        showSnackbar(error.message, "error")
        
    }
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
        onClick={() => FormEnable("close")}
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
            onClick={() => FormEnable("signup")}
          >
            Do not have an Account? Sign Up
          </Typography>

          <form onSubmit={handleSubmit}>
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

              {/* Password */}
              <Grid item xs={12} sm={6} marginLeft={5} marginRight={5} marginBottom={5}>
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

              {/* Role Selection */}
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
                  onClick={handleSubmit}
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

export default SignIn;
