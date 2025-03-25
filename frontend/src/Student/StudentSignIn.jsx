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
  Snackbar,
  Alert,
} from "@mui/material";
import { Email, Lock } from "@mui/icons-material";
import { useNavigate } from "react-router-dom";

const StudentSignIn = ({ StudentFormEnable }) => {
  const navigate = useNavigate();
  
  // State for form fields
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    role: "",
  });

  // State for Snackbar
  const [openSnackbar, setOpenSnackbar] = useState(false);
  const [snackbarMessage, setSnackbarMessage] = useState("");

  // Handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  // Handle Snackbar close
  const handleCloseSnackbar = (event, reason) => {
    if (reason === "clickaway") return;
    setOpenSnackbar(false);
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();

    // Check login credentials
    if (
      formData.email === "samplestudent@gmail.com" &&
      formData.role === "student"
    ) {
        navigate("/student/dashboard");
      } else if (formData.email === "sampleadmin@gmail.com" && formData.role == "admin"){
        navigate("/admin/dashboard");
      }
    else {
      setSnackbarMessage("Invalid email or password or role!");
      setOpenSnackbar(true);
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
                >
                  Login
                </Button>
              </Box>
            </Box>
          </form>
        </Paper>
      </Container>

      {/* Snackbar for error messages */}
      <Snackbar
        open={openSnackbar}
        autoHideDuration={3000}
        onClose={handleCloseSnackbar}
        anchorOrigin={{ vertical: "top", horizontal: "right" }}
      >
        <Alert onClose={handleCloseSnackbar} severity="error" sx={{ width: "100%" }}>
          {snackbarMessage}
        </Alert>
      </Snackbar>
    </>
  );
};

export default StudentSignIn;
