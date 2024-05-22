import { Icon } from '@mui/material'
import React from 'react'

interface HorizontalCardProps {
  icon: React.ReactElement // Change the type of icon prop to ReactElement
  value: string
  name: string
  bgColor: string
}

const HorizontalCard: React.FC<HorizontalCardProps> = ({ icon, value, name, bgColor }) => {
  return (
    <div style={{ background: bgColor, margin: '2px' }}>
      <div className="card">
        {' '}
        {icon ? <Icon>{icon}</Icon> : ''}
        <div>{value}</div>
        <div>{name}</div>
      </div>
    </div>
  )
}

export default HorizontalCard
