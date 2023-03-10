import React from 'react';
import Avatar from '@mui/material/Avatar';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import FindInPageIcon from '@mui/icons-material/FindInPage';
import SendIcon from '@mui/icons-material/Send';
import { Button, CssBaseline, Grid, Paper, TextField } from '@mui/material';
import Table from '@mui/material/Table';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';

const theme = createTheme();

function ListagemTecnico() {
  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    console.log({
      password: data.get('Senha'),
      confirmPassword: data.get('Confirmar_senha'),
    });
  };


  const rows = {
    primeiro_nome: '',
    sobrenome: '',
    usuario: '',
  }
  return (

    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Container component="main" alignItems="center" md={7}>
        <Box
          style={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: 'primary.main' }}>
            <FindInPageIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Listagem de Serviços
          </Typography>
          <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 3 }}>
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  name="find"
                  label="Digite o Nome do Usuário, Setor ou Cliente"
                  type="text"
                  id="find"/>
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
              Buscar
            </Button>
        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 650 }} size="small" aria-label="a dense table">
            <TableHead>
              <TableRow>
                <TableCell align="right">Nome</TableCell>
                <TableCell align="right">Sobrenome</TableCell>
                <TableCell align="right">Usuário</TableCell>
              </TableRow>
            </TableHead>
            {/* <TableBody>
              {rows.map((row) => (
                <TableRow 
                  key={row.usuario}
                  sx={{ '&:last-child td, &:last-child th': {border: 0} }}>
                    <TableCell align="right">{row.primeiro_nome}</TableCell>
                    <TableCell align="right">{row.sobrenome}</TableCell>
                    <TableCell align="right">{row.usuario}</TableCell>
                  </TableRow>
              ))}              
            </TableBody> */}
          </Table>
        </TableContainer>
        </Box>
      </Box>
      </Container>
    </ThemeProvider>
  )
}

export default ListagemTecnico