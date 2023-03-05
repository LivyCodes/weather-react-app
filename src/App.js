import "./styles.css";
import Container from "./Container";
import Titles from "./Titles";
import Conditions from "./Conditions";
import Forecast from "./Forecast";
import Footer from "./Footer";

function App() {
  return (
    <div className="App">
      <div className="container-fluid">
        <div className="card">
          <div className="card-body">
            <h5 className="card-title">WEATHER APP</h5>
            <Container />
            <Titles />
            <Conditions />
            <Forecast />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default App;
