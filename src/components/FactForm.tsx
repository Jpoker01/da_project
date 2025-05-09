import React, { useState } from 'react';
import {
  Box,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Button,
  Paper,
  Typography,
  Container,
  SelectChangeEvent,
} from '@mui/material';
import { categories, countries, timeFrames, FactRequest } from '../types';

interface FactFormProps {
  onSubmit: (request: FactRequest) => void;
  isLoading: boolean;
}

const FactForm: React.FC<FactFormProps> = ({ onSubmit, isLoading }) => {
  const [formData, setFormData] = useState<FactRequest>({
    category: '',
    country: '',
    timeFrame: '',
  });

  const handleChange = (field: keyof FactRequest) => (
    event: SelectChangeEvent
  ) => {
    setFormData({
      ...formData,
      [field]: event.target.value,
    });
  };

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    onSubmit(formData);
  };

  return (
    <Container maxWidth="sm">
      <Paper elevation={3} sx={{ p: 4, mt: 4 }}>
        <Typography variant="h4" component="h1" gutterBottom align="center">
          Generátor historických faktů
        </Typography>
        <Box component="form" onSubmit={handleSubmit} sx={{ mt: 3 }}>
          <FormControl fullWidth sx={{ mb: 2 }}>
            <InputLabel>Kategorie</InputLabel>
            <Select
              value={formData.category}
              label="Kategorie"
              onChange={handleChange('category')}
              required
            >
              {categories.map((category) => (
                <MenuItem key={category} value={category}>
                  {category}
                </MenuItem>
              ))}
            </Select>
          </FormControl>

          <FormControl fullWidth sx={{ mb: 2 }}>
            <InputLabel>Země</InputLabel>
            <Select
              value={formData.country}
              label="Země"
              onChange={handleChange('country')}
              required
            >
              {countries.map((country) => (
                <MenuItem key={country} value={country}>
                  {country}
                </MenuItem>
              ))}
            </Select>
          </FormControl>

          <FormControl fullWidth sx={{ mb: 3 }}>
            <InputLabel>Časové rozpětí</InputLabel>
            <Select
              value={formData.timeFrame}
              label="Časové rozpětí"
              onChange={handleChange('timeFrame')}
              required
            >
              {timeFrames.map((timeFrame) => (
                <MenuItem key={timeFrame} value={timeFrame}>
                  {timeFrame}
                </MenuItem>
              ))}
            </Select>
          </FormControl>

          <Button
            type="submit"
            variant="contained"
            color="primary"
            fullWidth
            size="large"
            disabled={isLoading}
          >
            {isLoading ? 'Generuji...' : 'Generovat fakt'}
          </Button>
        </Box>
      </Paper>
    </Container>
  );
};

export default FactForm; 