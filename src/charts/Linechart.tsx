import { LineChart, Line, XAxis, YAxis, Tooltip } from "recharts";

const data = [
  { name: "Jan", users: 400 },
  { name: "Feb", users: 800 },
  { name: "Mar", users: 650 },
  { name: "Apr", users: 900 },
  { name: "May", users: 1200 },
  { name: "Jun", users: 1100 },
  { name: "Jul", users: 1500 },
  { name: "Aug", users: 1700 },
  { name: "Sep", users: 1400 },
  { name: "Oct", users: 1800 },
  { name: "Nov", users: 2000 },
  { name: "Dec", users: 2200 },
];

export default function Chart() {
  return (
    <div className="mb-10">
      <h1 className='bg-black text-white max-w-50 text-center m-2 p-2 rounded-lg'>LineChart</h1>
        <div className="bg-gray-300 max-w-[470px] h-79 w-full rounded-lg p-2 h-70">
                <LineChart width={400} height={200} data={data}>
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Line type="monotone" dataKey="users" stroke="#8884d8" />
                </LineChart>
        </div>
    </div>
  );
}