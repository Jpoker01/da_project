import React from 'react';
import {
  Card,
  CardContent,
  CardMedia,
  Typography,
  Box,
  Container,
} from '@mui/material';
import { FactResponse } from '../types';

interface FactResultProps {
  fact: FactResponse;
}

const FactResult: React.FC<FactResultProps> = ({ fact }) => {
  return (
    <Container maxWidth="md">
      <Card sx={{ mt: 4, mb: 4 }}>
        <CardMedia
          component="img"
          height="400"
          image={fact.imageUrl}
          alt={fact.title}
          sx={{ objectFit: 'cover' }}
        />
        <CardContent>
          <Typography variant="h5" component="h2" gutterBottom>
            {fact.title}
          </Typography>
          <Typography variant="subtitle1" color="text.secondary" gutterBottom>
            {fact.date}
          </Typography>
          <Box sx={{ mt: 2 }}>
            <Typography variant="body1" paragraph>
              {fact.description}
            </Typography>
          </Box>
        </CardContent>
      </Card>
    </Container>
  );
};

export default FactResult; 