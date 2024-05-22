import { Container, Grid } from '@mui/material'
import React from 'react'

const InvestorsCard: React.FC = () => {
  return (
    <div>
      <div className="investors-card">
        <img src="https://via.placeholder.com/150" alt="instructor" height={200} width={'100%'} />
        <p className="instructor-position">Investor Description</p>
      </div>
    </div>
  )
}

const Investors: React.FC = () => {
  return (
    <Container>
      <div className="py-5">
        <h1 className="story-heading">Meet Our Investors( Who believed in us )</h1>
        <Grid container spacing={3}>
          <Grid item xs={12} md={4}>
            <InvestorsCard />
          </Grid>
          <Grid item xs={12} md={4}>
            <InvestorsCard />
          </Grid>
          <Grid item xs={12} md={4}>
            <InvestorsCard />
          </Grid>
        </Grid>
      </div>
    </Container>
  )
}

export default Investors
