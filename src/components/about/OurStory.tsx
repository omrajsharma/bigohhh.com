import { Grid } from '@mui/material'
import React from 'react'

export default function OurStory() {
  return (
    <div className="story">
      <div className="">
        <h1 className="story-heading">Our Story</h1>
      </div>
      {/* quote */}
      <div className="quote">
        <p className="story-quote">
          <span className="double-quote">“</span> We are a team of passionate people whose goal is to improve everyone's
          life through disruptive products. We build great products to solve your business problems.{' '}
          <span className="double-quote">”</span>
        </p>
      </div>

      {/* grid layout with pic */}
      <div className="story">
        <Grid container>
          <Grid item xs={12} md={6}>
            <p className="story-part">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Commodi fugit obcaecati omnis accusantium
              debitis! Impedit officiis perferendis ducimus corrupti inventore dolor, neque omnis quis ipsum laudantium
              fugiat qui doloribus non, eos fugit rem dolorum quos porro ratione accusamus, esse atque vel. Sit
              repudiandae unde voluptatibus quidem natus cupiditate, vitae ipsa.
            </p>
            <p className="story-part">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Commodi fugit obcaecati omnis accusantium
              debitis!
            </p>
            <p className="story-part">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Commodi fugit obcaecati omnis accusantium
              debitis! Impedit officiis perferendis ducimus corrupti inventore dolor, neque omnis.
            </p>
          </Grid>
          <Grid item xs={12} md={6} className="flex items-center justify-center">
            <div className="max-w-full">
              <img
                src="https://img.freepik.com/free-photo/successful-happy-business-team_53876-74892.jpg?size=626&ext=jpg&ga=GA1.1.1224184972.1715472000&semt=sph"
                alt="team-picture"
                height={300}
                className="image"
              />
            </div>
          </Grid>
        </Grid>
      </div>
    </div>
  )
}
