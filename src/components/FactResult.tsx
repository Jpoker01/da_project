import React from 'react';
import {
  Card,
  CardContent,
  Typography,
  Box,
  Container,
  Divider,
  Paper
} from '@mui/material';
import { FactResponse } from '../types';

interface FactResultProps {
  fact: FactResponse;
}

const FactResult: React.FC<FactResultProps> = ({ fact }) => {
  // Rozděl description na odstavce podle nových řádků
  const paragraphs = fact.description.split(/\n+/).filter(Boolean);

  return (
    <Container maxWidth="md">
      <Paper elevation={4} sx={{ mt: 4, mb: 4, p: 4, background: '#f8fafc' }}>
        <Typography variant="h4" component="h2" gutterBottom color="primary">
          {fact.title}
        </Typography>
        <Divider sx={{ mb: 2 }} />
        <Typography variant="subtitle1" color="text.secondary" gutterBottom>
          {fact.date}
        </Typography>
        <Box sx={{ mt: 2 }}>
          {paragraphs.map((p, idx) => (
            <Typography key={idx} variant="body1" paragraph sx={{ whiteSpace: 'pre-line', fontSize: '1.15rem' }}>
              {p}
            </Typography>
          ))}
        </Box>
      </Paper>
    </Container>
  );
};

export default FactResult; 