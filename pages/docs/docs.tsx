// React Modules
import * as React from 'react';

// Next.js Modules
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link'
import styles from '../../styles/Home.module.css';

// Material Design Components
import Button from '@mui/material/Button';
import DownloadIcon from '@mui/icons-material/Download';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import useScrollTrigger from '@mui/material/useScrollTrigger';
import ArticleIcon from '@mui/icons-material/Article';
import Alert from '@mui/material/Alert';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import AssignmentIcon from '@mui/icons-material/Assignment';
import HomeIcon from '@mui/icons-material/Home';
import NoteIcon from '@mui/icons-material/Note';
import Card from '@mui/material/Card';
import CardAction from '@mui/material/CardActions'

// MUI: theming
let theme = createTheme({
  palette:{
    primary: {
      main: '#ff8a65',
    },
    secondary: {
      main: '#ab47bc',
    },
  },
  shape: {
    borderRadius: 7,
  },
});

theme = createTheme(theme, {
  components: {
    MuiChip: {
      styleOverrides: {
        root: {
          // apply theme's border-radius instead of component's default
          borderRadius: theme.shape.borderRadius,
        },
      },
    },
  },
});

// ElevationScroll for AppBar.
function ElevationScroll(props) { // Well, I'm not sure if this is necessary.
    const { children, window } = props;
    const trigger = useScrollTrigger({
      disableHysteresis: true,
      threshold: 0,
      target: window ? window() : undefined,
    });
  
    return React.cloneElement(children, {
      elevation: trigger ? 4 : 0,
    });
  }

export default function Docs(){
    return (
        <>
        <ThemeProvider theme={theme}>
        <Box sx={{ flexGrow: 1 }}>
    <ElevationScroll>
      <AppBar position="fixed">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            
            <Link href="./../" passHref><HomeIcon /></Link>
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Disbot (v1.1)
          </Typography>
          <Button color="inherit" startIcon={<DownloadIcon />}><a className={styles.link_fix} href="https://github.com/Valenplayer3000/Disbot/archive/refs/tags/Stable-0.2.zip"> Download Disbot</a></Button>
          <Button color="inherit" startIcon={<AssignmentIcon />}>Docs</Button>
          <Link href="../blog/blog" passHref><Button color="inherit" startIcon={<ArticleIcon />}>Blog</Button></Link>
        </Toolbar>
      </AppBar>
    </ElevationScroll>
    </Box>
    <Typography>
    <div className={styles.container}>
        <Head>
          <link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons" />
          <title>Disbot Website</title>
          <meta name="description" content="Made using Next.js" />
          <link rel="icon" href="/favicon.ico" />
          <meta name="viewport" content="width=device-width, initial-scale=2.0" />
        </Head>
        <main className={styles.main}>
            <h1 className={styles.title}>Welcome to <span className={styles.gradtitle}>Disbot</span> Documentation</h1>
            <br></br>
            <Alert severity="info">Dowloads, excract and open <span className={styles.code_small}>documentation.docx</span>files.</Alert>
            <br></br>
            <br></br>
            <Card>
              <CardAction>
                <Button startIcon={<NoteIcon />}><a className={styles.link_fix} href="https://github.com/Valenplayer3000/Disbot-Documentation/archive/refs/tags/v0.1.zip">Download Documentation</a></Button>
              </CardAction>
            </Card>
            <br></br>
        </main>
        <footer className={styles.footer}>
          <a
            className={styles.link_fix}
            href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            Powered by Material UI and {' '}
            <span className={styles.logo}>
              <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
            </span>
          </a>
        </footer>
    </div>
    </Typography></ThemeProvider>
        </>
    )
}