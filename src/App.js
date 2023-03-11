import "bootstrap/dist/css/bootstrap.min.css";
import "./styles.css";
import Container from "./Container";
import Titles from "./Titles";
import Footer from "./Footer";

function App() {
  return (
    <div className="App">
      <div className="container-fluid">
        <div className="card">
          <div className="card-body">
            <h5 className="card-title">REACT WEATHER APP</h5>
            <Container defaultCity="Manchester" />
            <Titles />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default App;
