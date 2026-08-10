import AreaChart from "../charts/AreaChart";
import Barchart from "../charts/Barchart";
import Linechart from "../charts/Linechart";
import PIechart from "../charts/PIechart";
import RadarChart from "../charts/RaderChart";
import ComposedChart from "../charts/ComposedChart";
import Donutchart from "../charts/Donutchart";

import { Calendar } from "../components/Calendar";
import { Clock } from "../components/clock";

const Dashboard = () => {
  return (
    
    <div className="w-full p-4 mt-5 space-y-4">

      {/* Clock */}
      <div className="w-full mb-10 grid grid-cols-1 gap-4 lg:grid-cols-2">
        <Clock />
        <Calendar />
      </div>

      {/* Tickets Overview */}
      <div className="w-full">
        <ComposedChart />
      </div>

      {/* Donut + Radar */}
      <div className="grid grid-cols-1 gap-4 lg:grid-cols-2">
        <Donutchart />
        <RadarChart />
      </div>

      {/* Bar Chart */}
      <div className="w-full">
        <Barchart />
      </div>

        <AreaChart />
      {/* Remaining Charts */}
      <div className="grid grid-cols-1 gap-4 lg:grid-cols-2">
        <Linechart />
        <PIechart />
      </div>

      {/* Pie + Calendar */}
      <div className="grid grid-cols-1 gap-4 lg:grid-cols-2 ">
        {/* <Calendar /> */}
      </div>

    </div>
  );
};

export default Dashboard;