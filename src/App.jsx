import Home from './Components/Home';
import Navbar from './Components/Navbar';
import { ThemeProvider, createTheme } from '@mui/material';
import SidebarIcons from './Components/SidebarIcons';
import Portfolio from './Components/Portfolio';
import About from './Components/About';
import Experience from './Components/Experience';
import Footer from './Components/Footer';
import { Link, animateScroll as scroll } from "react-scroll";

function App() {
  const theme = createTheme({
    typography: {
      fontFamily: ['Raleway', 'Black 900 Italic'].join(','),
    },
  });

  return (
    <div className="App">
      <ThemeProvider theme={theme}>
        <Navbar />
        <SidebarIcons />
        <Link name="home" smooth={true} duration={500}>
          <Home />
        </Link>
        <Link name="about" smooth={true} duration={500}>
          <About />
        </Link>
        <Link name="portfolio" smooth={true} duration={500}>
          <Portfolio />
        </Link>
        <Link name="experience" smooth={true} duration={500}>
          <Experience />
        </Link>
        <Link name="connect" smooth={true} duration={500}>
          <Footer />
        </Link>
      </ThemeProvider>
    </div>
  );
}

export default App;
