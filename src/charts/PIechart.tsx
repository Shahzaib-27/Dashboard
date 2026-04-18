import {  PieChart,Pie,Cell,Tooltip,ResponsiveContainer,Legend} from "recharts";
import  { PieChartdata } from '../data.ts';



const PieChartdataCOLORS = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042"];

export default function SimplePieChart() {
  return (
    <div className="mb-10">
      <h1 className='bg-gray-700 text-white max-w-50 text-center  p-2 rounded-lg'>PieChart</h1>
        <div className="bg-gray-300 max-w-117.5   w-full rounded-lg p-2">
          <ResponsiveContainer width="100%" height={450}>
            <PieChart>
              <Pie
                data={PieChartdata}
                cx="50%"
                cy="50%"
                outerRadius={100}
                dataKey="value"
                label
              >
                {PieChartdata.map(( _, index) => (
                  <Cell key={index} fill={PieChartdataCOLORS[index % PieChartdataCOLORS.length]} />
                ))}
              </Pie>
              <Legend/>

              <Tooltip />
            </PieChart>
          </ResponsiveContainer>
        </div>
    </div>
  );
}