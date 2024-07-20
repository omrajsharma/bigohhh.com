import React from 'react'
import HorizontalCard from './HorizontalCard'
import { Grid } from '@mui/material'
import { Laptop } from '@mui/icons-material'
import PermIdentityIcon from '@mui/icons-material/PermIdentity'

const StoryCards: React.FC = () => {
  return (
    <div className="m-5">
      <Grid container>
        <Grid item xs={12} md={6}>
          <HorizontalCard bgColor="#3470e4" icon={<></>} name="We started our journy" value="2024" />
        </Grid>
        <Grid item xs={12} md={6}>
          <HorizontalCard bgColor="#6e71cc" icon={<></>} name="Students currently" value="4000+" />
        </Grid>
        <Grid item xs={6} md={6}>
          <HorizontalCard
            bgColor="#cc926e"
            icon={
              <>
                <Laptop />
              </>
            }
            name="Total batches"
            value="100+"
          />
        </Grid>
        <Grid item xs={6} md={6}>
          <HorizontalCard
            bgColor="#1a9fbd"
            icon={
              <>
                <PermIdentityIcon sx={{ height: '30px' }} />
              </>
            }
            name="Hiring Partners"
            value="400+"
          />
        </Grid>
      </Grid>
    </div>
  )
}

export default StoryCards
