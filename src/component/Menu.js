import * as React from 'react';
import { styled, useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import MuiDrawer from '@mui/material/Drawer';
import MuiAppBar from '@mui/material/AppBar';
import { Link } from '@mui/material';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import CssBaseline from '@mui/material/CssBaseline';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import MenuOpenIcon from '@mui/icons-material/MenuOpen';
import AddToHomeScreenIcon from '@mui/icons-material/AddToHomeScreen';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import { Container } from '@mui/system';
import CadastroCliente from './CadastroCliente';
import CadastroSetor from './CadastroSetor';
import CadastroTecnico from './CadastroTecnico';
import Dashboard from './Dashboard';
import AberturaChamado from './AberturaChamado';
import ListagemSetor from './ListagemSetor';
import ListagemServico from './ListagemServico';
import ListagemTecnico from './ListagemTecnico';
import ListagemCliente from './ListagemCliente';


const drawerWidth = 240;

const openedMixin = (theme) => ({
  width: drawerWidth,
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: 'hidden',
});

const closedMixin = (theme) => ({
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  overflowX: 'hidden',
  width: `calc(${theme.spacing(7)} + 1px)`,
  [theme.breakpoints.up('sm')]: {
    width: `calc(${theme.spacing(8)} + 1px)`,
  },
});

const DrawerHeader = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'flex-end',
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
}));

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== 'open',
})(({ theme, open }) => ({
  zIndex: theme.zIndex.drawer + 1,
  transition: theme.transitions.create(['margin', 'width'], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

const Drawer = styled(MuiDrawer, { shouldForwardProp: (prop) => prop !== 'open' })(
  ({ theme, open }) => ({
    width: drawerWidth,
    flexShrink: 0,
    whiteSpace: 'nowrap',
    boxSizing: 'border-box',
    ...(open && {
      ...openedMixin(theme),
      '& .MuiDrawer-paper': openedMixin(theme),
    }),
    ...(!open && {
      ...closedMixin(theme),
      '& .MuiDrawer-paper': closedMixin(theme),
    }),
  }),
);

function Copyright(props) {
  return (
    <Typography variant="body2" color="text.secondary" align="center" {...props}>
      {'Copyright © '}
      <Link color="inherit" href="#">
        Thiago Rocha e Gilmar Prado
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

export default function Menu() {
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);
  const [visivel, setVisivel] = React.useState(1)

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  function seletorDeComponentes() {
    if (visivel === 1) {
        return <Dashboard texto={"Dashboard"} />
    }
    else if (visivel === 2) {
        return <AberturaChamado texto={"Abertura de Chamado."} />
    }
    else if (visivel === 3) {
        return <CadastroSetor texto={"Cadastro de Setor."} /> 
    }
    else if (visivel === 4) {
        return <CadastroTecnico texto={'Cadastro de Técnico'} />
    }
    else if (visivel === 5) {
        return <CadastroCliente texto={'Cadastro de Cliente.'}/>
    }
    else if (visivel === 6) {
        return <ListagemSetor texto={"Listagem de Setor."} />
    }
    else if (visivel === 7) {
        return <ListagemTecnico texto={'Listagem de Técnicos.'} />
    }
    else if (visivel === 8) {
        return <ListagemServico texto={"Listagem de Serviços."} />
    }
    else {
        return <ListagemCliente texto={"Listagem de Clientes"} />
    }
  }

  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <AppBar position="fixed" open={open}>
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            sx={{
              marginRight: 5,
              ...(open && { display: 'none' }),
            }}
          >
            <MenuOpenIcon />
          </IconButton>
          <Typography variant="h5" noWrap component="div">
            BITTS OS
          </Typography>
        </Toolbar>
      </AppBar>
      <Drawer variant="permanent" open={open}>
        <DrawerHeader>
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === 'rtl' ? <ChevronRightIcon /> : <ChevronLeftIcon />}
          </IconButton>
        </DrawerHeader>

        <Divider />
        
        <List>
          <ListItem onClick={() => { setVisivel(1) }} key={1} disablePadding sx={{ display: 'block' }}>
            <ListItemButton sx={{ minHeight: 48, justifyContent: open ? 'initial' : 'center', px: 2.5, }}>
              <ListItemIcon sx={{ minWidth: 0, mr: open ? 3 : 'auto', justifyContent: 'center',}}>
                <AddToHomeScreenIcon fontSize='medium' />
              </ListItemIcon>
              <ListItemText primary={"Dashboard"} sx={{ opacity: open ? 1 : 0 }} />
            </ListItemButton>
          </ListItem>

          <Divider />

          <ListItem onClick={() => { setVisivel(2) }} key={2} disablePadding sx={{ display: 'block' }}>
            <ListItemButton sx={{ minHeight: 48, justifyContent: open ? 'initial' : 'center', px: 2.5, }}>
              <ListItemIcon sx={{ minWidth: 0, mr: open ? 3 : 'auto', justifyContent: 'center',}}>
                <AddToHomeScreenIcon fontSize='medium' />
              </ListItemIcon>
              <ListItemText primary={"Abertura de Chamado"} sx={{ opacity: open ? 1 : 0 }} />
            </ListItemButton>
          </ListItem>

          <Divider />

          <ListItem onClick={() => { setVisivel(3) }} key={3} disablePadding sx={{ display: 'block' }}>
            <ListItemButton sx={{ minHeight: 48, justifyContent: open ? 'initial' : 'center', px: 2.5,}}>
              <ListItemIcon sx={{ minWidth: 0, mr: open ? 3 : 'auto', justifyContent: 'center', }}>
                <AddToHomeScreenIcon fontSize='medium' />
              </ListItemIcon>
              <ListItemText primary={"Cadastro de Setor"} sx={{ opacity: open ? 1 : 0 }} />
            </ListItemButton>
          </ListItem>

          <ListItem onClick={() => { setVisivel(4) }} key={4} disablePadding sx={{ display: 'block' }}>
            <ListItemButton sx={{ minHeight: 48, justifyContent: open ? 'initial' : 'center', px: 2.5, }}>
              <ListItemIcon sx={{ minWidth: 0, mr: open ? 3 : 'auto', justifyContent: 'center',}}>
                <AddToHomeScreenIcon fontSize='medium' />
              </ListItemIcon>
              <ListItemText primary={"Cadastro de Técnico"} sx={{ opacity: open ? 1 : 0 }} />
            </ListItemButton>
          </ListItem>

          <ListItem onClick={() => { setVisivel(5) }} key={5} disablePadding sx={{ display: 'block' }}>
            <ListItemButton sx={{ minHeight: 48, justifyContent: open ? 'initial' : 'center', px: 2.5, }}>
              <ListItemIcon sx={{ minWidth: 0, mr: open ? 3 : 'auto', justifyContent: 'center', }}>
                <AddToHomeScreenIcon fontSize='medium' />
              </ListItemIcon>
              <ListItemText primary={"Cadastro de Cliente"} sx={{ opacity: open ? 1 : 0 }} />
            </ListItemButton>
          </ListItem>

          <Divider />

          <ListItem onClick={() => { setVisivel(6) }} key={6} disablePadding sx={{ display: 'block' }}>
            <ListItemButton sx={{ minHeight: 48, justifyContent: open ? 'initial' : 'center', px: 2.5, }}>
              <ListItemIcon sx={{ minWidth: 0, mr: open ? 3 : 'auto', justifyContent: 'center', }}>
                <AddToHomeScreenIcon fontSize='medium' />
              </ListItemIcon>
              <ListItemText primary={"Listagem de Setor"} sx={{ opacity: open ? 1 : 0 }} />
            </ListItemButton>
          </ListItem>

          <ListItem onClick={() => { setVisivel(7) }} key={7} disablePadding sx={{ display: 'block' }}>
            <ListItemButton sx={{ minHeight: 48, justifyContent: open ? 'initial' : 'center', px: 2.5, }}>
              <ListItemIcon sx={{ minWidth: 0, mr: open ? 3 : 'auto', justifyContent: 'center', }}>
                <AddToHomeScreenIcon fontSize='medium' />
              </ListItemIcon>
              <ListItemText primary={"Listagem de Técnicos"} sx={{ opacity: open ? 1 : 0 }} />
            </ListItemButton>
          </ListItem>

          <ListItem onClick={() => { setVisivel(8) }} key={8} disablePadding sx={{ display: 'block' }}>
            <ListItemButton sx={{ minHeight: 48, justifyContent: open ? 'initial' : 'center', px: 2.5, }}>
              <ListItemIcon sx={{ minWidth: 0, mr: open ? 3 : 'auto', justifyContent: 'center', }}>
                <AddToHomeScreenIcon fontSize='medium' />
              </ListItemIcon>
              <ListItemText primary={"Listagem de Serviços"} sx={{ opacity: open ? 1 : 0 }} />
            </ListItemButton>
          </ListItem>

          <ListItem onClick={() => { setVisivel(9) }} key={9} disablePadding sx={{ display: 'block' }}>
            <ListItemButton sx={{ minHeight: 48, justifyContent: open ? 'initial' : 'center', px: 2.5, }}>
              <ListItemIcon sx={{ minWidth: 0, mr: open ? 3 : 'auto', justifyContent: 'center', }}>
                <AddToHomeScreenIcon fontSize='medium' />
              </ListItemIcon>
              <ListItemText primary={"Listagem de Clientes"} sx={{ opacity: open ? 1 : 0 }} />
            </ListItemButton>
          </ListItem>
        </List>
        <Divider />
      </Drawer>
      <Box  sx={{ flexgrow: 1, p: 3 }}
       style={{
        display: 'block',
        justifyContent: 'center',
        position: 'relative',
        left: '25%'

       }}>
        <Box>
        <DrawerHeader />
        <Container maxWidth="sm">
            {seletorDeComponentes()} 
        </Container>
        <Copyright sx={{ mt: 5 }} />
        </Box>
      </Box>
    </Box>
  );
}
