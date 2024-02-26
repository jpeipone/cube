import "./App.css";
import Cube from "./cube/Cube";

function App() {
  return (
    <div className="App">
      <h1 className="header__24">24h Crypto</h1>
      <div className="cube__crypto">
        <Cube />
      </div>
      <br />
      <div className="terms__of__use"> Powered by Coinpaprika </div>
    </div>
  );
}

export default App;
