import React from 'react'
import NewsCard from './NewsCard'
import { Button, Container, Grid } from '@mui/material'
import { ArrowRight } from '@mui/icons-material'

const BigohhNews: React.FC = () => {
  return (
    <div className="news-section py-5">
      <Container className="">
        <h1 className="story-heading">Bigohh In News</h1>
        <Grid container spacing={3}>
          <Grid item xs={12} md={4}>
            <NewsCard />
          </Grid>
          <Grid item xs={12} md={4}>
            <NewsCard />
          </Grid>
          <Grid item xs={12} md={4}>
            <NewsCard />
          </Grid>
        </Grid>
        {/* Action button */}
        <div className="flex justify-center py-5">
          <Button variant="outlined" endIcon={<ArrowRight />} className="justify-center instructor-btn">
            See More
          </Button>
        </div>
      </Container>
    </div>
  )
}

export default BigohhNews
