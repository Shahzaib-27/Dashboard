import {BarChart, Bar,XAxis,YAxis, Tooltip, ResponsiveContainer} from "recharts"
import  { BarChartdata } from '../Chartdata.ts';

const TinyBarChart = () => {
  return (
    <div className="mb-10">
      <h1 className="bg-gray-700 text-white max-w-50 text-center  p-2 rounded-lg">
        Bar Chart
      </h1>
      <div className="bg-gray-300 max-w-117.5 w-full rounded-lg p-2">
        <ResponsiveContainer width="100%" height={450}>
          <BarChart data={BarChartdata}>
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Bar dataKey="uv" fill="#8884d8" />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default TinyBarChart;