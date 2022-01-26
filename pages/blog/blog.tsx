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
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import HomeIcon from '@mui/icons-material/Home';


// MUI: theming
let theme = createTheme({
  palette:{
    primary: {
      main: '#42a5f5',
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

export default function Blog(){
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
          <Link href="./../docs/docs" passHref><Button color="inherit" startIcon={<AssignmentIcon />}>Docs</Button></Link>
          <Button color="inherit" startIcon={<ArticleIcon />}>Blog</Button>
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
            <h1 className={styles.title}><span className={styles.gradtitle}>Blog</span></h1>
            <p className={styles.subtitle}>Welcome to Blog. (Well, this is a blog)</p>
            <br></br>
            <h3 className={styles.subtitle}>26/1/22</h3>
            <Card>
              <CardContent>
                <Typography variant="h5" component="div">
                  Back to Disbot (From Break)
                </Typography>
                <Typography sx={{ mb: 1.5 }} color="text.secondary">
                            "Finally. It been a long time waiting" 
                    </Typography>
                    <Typography variant="body2">
                        New update was been launched after finally returned from break. Looking forward for now.
                    </Typography>
              </CardContent>
            </Card>
            <br></br>
            <br></br>
            <h3 className={styles.subtitle}>1/20/2022</h3>
            <br></br>
            <Card sx={{ minWidth: 275 }}>
                <CardContent>
                    <Typography variant="h5" component="div">
                            Break from Disbot and working to Disbot Website and StationBot Dashboard.
                    </Typography>
                    <Typography sx={{ mb: 1.5 }} color="text.secondary">
                            Yes, actually.
                    </Typography>
                    <Typography variant="body2">
                    So today, I started working with my websites made using next.js and Material UI (MUI). I&apos;m taking a break from Disbot right now.  I think Ima back from break later.
                    </Typography>
                </CardContent>
             </Card>
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
    </Typography>
        </ThemeProvider>
    </>
    )
}