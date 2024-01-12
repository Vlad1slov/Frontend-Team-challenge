import "./App.css";
import { Footer } from "./components/Footer/Footer";
import MediaQuery from "react-responsive";

import Header from "./components/Header/Header";
import MobileHeader from "./components/MobileHeader/MobileHeader";

function App() {
    return (
        <div className="App">
            <MediaQuery minWidth={1280}>
                <Header />
            </MediaQuery>
            <MediaQuery maxWidth={1279}>
                <MobileHeader />
            </MediaQuery>
            <Footer />
        </div>
    );
}

export default App;
