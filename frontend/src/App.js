import { ToastContainer } from "react-toastify";
import "./App.css";
import { Routing } from "./Routing";
import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
    <div className="App">
      <Routing/>
      <ToastContainer/>
    </div>
  );
}

export default App;
