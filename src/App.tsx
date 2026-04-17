import { BrowserRouter, Routes, Route } from "react-router-dom";

//  {/* home */}
import HomePage from "./pages/Home";

//   {/* Charts */}
import AreaChart from "./charts/AreaChart";
import Barchart from "./charts/Barchart"
import Linechart from "./charts/Linechart"
import PIechart from "./charts/PIechart"
import RadarChart from "./charts/RaderChart"
import StackedBarChart from "./charts/ComposedChart";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        {/* home */}
        <Route path="/" element={<HomePage />} />

        {/* Charts */}
        <Route path="/areachart" element={<AreaChart />} />
        <Route path="/Barchart" element={<Barchart />} />
        <Route path="/Linechart" element={<Linechart />} />
        <Route path="/PIechart" element={<PIechart />} />
        <Route path="/RadarChart" element={<RadarChart />} />
        <Route path="/StackedBarChart" element={<StackedBarChart />} />


      </Routes>
    </BrowserRouter>
  );
};

export default App;