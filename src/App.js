import "./App.css";
import { useEffect } from "react";
import { ResumeProvider } from "./Context";
import "./App.css";
import Header from "./components/Layouts/Header";
import Footer from "./components/Layouts/Footer";
import Main from "./components/Main";
import MobileNotice from "./components/MobileNotice";
import WebFont from "webfontloader";

function App() {
  useEffect(() => {
    WebFont.load({
      google: {
        families: ["Pacifico", "Poppins"],
      },
    });
    const handleBeforeUnload = (event) => {
      // Only show warning if user is not authenticated
      const token = localStorage.getItem("token");
      if (!token) {
        event.preventDefault();
        event.returnValue =
          "Your resume work will be lost. Save your work by creating an account to access it later.";
      }
    };

    window.addEventListener("beforeunload", handleBeforeUnload);

    return () => {
      window.removeEventListener("beforeunload", handleBeforeUnload);
    };
  }, []);

  return (
    <div style={{ backgroundColor: "var(--chakra-colors-darkBg-900)" }}>
      <ResumeProvider>
        <MobileNotice />
        <Header />
        <Main />
        <Footer />
      </ResumeProvider>
    </div>
  );
}

export default App;
