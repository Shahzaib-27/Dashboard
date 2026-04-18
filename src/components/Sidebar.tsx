import { Link } from "react-router-dom";

type Props = {
  open: boolean;
};

const Sidebar = ({ open }: Props) => {

  const SidebarLinks = [
    { title: "Home", path: "/" },
    { title: "Areachart", path: "/areachart" },
    { title: "Barchart", path: "/barchart" },
    { title: "Composedchart", path: "/composedchart" },
    { title: "Linechart", path: "/linechart" },
    { title: "Piechart", path: "/piechart" },
    { title: "Radarchart", path: "/radarchart" },
  ];

  return (
    <div
      className={`bg-black text-white h-full transition-all duration-200 ease-in-out overflow-auto ${
        open ? "w-70" : "w-0"
      }`}
    >
      {/* Title */}
      <h1 className="text-3xl font-bold p-4 border-b border-gray-700">
        {open ? "Sidebar" : ""}
      </h1>

      {/* Links */}
      <ul className="p-2 space-y-2">
        {SidebarLinks.map((item, index) => (
          <li
            key={index}
            className="rounded-lg hover:bg-white p-2 w-40 hover:text-black transition-all duration-200 
            ease-in-out"
          >
            <Link
              to={item.path}
              className="block p-2"
            >
            <h1 className="text-[20px]">  {open ? item.title : ""}</h1>
            
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Sidebar;