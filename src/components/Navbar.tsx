import { Menu } from "lucide-react";

type Props = {
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

const Navbar = ({ setOpen }: Props) => {
  return (
    <div
      className="fixed left-0 top-0 z-100 flex w-full items-center bg-[#1c213a] p-4 text-white shadow ">
      <Menu
        className="h-6 w-6 cursor-pointer"
        onClick={() => setOpen((prev) => !prev)}
      />

      <h1 className="ml-3 text-lg font-semibold">
        Dashboard
      </h1>
    </div>
  );
};

export default Navbar;