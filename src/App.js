import "./App.css";

import MediaQuery from "react-responsive";

import Header from "./components/Header/Header";
import MobileHeader from "./components/MobileHeader/MobileHeader";

function App() {
    return (
        <div>
            <MediaQuery minWidth={1280}>
                <Header />
            </MediaQuery>
            <MediaQuery maxWidth={1279}>
                <MobileHeader />
            </MediaQuery>
        </div>
    );
}

export default App;
