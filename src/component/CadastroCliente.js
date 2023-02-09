import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import BusinessIcon from '@mui/icons-material/Business';
import SendIcon from '@mui/icons-material/Send';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';




const theme = createTheme();

export default function CadastroCliente() {
  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    console.log({
      password: data.get('Senha'),
      confirmPassword: data.get('Confirmar_senha'),
    });
  };

  return (
    <ThemeProvider theme={theme}>
      <Container 
        component="main" 
        maxWidth="sm"
        sx={{
          display: 'block',
          justifyContent: 'center'
          

        }}
        >
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: 'primary.main' }}>
            <BusinessIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Cadastre o Cliente
          </Typography>
          <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 3 }}>
            <Grid container spacing={2}>
            <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  name="cliente"
                  label="Nome de Cliente"
                  type="text"
                  id="nome_cliente"
                  
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  name="endereco_cliente"
                  label="Endereço do Cliente"
                  type="text"
                  id="address_cliente"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                    required
                    fullWidth
                    name="cnpj"
                    label="CNPJ"
                    type="text"
                    id="cnpj"
                />
              </Grid>
                <Grid item xs={12}>
                  <TextField
                    required
                    fullWidth
                    name="contrato"
                    label="Contrato"
                    type="text"
                    id="contrato"
                  />
                </Grid>
              </Grid>
              
            <Button
              onClick={handleSubmit}
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
              endIcon={<SendIcon />}
            >
              Cadastrar
            </Button>

          </Box>
        </Box>
      </Container>
    </ThemeProvider>
  );
}
