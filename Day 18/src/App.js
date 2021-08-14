import RowBlocks from "./components/RowBlocks";
import RowBlocks2 from "./components/RowBlocks2";

function App() {
  return (
    <div className="App">
      <div className="board">
        <RowBlocks />
        <RowBlocks2 />
        <RowBlocks />
        <RowBlocks2 />
        <RowBlocks />
        <RowBlocks2 />
        <RowBlocks />
        <RowBlocks2 />
      </div>
    </div>
  );
}

export default App;
