import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from "react";

// Pages
import HomePage from "./pages/Home";
import AreaChart from "./charts/AreaChart";
import Barchart from "./charts/Barchart";
import Linechart from "./charts/Linechart";
import PIechart from "./charts/PIechart";
import RadarChart from "./charts/RaderChart";
import ComposedChart from "./charts/ComposedChart";

// Components
import NavBar from "./components/Navbar";
import Sidebar from "./components/Sidebar";

const App = () => {
  const [open, setOpen] = useState(true);

  return (
    <BrowserRouter>
      
      <div className="flex flex-col h-screen">

        {/* 🔝 Navbar (Top Full Width) */}
        <NavBar setOpen={setOpen} />

        {/* 🔽 Bottom Section */}
        <div className="flex flex-1">

          {/* ⬅️ Sidebar */}
          <div
            className={`transition-all duration-200 ease-in-out  ${
              open ? "w-49" : "w-0"
            }`}
          >
            <Sidebar open={open} />
          </div>

          {/* ➡️ Content */}
          <div className="flex-1 p-4 overflow-auto bg-gray-800">
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/areachart" element={<AreaChart />} />
              <Route path="/barchart" element={<Barchart />} />
              <Route path="/composedchart" element={<ComposedChart />} />
              <Route path="/linechart" element={<Linechart />} />
              <Route path="/piechart" element={<PIechart />} />
              <Route path="/radarchart" element={<RadarChart />} />
            </Routes>
          </div>

        </div>

      </div>

    </BrowserRouter>
  );
};

export default App;