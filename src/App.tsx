import ApiHandler from "./components/ApiHandler.tsx";
import Navbar from "./components/Navbar.tsx";

function App() {
  return (
    <main>
      <Navbar />
      <div>
        <ApiHandler />
      </div>
    </main>
  );
}

export default App;
