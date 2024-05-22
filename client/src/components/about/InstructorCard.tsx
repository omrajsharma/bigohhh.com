import React from 'react'

interface InstructorProps {
  name: string
  position: string
}

const InstructorCard: React.FC<InstructorProps> = ({ name, position }) => {
  return (
    <div>
      <div className="instructor-card">
        <img
          src="https://via.placeholder.com/150"
          alt="instructor"
          height={200}
          width={'100%'}
          className="investor-image"
        />
        <h1 className="instructor-heading ">{name}</h1>
        <p className="instructor-position">{position}</p>
      </div>
    </div>
  )
}

export default InstructorCard
