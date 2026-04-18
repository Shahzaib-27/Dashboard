import { LineChart, Line, XAxis, YAxis, Tooltip  } from "recharts";
import  { LineChartdata } from '../data.ts';

export default function Chart() {
  return (
    <div className="mb-10">
      <h1 className='bg-gray-700 text-white max-w-50 text-center  p-2 rounded-lg'>LineChart</h1>
        <div className="bg-gray-300 max-w-119  w-full rounded-lg p-2 ">
                <LineChart width={380} height={450} data={LineChartdata}>
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                {/* <Area /> */}
                <Line type="monotone" dataKey="users" stroke="#8884d8" fill="#8884d8"/>
                </LineChart>
        </div>
    </div>
  );
}