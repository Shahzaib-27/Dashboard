import { ComposedChart, Line, Area, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';
import  { ComposedChartdata } from '../Chartdata.ts';

// #endregion
const ComposedChartWithAxisLabels = () => {
  return (
    <div>
      <h1 className='bg-gray-700 text-white max-w-50 text-center p-2 rounded-lg'>
        Composed Chart
       </h1>
 
     <div className='bg-gray-300 max-w-117.5 w-full rounded-lg p-2'>
      <ComposedChart
        style={{ width: '100%', maxWidth: '700px', maxHeight: '70vh', aspectRatio: 1.618 }}
        responsive
        data={ComposedChartdata}
        margin={{
          top: 20,
          right: 0,
          bottom: 0,
          left: 0,
        }}
        >
        <CartesianGrid stroke="#f5f5f5" />
        <XAxis dataKey="name" label={{ value: 'Pages', position: 'insideBottomRight', offset: 0 }} scale="band" />
        <YAxis label={{ value: 'Index', angle: -90, position: 'insideLeft' }} width="auto" />
        <Tooltip />
        <Legend />
        <Area type="monotone" dataKey="amt" fill="#8884d8" stroke="#8884d8" />
        <Bar dataKey="pv" barSize={20} fill="#413ea0" />
        <Line type="monotone" dataKey="uv" stroke="#ff7300" />

      </ComposedChart>
      </div>
    </div>
  );
};

export default ComposedChartWithAxisLabels;