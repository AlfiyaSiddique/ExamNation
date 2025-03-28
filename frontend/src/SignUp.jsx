import React, { useState } from "react";
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
  InputLabel,
  Select,
  FormControlLabel,
  Radio,
  Button,
  Divider,
  Box,
  InputAdornment,
  Input,
  Avatar,
} from "@mui/material";
import {
  Person,
  Cake,
  Email,
  Phone,
  School,
  Badge,
  Lock,
  RemoveRedEyeOutlined,
  Book,
} from "@mui/icons-material";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import { LocalizationProvider, DatePicker } from "@mui/x-date-pickers";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useSnackbar } from "./context/SnackBarContext";
import { CloudUpload } from "lucide-react";
import { useUser } from "./context/userContext";

const SignUp = ({ FormEnable }) => {
  const {showSnackbar} = useSnackbar()
  // eslint-disable-next-line no-unused-vars
  const {user, setUser} = useUser()
  const navigator = useNavigate()
  const [visible, setVisible] = useState(false)
  const [cVisible, setCVisible] = useState(false)
  const [profileImage, setProfileImage] = useState(null)


  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    dob: null,
    gender: "",
    email: "",
    phone: "",
    college: "",
    rollno: "",
    dept: "",
    password: "",
    cpassword: "",
    role: "",
    image: null,
    currentSemester: ""
  });

  // Department options
  const departments = [
    "Computer Science",
    "Electrical Engineering",
    "Mechanical Engineering",
    "Civil Engineering",
    "Business Administration",
    "Physics",
    "Chemistry",
    "Mathematics",
    "Biology",
    "Other",
  ];

  const Semester = [1,2,3,4,5,6,7,8]

  // Handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  // Handle date change
  const handleDateChange = (date) => {
    setFormData({
      ...formData,
      dob: date,
    });
  };

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      setProfileImage(URL.createObjectURL(file));
      setFormData({
        ...formData,
        image: file,
      });
    }
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    
    // Create FormData for file upload
    const submitData = new FormData();
    Object.keys(formData).forEach(key => {
      if (key === 'dob' && formData[key]) {
        submitData.append(key, formData[key].toISOString());
      } else if (key !== 'cpassword') {
        submitData.append(key, formData[key]);
      }
    });

    try {
      const { data } = await axios.post(
          `${import.meta.env.VITE_API_URL}/user/register`, 
          submitData, 
          {
              headers: { 
                "Content-Type": "multipart/form-data",
              },
          }
      );

      if (data.success) {
        showSnackbar(data.message, "success")
        localStorage.setItem("token", data.token);
        setUser(data.user)
        navigator("/student/dashboard");
      }
  } catch (error) {
      console.error(error);
      showSnackbar("Registration failed", "error");
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
            Sign Up
          </Typography>
          <Typography
            sx={{ textAlign: "center", color: "GrayText", cursor: "pointer" }}
            onClick={() => FormEnable("signin")}
          >
            Already have an Account? Sign in
          </Typography>

          <form onSubmit={handleSubmit}>
          <Box sx={{ mb: 4, display: "flex", flexDirection: "column", alignItems: "center" }}>
              <Avatar src={profileImage || ""} sx={{ width: 100, height: 100, mb: 2 }} />

              <Button component="label" variant="contained" startIcon={<CloudUpload />} sx={{ mt: 2, color: "white", fontWeight: "bold"}}>
                Upload Profile Image
                <input type="file" accept="image/*" hidden onChange={handleImageUpload} required/>
              </Button>
            </Box> 
            {/* Basic Student Information */}
            <Box sx={{ mb: 4 }}>
              <Typography
                variant="h6"
                component="h2"
                gutterBottom
                sx={{
                  display: "flex",
                  alignItems: "center",
                  color: "primary.main",
                  "&::before": {
                    content: '"📌"',
                    marginRight: 1,
                  },
                }}
              >
                Basic Information
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
                      value={formData.dob}
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
                  <FormControl
                    component="fieldset"
                    required
                    sx={{ width: "100%" }}
                  >
                    <FormLabel component="legend">Gender</FormLabel>
                    <RadioGroup
                      row
                      name="gender"
                      value={formData.gender}
                      onChange={handleChange}
                    >
                      <FormControlLabel
                        value="male"
                        control={<Radio />}
                        label="Male"
                      />
                      <FormControlLabel
                        value="female"
                        control={<Radio />}
                        label="Female"
                      />
                      <FormControlLabel
                        value="other"
                        control={<Radio />}
                        label="Other"
                      />
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
                    type={visible? "text":"password"}
                    value={formData.password}
                    onChange={handleChange}
                    InputProps={{
                      startAdornment: (
                        <InputAdornment position="start">
                          <Lock color="primary" />
                        </InputAdornment>
                      ),
                      endAdornment: (
                        <InputAdornment position="end">
                          <RemoveRedEyeOutlined color="primary"  style={{cursor: "pointer"}} onClick={()=>setVisible(!visible)}/>
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
                    type={cVisible? "text":"password"}
                    value={formData.cpassword}
                    onChange={handleChange}
                    InputProps={{
                      startAdornment: (
                        <InputAdornment position="start">
                          <Lock color="primary"/>
                        </InputAdornment>
                      ),
                      endAdornment: (
                        <InputAdornment position="end">
                          <RemoveRedEyeOutlined style={{cursor: "pointer"}} color="primary" onClick={()=>setCVisible(!cVisible)}/>
                        </InputAdornment>
                      ),
                    }}
                  />
                  {formData.cpassword.length > 0 && formData.cpassword != formData.password && <p className="text-red-500 text-sm">Password does not match!</p>}
                </Grid>
                <Grid item xs={12} sm={12}>
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
              </Grid>
            </Box>

            {/* Academic Information */}
            <Box sx={{ mb: 4 }}>
              <Typography
                variant="h6"
                component="h2"
                gutterBottom
                sx={{
                  display: "flex",
                  alignItems: "center",
                  color: "primary.main",
                  "&::before": {
                    content: '"📌"',
                    marginRight: 1,
                  },
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
                    name="college"
                    value={formData.college}
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
                {formData.role === "student" && (
                  <>
                    <Grid item xs={12} sm={6}>
                      <TextField
                        required
                        fullWidth
                        label="Roll Number / Student ID"
                        name="rollno"
                        value={formData.rollno}
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
                        name="dept"
                        value={formData.dept}
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
                    <Grid item xs={12} sm={12}>
                  <FormControl fullWidth required>
                    <InputLabel>Current Semester</InputLabel>
                    <Select
                      name="currentSemester"
                      value={formData.currentSemester}
                      onChange={handleChange}
                      label="Current Semester"
                    >
                    {Semester.map((sem, index)=>
                     <MenuItem value={sem} key={index}>Semester {sem}</MenuItem>
                )}
                    </Select>
                  </FormControl>
                </Grid>
                  </>
                )}
               
              </Grid>
            </Box>

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
                Register
              </Button>
            </Box>
          </form>
        </Paper>
      </Container>
    </>
  );
};

export default SignUp;
