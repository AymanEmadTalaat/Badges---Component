import "../styles/App.css";
import Button from "./Button.jsx";

function App() {
  return (
    <>
      <h1>Badges</h1>

      <main>
        <div className="container">
          <h2>Square</h2>

          <Button type="square" variant="grey" className="btn">
            Badge
          </Button>

          <Button type="square" variant="red" className="btn">
            Badge
          </Button>

          <Button type="square" variant="yellow" className="btn">
            Badge
          </Button>

          <Button type="square" variant="green" className="btn">
            Badge
          </Button>

          <Button type="square" variant="blue" className="btn">
            Badge
          </Button>

          <Button type="square" variant="indigo" className="btn">
            Badge
          </Button>

          <Button type="square" variant="purple" className="btn">
            Badge
          </Button>

          <Button type="square" variant="pink" className="btn">
            Badge
          </Button>
        </div>

        <span id="line"></span>

        <div className="container">
          <h2>Pill</h2>

          <Button type="pill" variant="grey" className="btn">
            Badge
          </Button>

          <Button type="pill" variant="red" className="btn">
            Badge
          </Button>

          <Button type="pill" variant="yellow" className="btn">
            Badge
          </Button>

          <Button type="pill" variant="green" className="btn">
            Badge
          </Button>

          <Button type="pill" variant="blue" className="btn">
            Badge
          </Button>

          <Button type="pill" variant="indigo" className="btn">
            Badge
          </Button>

          <Button type="pill" variant="purple" className="btn">
            Badge
          </Button>

          <Button type="pill" variant="pink" className="btn">
            Badge
          </Button>
        </div>
      </main>
    </>
  );
}

export default App;
