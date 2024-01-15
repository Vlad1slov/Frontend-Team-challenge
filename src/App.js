import "./App.css";
import { Footer } from "./components/Footer/Footer";
import MediaQuery from "react-responsive";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Header from "./components/Header/Header";
import MobileHeader from "./components/MobileHeader/MobileHeader";
import AppRouter from "components/UI/AppRouter";

function App() {
    return (
        <div className="App">
            <Router>
                <MediaQuery minWidth={1280}>
                    <Header />
                </MediaQuery>
                <MediaQuery maxWidth={1279}>
                    <MobileHeader />
                </MediaQuery>
                <Footer />
                <AppRouter />
            </Router>
        </div>
    );
}

export default App;
