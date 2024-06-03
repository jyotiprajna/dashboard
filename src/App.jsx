import MainPanel from "./components/Dashboard/Mainpanel";
import Sidebar from "./components/Dashboard/Sidebar";

function App() {
  return <div className="flex">
    <Sidebar/>
    <MainPanel/>
  </div>;
}

export default App;
