import { BrowserRouter } from "react-router-dom";
import RoutesApp from "./routes";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="max-width">
      <BrowserRouter>
        <Navbar />
        <RoutesApp />
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
