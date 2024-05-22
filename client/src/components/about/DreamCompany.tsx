import { ArrowRight } from '@mui/icons-material'
import { Button, Container, Grid } from '@mui/material'
import React from 'react'

interface CompanyProps {
  image: string
}

const CompanyCard: React.FC<CompanyProps> = ({ image }) => {
  return (
    <div className="company-card flex justify-center items-center">
      <img src={image} alt="company" className="company-image" />
    </div>
  )
}

const DreamCompany: React.FC = () => {
  return (
    <Container>
      <div className="text-center">
        <h2 className="question-company">Have a dream company in mind?</h2>
        <h1 className="story-heading">Meet Our 4000+ Hiring Partners</h1>
      </div>
      <div className="">
        <Grid container spacing={2}>
          <Grid item xs={6} md={2}>
            <CompanyCard image="https://via.placeholder.com/150" />
          </Grid>
          <Grid item xs={6} md={2}>
            <CompanyCard image="https://via.placeholder.com/150" />
          </Grid>
          <Grid item xs={6} md={2}>
            <CompanyCard image="https://via.placeholder.com/150" />
          </Grid>
          <Grid item xs={6} md={2}>
            <CompanyCard image="https://via.placeholder.com/150" />
          </Grid>
          <Grid item xs={6} md={2}>
            <CompanyCard image="https://via.placeholder.com/150" />
          </Grid>
          <Grid item xs={6} md={2}>
            <CompanyCard image="https://via.placeholder.com/150" />
          </Grid>
        </Grid>

        <div className="flex justify-center py-5">
          <Button variant="outlined" endIcon={<ArrowRight />} className="justify-center instructor-btn">
            See Our Team
          </Button>
        </div>
      </div>
    </Container>
  )
}

export default DreamCompany
