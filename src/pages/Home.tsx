import AreaChart from "../charts/AreaChart";
import Barchart from "../charts/Barchart";
import Linechart from "../charts/Linechart";
import PIechart from "../charts/PIechart";
import RadarChart from "../charts/RaderChart";
import ComposedChart from "../charts/ComposedChart";

const Dashboard = () => {
  return (
    <div className="w-full h-full p-3  overflow-hidden transition-all duration-200 ease-in-out">
      <div className="
        grid gap-4 grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3">
        <AreaChart />
        <Barchart />
        <Linechart />
        <PIechart />
        <RadarChart />
        <ComposedChart />
      </div>
    </div>
  );
};

export default Dashboard;