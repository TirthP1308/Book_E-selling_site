import React from "react";
import "./assets/css/style.css";
import { BrowserRouter } from "react-router-dom";
import { ThemeProvider } from "@material-ui/core";
import { theme } from "./utils/theme.jsx";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { MainNavigation } from "./component/MainNavigation/MainNavigation.jsx";
import loader from "./assets/images/loader.gif";
import { Header } from "./component/Header/Header.jsx";
import { Footer } from "./component/Footer/Footer.jsx";
import { AuthWrapper } from "./context/auth";
import { CartWrapper } from "./context/cart";

function App() {
  return (
    <BrowserRouter>
      <AuthWrapper>
        <CartWrapper>
          <ThemeProvider theme={theme}>
            <div className="loader-wrapper">
              <img src={loader} alt="loader" />
            </div>
            <Header />
            <MainNavigation />
            <Footer />
            <ToastContainer />
          </ThemeProvider>
        </CartWrapper>
      </AuthWrapper>
    </BrowserRouter>
  );
}

export default App;

/* {arr.map((item) => {
        return <h1>{item}</h1>
      })} */
