import MainPanel from "./components/Dashboard/Mainpanel";
import Sidebar from "./components/Dashboard/Sidebar";
import Navbar from "./components/Navbar/Navbar";

function App() {
  return<div>
    <Navbar />
    <div className="flex">
      <Sidebar />
      <MainPanel />
    </div>
  </div>;
}

export default App;
