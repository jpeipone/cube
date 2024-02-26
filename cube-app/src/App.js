import "./App.css";
import ColorScale from "./colorScale/ColorScale";
import Cube from "./cube/Cube";

function App() {
  return (
    <div className="App">
      <div className="row__24__colors">
        <h1 className="header__24">24h</h1>
        <ColorScale />
      </div>
      <div className="cube__crypto">
        <Cube />
      </div>
      <br />

      <div className="terms__of__use">
        <br></br>

        <br></br>
        <br></br>
        <br></br>
        <label className="powered__coinpaprika">Powered by Coinpaprika </label>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <p>
          Not ment for a financial advice or any other form of advice. Do your
          own research, no warranties for the accuracy or updatedness of the
          content.
        </p>
      </div>
    </div>
  );
}

export default App;
