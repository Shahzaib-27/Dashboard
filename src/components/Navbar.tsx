import { Menu } from "lucide-react";

type Props = {
  setOpen : React.Dispatch<React.SetStateAction<boolean>>;
};

const Navbar = ( { setOpen } :  Props) => {
  return ( 
    <div className="bg-gray-700 text-white shadow p-4 flex justify-between items-center w-full ">
      <h2 className="text-lg font-semibold">Dashboard</h2>

      <Menu
        className="w-6 h-6 cursor-pointer"
        onClick={() => setOpen((prev) => ! prev )}
      />
    </div>
  );
};

export default Navbar;