import React, { useState } from 'react';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { Container, CssBaseline, Box, Typography, TextField, Button, CircularProgress, Paper } from '@mui/material';
import FactForm from './components/FactForm';
import FactResult from './components/FactResult';
import { FactRequest, FactResponse } from './types';

const theme = createTheme({
  palette: {
    primary: {
      main: '#1976d2',
    },
    secondary: {
      main: '#dc004e',
    },
  },
});

function App() {
  const [isLoading, setIsLoading] = useState(false);
  const [fact, setFact] = useState<FactResponse | null>(null);

  const handleSubmit = async (request: FactRequest) => {
    setIsLoading(true);
    try {
      console.log('API klíč:', process.env.REACT_APP_GEMINI_API_KEY ? 'Nastaven' : 'Chybí');
      
      // Volání Gemini API
      const response = await fetch(
        `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key=${process.env.REACT_APP_GEMINI_API_KEY}`,
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            contents: [{
              role: "user",
              parts: [{
                text: `Generuj historický fakt na téma: ${request.category} v zemi ${request.country} v časovém období ${request.timeFrame}. Odpověď by měla být v češtině a obsahovat zajímavé detaily.`
              }]
            }]
          })
        }
      );

      if (!response.ok) {
        const errorData = await response.json();
        console.error('Chyba API:', errorData);
        throw new Error(`HTTP error! status: ${response.status}, message: ${JSON.stringify(errorData)}`);
      }

      const data = await response.json();
      console.log('Odpověď od API:', data);

      const generatedText = data.candidates[0].content.parts[0].text;

      // Vytvoření odpovědi ve správném formátu
      const mockResponse: FactResponse = {
        title: `${request.category} - ${request.country}`,
        description: generatedText,
        imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/4c/Proclamation_of_Czechoslovak_Independence_in_1918.jpg/1200px-Proclamation_of_Czechoslovak_Independence_in_1918.jpg',
        date: new Date().toLocaleDateString('cs-CZ')
      };

      setFact(mockResponse);
    } catch (error) {
      console.error('Chyba při generování odpovědi:', error);
      alert('Nastala chyba při komunikaci s API. Zkontrolujte prosím konzoli pro více informací.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <div className="App">
        <FactForm onSubmit={handleSubmit} isLoading={isLoading} />
        {fact && <FactResult fact={fact} />}
      </div>
    </ThemeProvider>
  );
}

export default App; 