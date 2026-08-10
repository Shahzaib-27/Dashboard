import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from "react";
import { easeIn, easeOut, motion } from "motion/react";

// Pages
import HomePage from "./pages/Home";
import AreaChart from "./charts/AreaChart";
import Barchart from "./charts/Barchart";
import Linechart from "./charts/Linechart";
import PIechart from "./charts/PIechart";
import RadarChart from "./charts/RaderChart";
import ComposedChart from "./charts/ComposedChart";
import Donutchart from "./charts/Donutchart";

// Components
import NavBar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import { Calendar } from "./components/Calendar";
import { Clock } from "./components/clock";
import Footer from "./components/footer";

const App = () => {
  const [open, setOpen] = useState(false);

  return (
    <BrowserRouter>
      <motion.div
        transition={{
          duration: 0.2,
          ease: easeOut,
        }}
        className="min-h-screen bg-[#0d101f]"
      >
        {/* NAVBAR */}
        <NavBar setOpen={setOpen} />

        {/* SIDEBAR */}
        <div
          className="
            fixed
            left-0
            top-15
            z-50
          "
        >
          <Sidebar open={open} />
        </div>

        {/* MAIN CONTENT */}
        <motion.main
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{
            duration: 0.4,
            ease: easeIn,
          }}
          className="
            min-h-screen
            w-full
            overflow-auto
            bg-[#0d101f]
            p-8
            pt-24
          "
        >
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/areachart" element={<AreaChart />} />
            <Route path="/barchart" element={<Barchart />} />
            <Route path="/composedchart" element={<ComposedChart />} />
            <Route path="/linechart" element={<Linechart />} />
            <Route path="/piechart" element={<PIechart />} />
            <Route path="/radarchart" element={<RadarChart />} />
            <Route path="/donutchart" element={<Donutchart />} />
            <Route path="/calendar" element={<Calendar />} />
            <Route path="/clock" element={<Clock />} />
          </Routes>

        </motion.main>
          <Footer />
      </motion.div>
    </BrowserRouter>
  );
};

export default App;