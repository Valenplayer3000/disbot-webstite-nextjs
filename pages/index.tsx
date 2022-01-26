// React Module
import * as React from 'react';
// Next Module
import Head from 'next/head';
import Link from 'next/link'
import Image from 'next/image';
import styles from '../styles/Home.module.css';
// Material UI Module
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Grid from '@mui/material/Grid';
import DownloadIcon from '@mui/icons-material/Download';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import useScrollTrigger from '@mui/material/useScrollTrigger';
import ArticleIcon from '@mui/icons-material/Article';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import AssignmentIcon from '@mui/icons-material/Assignment';
import HomeIcon from '@mui/icons-material/Home';
import IconButton from '@mui/material/IconButton'

let theme = createTheme({
  palette:{
    primary: {
      main: '#e57373',
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
function ElevationScroll(props) {
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



// HTML
export default function Home() {
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
            
            <Link href="#" passHref><HomeIcon /></Link>
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Disbot (v1.1)
          </Typography>
          <Button color="inherit" startIcon={<DownloadIcon />}><a className={styles.link_fix} href="https://github.com/Valenplayer3000/Disbot/archive/refs/tags/Stable-0.2.zip"> Download Disbot</a></Button>
          <Link href="./blog/blog" passHref><Button color="inherit" startIcon={<ArticleIcon />}>Blog</Button></Link>
          <Link href="./docs/docs" passHref><Button color="inherit" startIcon={<AssignmentIcon />}><a>Docs</a></Button></Link>
          
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
          <br></br>
          <h1 className={styles.title}>
            Welcome to <span className={styles.gradtitle}>Disbot</span> Website! :D
          </h1>
          <p className={styles.subtitle}>Download and start coding with our bot with <span className={styles.code}>discord.py</span></p>
          <br></br>


          <Grid container direction="column" justifyContent="center" alignItems="stretch">
            <Card>
              <CardContent>
                <h2>New.</h2>
                <p>The Bot is new, so they are ready to use.</p>
            <br></br>
                <h2>Simple.</h2>
                <p>The bot is made simple. Using python and Discord.py!</p>
            <br></br>
                <h2>Fun.</h2>
                <p>This bot is so Fun. So you can use these joke commands (Like ban and kick commands)</p>
            <br></br>
                <h2>Modify.</h2>
                <p>This bot can be forked thanks to open source.</p>
              </CardContent>
            </Card>
          </Grid>
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
      </div></Typography></ThemeProvider></>
  )
  }
