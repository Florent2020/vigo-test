import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Header from "./components/header/Header";
import Container from "@mui/material/Container";
import HomePage from "./components/home/HomePage";
import AboutPage from "./components/about/AboutPage";
import ContactPage from "./components/contact/ContactPage";
import "./sass/style.scss";
import Footer from "./components/layout/Footer";

function App() {
  return (
    <>
      <div className="App">
        <div className="wrapper">
          <Router>
            <Header />
            <Container>
              <Switch>
                <Route path="/" exact>
                  <HomePage />
                </Route>
                <Route path="/about">
                  <AboutPage />
                </Route>
                <Route path="/contact">
                  <ContactPage />
                </Route>
              </Switch>
            </Container>
          </Router>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default App;
