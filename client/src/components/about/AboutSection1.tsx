import React from 'react'

const AboutSection1: React.FC = () => {
  return (
    <>
      {/* title */}
      <div className="heading text-center">
        <h1>About Us</h1>
      </div>

      {/* content */}
      <div className="info">
        <p className="about-us">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt consequatur provident sapiente blanditiis illo
          ratione odio harum at, vero nulla maxime possimus porro, laboriosam error alias asperiores esse consectetur,
          autem unde perspiciatis necessitatibus atque? Aperiam odio reiciendis saepe nostrum at, ex repellendus et
          tempore excepturi illo laudantium praesentium nisi corrupti!
        </p>
      </div>

      {/* video goes here */}
      <div className="">
        <div style={{ maxWidth: '800px', margin: '0 auto' }}>
          {/* Replace VIDEO_ID with the actual ID of your YouTube video */}
          <iframe
            width="100%"
            height="400"
            src="https://www.youtube.com/embed/VIDEO_ID"
            title="YouTube Video Player"
            allowFullScreen
            className="video-player"
          />
        </div>
      </div>
    </>
  )
}

export default AboutSection1
