import React, { FC } from 'react'
import Image from 'next/image';
import { Box, Typography } from '@mui/material';
import { Mentor } from '@/interfaces/mentor'


interface Props {
  item: Mentor
}

const MentorCardItem: FC<Props> = ({ item }) => {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        px: 1.5,
        py: 5,
        mx: 2,
        my:2,
        borderRadius: 8,
        boxShadow: 6,
        backgroundColor: 'white',
      }}
    >
      <Box
        sx={{
          position: 'relative',
          width: 160,
          height: 160,
          borderRadius: '50%',
          overflow: 'hidden',
          marginBottom: 2,
          transition: (theme) => theme.transitions.create(['box-shadow']),
          '&:hover': {
            boxShadow: 2,
          },
        }}
      >
        <Image
          src={item.photo as string}
          alt={'Mentor ' + item.id}
          layout="fill"
          objectFit="cover"
        />
      </Box>
      <Typography variant="h4" sx={{ fontWeight: 600, marginBottom: 1 }}>
        {item.name}
      </Typography>
      <Typography variant="body2" sx={{ color: 'text.secondary' }}>
        {item.category}
      </Typography>
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'pace-between',
          alignItems: 'center',
          marginTop: 2,
        }}
      >
          <Box sx={{ '& img': { height: 36 } }}>
            <img src={item.company?.logo} alt={item.company?.name + ' logo'} />
          </Box>
      </Box>
    </Box>
  );
};

export default MentorCardItem
