import { BrowserRouter, Routes, Route } from "react-router-dom";

//  {/* home */}
import HomePage from "./pages/Home";

//   {/* Charts */}
import AreaChart from "./charts/AreaChart";
import Barchart from "./charts/Barchart"
import Linechart from "./charts/Linechart"
import PIechart from "./charts/PIechart"
import RadarChart from "./charts/RaderChart"
import ComposedChart from "./charts/ComposedChart";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        {/* home */}
        <Route path="/" element={<HomePage />} />

        {/* Charts */}
        <Route path="/areachart" element={<AreaChart />} />
        <Route path="/larchart" element={<Barchart />} />
        <Route path="/linechart" element={<Linechart />} />
        <Route path="/pIechart" element={<PIechart />} />
        <Route path="/radarchart" element={<RadarChart />} />
        <Route path="/composedchart" element={<ComposedChart />} />


      </Routes>
    </BrowserRouter>
  );
};

export default App;