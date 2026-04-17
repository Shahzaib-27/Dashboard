

type Props = {
  open: boolean;
};

const Sidebar = ({ open }: Props) => {

  const SidebarLinks = [
    { title : "Home" , path:"" },
    { title : "AreaChart" , path:"" },
    { title : "Barchart" , path:"" },
    { title : "Barchart" , path:"" },
    { title : "Linechart" , path:"" },
    { title : "AreaChart" , path:"" },
    { title : "PIechart" , path:"" },
    { title : "RadarChart" , path:"" },
    { title : "ComposedChart" , path:"" },
  ]

  return (
    <div
      className={`bg-black text-white w-64 min-h-screen p-5 transition-all duration-200 ease-in-out ${
        open ? "translate-x" : "-translate-x-full"
      }`}
    >
      <h1 className="text-4xl font-bold mb-4 text-center">Sidebar</h1>
      {SidebarLinks.map(( name, index) => (
        <div key={index}>
          <ul>
            <li className="mb-2 cursor-pointer transition-all p-3 duration-200 ease-in-out hover:bg-white hover:text-black rounded-lg ">
              {name.title}
            </li>
          </ul>
        </div>
))}
    </div>
  );
};

export default Sidebar;