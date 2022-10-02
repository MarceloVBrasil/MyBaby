import "./styles/app.css";
import Paintings from "./components/Paintings";
import Boards from "./components/Boards";
import Header from "./components/Header";

function App() {
  return (
    <>
      <Header />
      <div className="flex-row">
        <Paintings />
        <Boards />
      </div>
    </>
  );
}

export default App;
