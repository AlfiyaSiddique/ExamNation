import React from "react"

import { useState } from "react"
import {
  Box,
  Button,
  Card,
  CardContent,
  Container,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  Typography,
  Avatar,
} from "@mui/material"
import { CloudUpload } from "lucide-react"

export default function Profile() {
  const [profileImage, setProfileImage] = useState(null)
  const [semester, setSemester] = useState("")

  const handleImageChange = (event) => {
    const file = event.target.files?.[0]
    if (file) {
      const reader = new FileReader()
      reader.onload = () => {
        setProfileImage(reader.result)
      }
      reader.readAsDataURL(file)
    }
  }

  const handleSemesterChange = (event) => {
    setSemester(event.target.value)
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    console.log({ profileImage, semester })
    // Handle form submission here
  }

  return (
    <Container
      maxWidth="sm"
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        minHeight: "100vh",
      }}
    >
      <Card sx={{ width: "100%" }}>
        <CardContent>
          <Typography variant="h5" component="h1" gutterBottom align="center">
            Student Profile
          </Typography>

          <Box component="form" onSubmit={handleSubmit} sx={{ mt: 3 }}>
            <Box sx={{ mb: 4, display: "flex", flexDirection: "column", alignItems: "center" }}>
              <Avatar src={profileImage || ""} sx={{ width: 100, height: 100, mb: 2 }} />

              <Button component="label" variant="contained" startIcon={<CloudUpload />} sx={{ mt: 2 }}>
                Upload Profile Image
                <input type="file" accept="image/*" hidden onChange={handleImageChange} />
              </Button>
            </Box>

            <FormControl fullWidth sx={{ mb: 3 }}>
              <InputLabel id="semester-label">Semester</InputLabel>
              <Select
                labelId="semester-label"
                id="semester"
                value={semester}
                label="Semester"
                onChange={handleSemesterChange}
                required
              >
                <MenuItem value="Fall 2023">Fall 2023</MenuItem>
                <MenuItem value="Spring 2024">Spring 2024</MenuItem>
                <MenuItem value="Summer 2024">Summer 2024</MenuItem>
                <MenuItem value="Fall 2024">Fall 2024</MenuItem>
                <MenuItem value="Spring 2025">Spring 2025</MenuItem>
              </Select>
            </FormControl>

            <Button type="submit" variant="contained" fullWidth sx={{ mt: 2 }}>
              Submit
            </Button>
          </Box>
        </CardContent>
      </Card>
    </Container>
  )
}

