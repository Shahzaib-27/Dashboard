import { Radar, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis } from 'recharts';
import  { RadarChartdata } from '../data.ts';

// #endregion
const SimpleRadarChart = () => {
  return (
    <div className="mb-10">
      <h1 className='bg-gray-700 text-white max-w-50 text-center p-2 rounded-lg'>RadarChart</h1>
        <div className="bg-gray-300 max-w-[470px] w-full rounded-lg p-2">
            <RadarChart
              style={{ width: '100%', height: '100%', maxWidth: '500px', maxHeight: '80vh', 
                aspectRatio: 1 }}
              responsive
              outerRadius="70%"
              data={RadarChartdata}
              margin={{
                top: 20,
                left: 20,
                right: 20,
                bottom: 20,
              }}
              >
              <PolarGrid />
              <PolarAngleAxis dataKey="subject"  />
              <PolarRadiusAxis />
              <Radar name="Mike" dataKey="A" stroke="#8884d8" fill="#8884d8" fillOpacity={0.8} />
            </RadarChart>
          </div>
    </div>
  );
};

export default SimpleRadarChart;