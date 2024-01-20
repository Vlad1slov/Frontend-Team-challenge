import "./App.css";
import { Footer } from "./components/Footer/Footer";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Header from "./components/Header/Header";
import AppRouter from "components/UI/AppRouter";

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <AppRouter />
        <Footer />
      </Router>
    </div>
  );
}

export default App;
