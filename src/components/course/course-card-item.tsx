import React, { FC } from 'react';
import Image from 'next/image';
import Box from '@mui/material/Box';
import Rating from '@mui/material/Rating';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import ArrowForward from '@mui/icons-material/ArrowForward';
import { Course } from '@/interfaces/course';
import CheckIcon from '@mui/icons-material/Check';

interface Props {
  item: Course
}

const CourseCardItem: FC<Props> = ({ item }) => {
  return (
    <Box
      sx={{
        px: 1,
        py: 4,
      }}
    >
      <Box
        sx={{
          p: 2,
          backgroundColor: 'background.paper',
          borderRadius: 4,
          transition: (theme) => theme.transitions.create(['box-shadow']),
          '&:hover': {
            boxShadow: 2,
            '& .MuiIconButton-root': {
              backgroundColor: 'primary.main',
              color: 'primary.contrastText',
              boxShadow: 2,
            },
          },
        }}
      >
        <Box
          sx={{
            lineHeight: 0,
            overflow: 'hidden',
            borderRadius: 3,
            mb: 2,
          }}
        >
          <Image src={item.cover} width={760} height={760} alt={'Course ' + item.id} />
        </Box>
        <Box sx={{ mb: 2 }}>
          <Typography component="h2" variant="h5" sx={{ mb: 2, height: 56, overflow: 'hidden', fontSize: '1.2rem' }}>
            {item.title}
          </Typography>
          <Box sx={{ display: 'flex', alignItems: 'center' }}>
            <Rating name="rating-course" value={item.rating} max={5} sx={{ color: '#ffce31', mr: 1 }} readOnly />
            <Typography component="span" variant="h5">
              ({item.ratingCount})
            </Typography>
          </Box>
        </Box>
        <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          <Box sx={{ display: 'flex', alignItems: 'center' }}>
            <Typography variant="h5" color="primary.main">
              {'₹' + item.price.toLocaleString()}
            </Typography>
            <Typography variant="body2" sx={{ ml: 1, fontStyle: 'italic' }}>
              +18% GST*
            </Typography>
          </Box>
          <IconButton
            color="primary"
            sx={{ '&:hover': { backgroundColor: 'primary.main', color: 'primary.contrastText' } }}
          >
            <ArrowForward />
          </IconButton>
        </Box>
        <Box sx={{ mt: 2 }}>
          <Typography variant="body1" sx={{ fontWeight: 'bold', mb: 1 }}>
            What We Offer:
          </Typography>
          <Typography variant="body2" sx={{ mb: 1 }}>
            <CheckIcon fontSize='small' color='primary' /> 
            Premium course content
          </Typography>
          <Typography variant="body2" sx={{ mb: 1 }}>
            <CheckIcon fontSize='small' color='primary' /> 
            Live Sessions with industry experts
          </Typography>
          <Typography variant="body2" sx={{ mb: 1 }}>
            <CheckIcon fontSize='small' color='primary' /> 
            Structured curriculum for comprehensive learning
          </Typography>
          <Typography variant="body2" sx={{ mb: 1 }}>
            <CheckIcon fontSize='small' color='primary' /> 
            24/7 Doubt support from experienced tutors
          </Typography>
          <Typography variant="body2" sx={{ mb: 1 }}>
            <CheckIcon fontSize='small' color='primary' /> 
            Real-world software development projects with industry-standard tools (Jira, Confluence, Github, Figma)
          </Typography>
          <Typography variant="body2" sx={{ mb: 1 }}>
            <CheckIcon fontSize='small' color='primary' /> 
            1:1 mentorship sessions with top tech professionals from leading companies
          </Typography>
          <Typography variant="body2" sx={{ mb: 1 }}>
            <CheckIcon fontSize='small' color='primary' /> 
            Placement Assistance including interview prep, resume building, and personal branding
          </Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default CourseCardItem;
