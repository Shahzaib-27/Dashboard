import {BarChart, Bar,XAxis,YAxis, Tooltip, ResponsiveContainer} from "recharts";

const data = [
  { name: "Page A", uv: 4000 },
  { name: "Page B", uv: 3000 },
  { name: "Page C", uv: 2000 },
  { name: "Page D", uv: 2780 },
  { name: "Page E", uv: 1890 },
  { name: "Page F", uv: 2390 },
  { name: "Page G", uv: 3490 },
];

const TinyBarChart = () => {
  return (
    <div className="mb-10">
      <h1 className="bg-black text-white max-w-[200px] text-center m-2 p-2 rounded-lg">
        Bar Chart
      </h1>
      <div className="bg-gray-300 max-w-[470px] w-full rounded-lg p-2">
        <ResponsiveContainer width="100%" height={290}>
          <BarChart data={data}>
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