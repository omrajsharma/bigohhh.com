import React from 'react'
import InstructorCard from './InstructorCard'
import { Button, Grid } from '@mui/material'
import { ArrowRight } from '@mui/icons-material'

const Instructor: React.FC = () => {
  return (
    <div className="flex justify-center aling-center my-5">
      <div className="instructor flex justify-center aling-center ">
        <h1 className="story-heading">Meet Your Instructor</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere, expedita?</p>

        <div className="card">
          <Grid container spacing={3}>
            <Grid item xs={12} md={3}>
              <InstructorCard name="John Doe" position="Lead Manager" />
            </Grid>
            <Grid item xs={12} md={3}>
              <InstructorCard name="New Doe" position="Instructor" />
            </Grid>
            <Grid item xs={12} md={3}>
              <InstructorCard name="John Doe" position="Lead Manager" />
            </Grid>
            <Grid item xs={12} md={3}>
              <InstructorCard name="Joyy Paul" position="Instructor" />
            </Grid>
          </Grid>
        </div>

        <Button variant="outlined" endIcon={<ArrowRight />} className="justify-center instructor-btn">
          See Our Team
        </Button>
      </div>
    </div>
  )
}

export default Instructor
