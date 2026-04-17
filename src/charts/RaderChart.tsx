import { Radar, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis } from 'recharts';


// #region Sample data
const data = [
  {
    subject: 'Math',
    A: 120,
    B: 110,
    fullMark: 150,
  },
  {
    subject: 'Chinese',
    A: 98,
    B: 130,
    fullMark: 150,
  },
  {
    subject: 'English',
    A: 86,
    B: 130,
    fullMark: 150,
  },
  {
    subject: 'Geography',
    A: 99,
    B: 100,
    fullMark: 150,
  },
  {
    subject: 'Physics',
    A: 85,
    B: 90,
    fullMark: 150,
  },
  {
    subject: 'History',
    A: 65,
    B: 85,
    fullMark: 150,
  },
];

// #endregion
const SimpleRadarChart = () => {
  return (
    <div className="mb-10">
      <h1 className='bg-black text-white max-w-50 text-center m-2 p-2 rounded-lg'>RadarChart</h1>
        <div className="bg-gray-300 max-w-[470px] w-full rounded-lg p-2">
            <RadarChart
              style={{ width: '100%', height: '100%', maxWidth: '500px', maxHeight: '80vh', aspectRatio: 1 }}
              responsive
              outerRadius="80%"
              data={data}
              margin={{
                top: 20,
                left: 20,
                right: 20,
                bottom: 20,
              }}
              >
              <PolarGrid />
              <PolarAngleAxis dataKey="subject" />
              <PolarRadiusAxis />
              <Radar name="Mike" dataKey="A" stroke="#8884d8" fill="#8884d8" fillOpacity={0.6} />
            </RadarChart>
          </div>
    </div>
  );
};

export default SimpleRadarChart;