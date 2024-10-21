import "./App.css";
import { useEffect } from 'react';
import { ResumeProvider } from './Context';
import './App.css';
import Header from './components/Layouts/Header';
// import Navbar from './components/Layouts/Navbar';
import Footer from './components/Layouts/Footer';
import Main from './components/Main';
import WebFont from 'webfontloader';

function App() {

  useEffect(() => {
    WebFont.load({
      google: {
        families: ['Pacifico', 'Poppins']
      }
    });
    const handleBeforeUnload = (event) => {
      event.preventDefault();
      event.returnValue = "All your work will get lost. Are you sure you want to refresh?";
    };

    window.addEventListener("beforeunload", handleBeforeUnload);

    return () => {
      window.removeEventListener("beforeunload", handleBeforeUnload);
    };
  }, []);

  return (
    <div style={{backgroundColor: "black"}}>
      <ResumeProvider>
        {/* <Navbar /> */}
        <Header />
        <Main />
        <Footer />
      </ResumeProvider>
    </div>
  );
}

export default App;
