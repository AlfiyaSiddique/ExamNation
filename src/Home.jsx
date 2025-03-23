/* eslint-disable no-unused-vars */
import React from "react";
import { useRef, useState } from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  Container,
  Grid,
  Card,
  CardContent,
  Box,
  Divider,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Paper,
  useTheme,
} from "@mui/material";
import {
  School,
  Assignment,
  CardMembership,
  EmojiEvents,
  Assessment,
  PersonAdd,
  Copyright,
} from "@mui/icons-material";
import StudentSignUp from "./Student/StudentSignUp";
import StudentSignIn from "./Student/StudentSignIn";

const Home = () => {
  const sectionRef = useRef(null);
  const [student, setStudent] = useState({
    signin: false,
    signup: false
  })
  const [admin, setAdmin] = useState({
    signin: false,
    signup: false
  })

  const scrollToSection = ()=>{
    sectionRef.current.scrollIntoView({behaviour: "smooth"})
  }

  const StudentFormEnable = (type)=>{
    document.body.style.height = "200vh"
    if (type === "signin"){
        setStudent({signup: false, signin: true})
        return
    }else if(type === "close"){
        setStudent({signup: false, signin: false})
        return
    }
    setStudent({signup: true, signin: false})
  }

  const AdminFormEnable = (type)=>{
    if (type === "signin"){
      setAdmin({signup: false, signin: true})
      return
  }else if(type === "close"){
      setAdmin({signup: false, signin: false})
      return
  }
  setAdmin({signup: true, signin: false})
  }

  return (
    <Box sx={{ flexGrow: 1 }}>
      {/* Navbar */}
      <AppBar position="static" color="white" sx={{}}>
        <Toolbar
          sx={{
            borderBottom: "1px solid #eedede",
            position: "Fixed",
            width: "100vw",
            top: "0",
            zIndex: "2",
            backdropFilter: "blur(5px)",
          }}
        >
          <Typography
            variant="h5"
            component="div"
            sx={{ flexGrow: 1, fontWeight: "bold", color: "#0b0836", px: 10 }}
          >
            TestTrack
          </Typography>
          <Button color="inherit" variant="outlined" sx={{ mx: 5 }} onClick={()=>StudentFormEnable("signin")}>
            Sign In
          </Button>
          <Button
            color="inherit"
            variant="contained"
            sx={{ bgcolor: "black", color: "white", mr: 10 }}
            onClick={()=>StudentFormEnable("signup")}
          >
            Sign Up
          </Button>
        </Toolbar>
      </AppBar>

      {/* Sign Ups & Sign Ins*/}
     {student.signup? <StudentSignUp StudentFormEnable = {StudentFormEnable}/>: ""}
     {student.signin? <StudentSignIn StudentFormEnable = {StudentFormEnable}/>: ""}

      {/* Hero Section */}
      <Box
        sx={{
          color: "#0b0836",
          height: "90vh",
          py: 8,
          textAlign: "center",
          background:
            " linear-gradient(180deg, hsla(0, 0%, 100%, 1) 0%, hsla(207, 90%, 96%, 1) 48%, hsla(209, 94%, 94%, 1) 100%);",
        }}
      >
        <Box
          sx={{
            height: "20vh",
            opacity: 0.2,
            margin: "auto",
            width: " 60vw",
            backgroundImage:
              'url("https://www.transparenttextures.com/patterns/batthern.png")',
            transform: "scale(1.5)",
          }}
        ></Box>
        <Container maxWidth="md">
          <Typography
            variant="h3"
            component="h1"
            gutterBottom
            fontWeight="bold"
          >
            Streamline Your Exam Management Process
          </Typography>
          <Typography variant="h6" component="h2" sx={{ mb: 4 }}>
            A comprehensive platform that simplifies exam registration,
            administration, and result analysis for educational institutions
          </Typography>
          <Button
            variant="contained"
            size="large"
            sx={{
              bgcolor: "#25b7ea",
              color: "black",
              fontWeight: "bold",
              "&:hover": {
                bgcolor: "grey.100",
              },
            }}
            onClick={scrollToSection}
          >
            Get Started
          </Button>
        </Container>
      </Box>

      {/* Features Section */}
      <Box
        sx={{
          position: "relative",
          background:
            "linear-gradient(180deg, hsla(209, 94%, 94%, 1) 0%, hsla(207, 90%, 96%, 1) 48%, hsla(0, 0%, 100%, 1) 100%);",
          height: "100vh",
        }}
      >
        <Box
          sx={{
            height: "20vh",
            opacity: 0.2,
            margin: "auto",
            width: " 60vw",
            backgroundImage:
              'url("https://www.transparenttextures.com/patterns/batthern.png")',
            transform: "scale(1.5)",
          }}
        ></Box>
        <Container maxWidth="lg" sx={{ py: 8 }}>
          <Typography
            variant="h4"
            component="h2"
            align="center"
            gutterBottom
            fontWeight="bold"
          >
            Key Features
          </Typography>
          <Typography variant="body1" align="center" paragraph sx={{ mb: 6 }}>
            Everything you need to manage the complete examination lifecycle
          </Typography>

          <Grid container spacing={4}>
            {[
              {
                icon: <Assignment fontSize="3"/>,
                title: "Exam Application",
                description: "Simple and intuitive exam registration process",
              },
              {
                icon: <Assessment fontSize="3"/>,
                title: "Registration Report",
                description: "Comprehensive reports on student registrations",
              },
              {
                icon: <CardMembership fontSize="3"/>,
                title: "Hall Ticket Generation",
                description: "Automated creation of exam hall tickets",
              },
              {
                icon: <EmojiEvents fontSize="3"/>,
                title: "Topper List Mark Entry",
                description: "Special marking system for top performers",
              },
            ].map((feature, index) => (
              <Grid item xs={12} sm={6} md={3} key={index}>
                <Card
                  elevation={2}
                  sx={{
                    height: "100%",
                    display: "flex",
                    flexDirection: "column",
                    transition: "0.3s",
                    "&:hover": { transform: "translateY(-5px)", boxShadow: 6 },
                  }}
                >
                  <CardContent sx={{ flexGrow: 1, textAlign: "center" }}>
                    <Box sx={{ color: "primary.main", fontSize: 60, mb: 2 }}>
                      {feature.icon}
                    </Box>
                    <Typography
                      gutterBottom
                      variant="h5"
                      component="h3"
                      fontWeight="medium"
                    >
                      {feature.title}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      {feature.description}
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>

      {/* Process Flow Section */}
      <Box sx={{ py: 8 }} ref={sectionRef}>
        <Container maxWidth="lg">
          <Typography
            variant="h4"
            component="h2"
            align="center"
            gutterBottom
            fontWeight="bold"
          >
            How It Works
          </Typography>
          <Typography variant="body1" align="center" paragraph sx={{ mb: 6 }}>
            Simplified workflows for both students and administrators
          </Typography>

          <Grid container spacing={20} padding={20}>
            {/* Student Process */}
            <Grid item xs={12} md={6}>
              <Paper elevation={3} sx={{p: 4, height: "100%" }}>
                <Box sx={{ display: "flex", alignItems: "center", mb: 3 }}>
                  <School sx={{ color: "primary.main", fontSize: 40, mr: 2 }} />
                  <Typography variant="h5" component="h3" fontWeight="bold">
                    For Students
                  </Typography>
                </Box>
                <Divider sx={{ mb: 3 }} />
                <List>
                  {[
                    "Register on the platform",
                    "Fill exam application form",
                    "Pay examination fees",
                    "Generate hall ticket",
                    "View results when published",
                  ].map((step, index) => (
                    <ListItem key={index}>
                      <ListItemIcon>
                        <Box
                          sx={{
                            bgcolor: "primary.main",
                            color: "white",
                            width: 28,
                            height: 28,
                            borderRadius: "50%",
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                          }}
                        >
                          {index + 1}
                        </Box>
                      </ListItemIcon>
                      <ListItemText primary={step} />
                    </ListItem>
                  ))}
                </List>
                <Button variant="contained" sx={{width: "100%", fontWeight: "bolder"}}>Join as Student</Button>
              </Paper>
            </Grid>

            {/* Admin Process */}
            <Grid item xs={12} md={6}>
              <Paper elevation={3} sx={{ p: 4, height: "100%" }}>
                <Box sx={{ display: "flex", alignItems: "center", mb: 3 }}>
                  <PersonAdd
                    sx={{ color: "primary.main", fontSize: 40, mr: 2 }}
                  />
                  <Typography variant="h5" component="h3" fontWeight="bold">
                    For Administrators
                  </Typography>
                </Box>
                <Divider sx={{ mb: 3 }} />
                <List>
                  {[
                    "Verify applications",
                    "Approve or reject applications",
                    "Schedule examinations",
                    "Enter marks and generate results",
                    "Produce analytical reports",
                  ].map((step, index) => (
                    <ListItem key={index}>
                      <ListItemIcon>
                        <Box
                          sx={{
                            bgcolor: "primary.main",
                            color: "white",
                            width: 28,
                            height: 28,
                            borderRadius: "50%",
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                          }}
                        >
                          {index + 1}
                        </Box>
                      </ListItemIcon>
                      <ListItemText primary={step} />
                    </ListItem>
                  ))}
                </List>
                <Button variant="contained" sx={{width: "100%", fontWeight: "bolder"}}>Join as Admin</Button>
              </Paper>
            </Grid>
          </Grid>
        </Container>
      </Box>

      {/* Footer */}
      <Box
        component="footer"
        sx={{
          borderTop: "1px solid #eedede",
          py: 6,
          px: 2,
          mt: "auto",
          color: "#0b0836",
        }}
      >
        <Container maxWidth="lg" sx={{ textAlign: "center", margin: "auto" }}>
          <Typography variant="h6" gutterBottom>
            About TestTrack
          </Typography>
          <Typography variant="body2" sx={{ width: "60vw", margin: "auto" }}>
            TestTrack is the leading platform for educational institutions to
            manage their examination processes efficiently. Our platform
            simplifies everything from registration to result analysis.
          </Typography>
          <Box mt={5}>
            <Typography
              variant="body2"
              align="center"
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <Copyright sx={{ mr: 1 }} />
              {`Copyright ${new Date().getFullYear()} ExamNation. All rights reserved.`}
            </Typography>
          </Box>
        </Container>
      </Box>
    </Box>
  );
};

export default Home;
