import Button from "@material-ui/core/Button";
import "./Home.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Button variant="contained" color="primary" href="/show-todo">
          Show TODOs
        </Button>
      </header>
    </div>
  );
}

export default App;
