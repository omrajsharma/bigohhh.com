import React from 'react'

const NewsCard: React.FC = () => {
  return (
    <div>
      <div className="news-card">
        <img
          src="https://via.placeholder.com/150"
          alt="instructor"
          height={200}
          width={'100%'}
          className="news-image"
        />
        <h1 className="news-date">10/02/2024</h1>
        <h1 className="news-title">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laborum, esse veritatis.
        </h1>
        <h1 className="news-content">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. In officia, aut porro iusto eos.
        </h1>
      </div>
    </div>
  )
}

export default NewsCard
