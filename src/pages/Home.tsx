import  { useState } from "react";

import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";

import AreaChart from "../charts/AreaChart";
import Barchart from "../charts/Barchart"
import Linechart from "../charts/Linechart"
import PIechart from "../charts/PIechart"
import RadarChart from "../charts/RaderChart"
import StackedBarChart from "../charts/StackedBarChart";

const Dashboard = () => {
  const [open, setOpen] = useState(true);

  return (
    <div className="flex">
      {/* Sidebar */}
      <Sidebar open={open} />

      <div className="flex-1 bg-gray-900 min-h-screen">
        {/* Navbar */}
        <Navbar setOpen={setOpen} />

        
        <div className=" p-4 grid gap-2 lg:grid-cols-2 md:grid-cols-1 sm:grid-cols-1 transition-all  duration-200 ease-in-out ">
          <AreaChart />
          <Barchart />
          <Linechart />
          <PIechart />
          <RadarChart />
          <StackedBarChart />
        </div>

      </div>
    </div>
  );
};

export default Dashboard;