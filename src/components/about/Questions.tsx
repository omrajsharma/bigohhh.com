import { Button, Grid } from '@mui/material'
import React from 'react'

const Questions: React.FC = () => {
  return (
    <div>
      <div className="flex justify-center items-center">
        <Grid container>
          <Grid item xs={12} md={6}>
            <div className="flex py-5 justify-center items-center flex-col" style={{ background: '#f6ede7' }}>
              <h1>Join our Tribe</h1>
              <Button variant="outlined">We Are Hiring!</Button>
            </div>
          </Grid>
          <Grid item xs={12} md={6}>
            <div className="flex py-5 justify-center items-center flex-col" style={{ background: '#fff9e5' }}>
              <h1>Have More Questions?</h1>
              <Button variant="outlined">Checkout FAQs</Button>
            </div>
          </Grid>
        </Grid>
      </div>
    </div>
  )
}

export default Questions
