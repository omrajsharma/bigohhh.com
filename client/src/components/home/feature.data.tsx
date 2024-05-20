import React, { ReactNode } from 'react'
import ArtTrackIcon from '@mui/icons-material/ArtTrack'
import AttachMoneyIcon from '@mui/icons-material/AttachMoney'
import LocalLibraryIcon from '@mui/icons-material/LocalLibrary'
import ContactSupportIcon from '@mui/icons-material/ContactSupport'

interface Data {
  title: string
  description: string
  icon?: ReactNode
}

export const data: Data[] = [
  {
    title: 'Easy Accessible',
    description: 'Quality coding resources available anytime, anywhere.',
    icon: <ArtTrackIcon />,
  },
  {
    title: 'More Affordable Cost',
    description: 'Budget-friendly pricing plans for coding education.',
    icon: <AttachMoneyIcon />,
  },
  {
    title: 'Flexible Study Time',
    description: 'Learn coding at your convenience.',
    icon: <LocalLibraryIcon />,
  },
  {
    title: 'Consultation With Mentor',
    description: 'Personalized guidance for your coding journey.',
    icon: <ContactSupportIcon />,
  },
]
