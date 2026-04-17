import { ResponsiveContainer, AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip } from 'recharts';
import  { AreaChartdata } from '../data.ts';

const SimpleAreaChart = () => {
  return (
    <div className="mb-10">
      <h1 className="bg-gray-700 text-white max-w-50 text-center p-2 rounded-lg">
        AreaChart
      </h1>

      <div className="bg-gray-300 max-w-117.5 w-full rounded-lg p-2">
        <ResponsiveContainer width="100%" height={300}>
          <AreaChart
            data={AreaChartdata}
            margin={{ top: 20, right: 0, left: 0, bottom: 0 }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Area type="monotone" dataKey="uv" stroke="#8884d8" fill="#8884d8" />
          </AreaChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default SimpleAreaChart;