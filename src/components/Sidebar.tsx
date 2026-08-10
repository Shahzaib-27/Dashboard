import { Link, useLocation } from "react-router-dom";
import { easeOut, motion } from "motion/react";
import {
  Home,
  AreaChart,
  BarChart3,
  ChartNoAxesCombined,
  LineChart,
  PieChart,
  Radar,
  CircleDollarSign,
  CalendarDays,Clock
} from "lucide-react";

type Props = {
  open: boolean;
};

const Sidebar = ({ open }: Props) => {
  const location = useLocation();

  const SidebarLinks = [
    { title: "Home", path: "/", icon: Home },
    { title: "Area Chart", path: "/areachart", icon: AreaChart },
    { title: "Bar Chart", path: "/barchart", icon: BarChart3 },
    { title: "Composed Chart",  path: "/composedchart",  icon: ChartNoAxesCombined, },
    { title: "Line Chart", path: "/linechart", icon: LineChart },
    { title: "Pie Chart", path: "/piechart", icon: PieChart },
    { title: "Radar Chart", path: "/radarchart", icon: Radar },
    { title: "Donut Chart", path: "/donutchart", icon: CircleDollarSign },
    { title: "Calendar", path: "/calendar", icon: CalendarDays },
    { title: "Clock", path: "/clock", icon: Clock },
  ];

  return (
    <motion.div
      animate={{
        width: open ? 282 : 0,
      }}
      transition={{
        duration: 0.25,
        ease: easeOut,
      }}
      className="
        h-[calc(100vh-60px)]
        overflow-y-auto
        overflow-x-hidden
        bg-[#080d22]
        text-white
        shadow-xl
      "
    >
      {/* Title */}
      <motion.h1
        initial={{ opacity: 0 }}
        animate={{ opacity: open ? 1 : 0 }}
        transition={{ duration: 0.2 }}
        className="
          border-b
          border-white/10
          px-6
          py-5
          text-2xl
          font-bold
        "
      >
        Sidebar
      </motion.h1>

      {/* Links */}
      <motion.ul className="space-y-4 px-3 py-5">
        {SidebarLinks.map((item, index) => {
          const Icon = item.icon;
          const active = location.pathname === item.path;

          return (
            <motion.li
              key={index}
              whileHover={{
                scale: 1.03,
                x: 4,
              }}
              transition={{
                duration: 0.15,
                ease: easeOut,
              }}
            >
              <Link
                to={item.path}
                className={`
                  flex
                  w-60
                  items-center
                  gap-3
                  rounded-full
                  p-3
                  transition-all
                  duration-200
                  ${
                    active
                      ? "bg-linear-to-r from-blue-500 to-purple-600 text-white shadow-[0_0_15px_rgba(99,102,241,0.5)]"
                      : "bg-white text-black shadow-[0_0_10px_rgba(255,255,255,0.2)] hover:bg-[#0d132e] hover:text-white"
                  }
                `}
              >
                <Icon size={20} />

                <span className="text-[17px] font-semibold">
                  {item.title}
                </span>
              </Link>
            </motion.li>
          );
        })}
      </motion.ul>
    </motion.div>
  );
};

export default Sidebar;