import {
  RadarChart,
  Radar,
  PolarGrid,
  PolarAngleAxis,
  PolarRadiusAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

import { RadarChartdata } from "../Chartdata.ts";

const SimpleRadarChart = () => {

  const skills = [
    {
      name: "Frontend",
      dataKey: "Frontend",
      color: "#22d3ee",
    },
    {
      name: "Backend",
      dataKey: "Backend",
      color: "#a855f7",
    },
    {
      name: "Database",
      dataKey: "Database",
      color: "#f472b6",
    },
    {
      name: "DevOps",
      dataKey: "DevOps",
      color: "#22c55e",
    },
    {
      name: "Testing",
      dataKey: "Testing",
      color: "#facc15",
    },
  ];

  return (
    <div
      className=" group relative overflow-hidden rounded-3xl border border-white/10 bg-linear-to-br
        from-[#151b35] via-[#10162b] to-[#0b1022] p-6
        shadow-[0_20px_60px_rgba(0,0,0,0.35)] transition-all duration-200
        hover:border-purple-400/20 hover:shadow-[0_20px_80px_rgba(168,85,247,0.10)]  ">

      {/*  BACKGROUND GLOW  */}

      <div
        className=" pointer-events-none absolute -right-20 -top-20 h-48 w-48
          rounded-full bg-cyan-400/10 blur-3xl "  />

      <div
        className="  pointer-events-none absolute -bottom-20 -left-20 h-48 w-48
          rounded-full bg-purple-500/10 blur-3xl " />

      {/*  HEADER  */}
      <div
        className="  relative z-10  " >

        <p
          className=" text-[10px] font-semibold uppercase tracking-[0.25em]  text-cyan-400 " >  
           RadarChar Skills Overview
        </p>

        <h2
          className=" mt-1 text-xl font-bold tracking-tight text-white " >
         Performance
        </h2>

        <p
          className=" mt-1 text-xs text-[#7f89a8]"  >
          Technology performance by category
        </p>

      </div>

      {/*  CHART  */}
      <div
        className=" relative mt-2 h-90 w-full" >

        <ResponsiveContainer
          width="100%"
          height="100%"
        >

          <RadarChart
            data={RadarChartdata}
            cx="50%"
            cy="47%"
            outerRadius="68%"
          >

            {/*  GRADIENTS  */}
            <defs>

              {skills.map(
                (skill, index) => (

                  <linearGradient
                    key={skill.name}
                    id={`radarGradient${index}`}
                    x1="0"
                    y1="0"
                    x2="1"
                    y2="1"
                  >

                    <stop
                      offset="0%"
                      stopColor={skill.color}
                      stopOpacity={0.5}
                    />

                    <stop
                      offset="100%"
                      stopColor={skill.color}
                      stopOpacity={0.08}
                    />

                  </linearGradient>

                )
              )}

            </defs>

            {/*  GRID  */}
            <PolarGrid
              gridType="polygon"
              stroke="#303957"
              strokeOpacity={0.8}
              radialLines
            />

            {/*  SKILL NAMES  */}
            <PolarAngleAxis
              dataKey="subject"
              tick={{
                fill: "#cbd5e1",
                fontSize: 11,
                fontWeight: 500,
              }}
              tickLine={false}
            />

            {/*  SCALE  */}
            <PolarRadiusAxis
              angle={90}
              domain={[0, 100]}
              tick={{
                fill: "#64748b",
                fontSize: 9,
              }}
              axisLine={false}
              tickCount={5}
            />

            {/*  RADAR LAYERS  */}
            {skills.map(
              (skill, index) => (

                <Radar
                  key={skill.name}
                  name={skill.name}
                  dataKey={skill.dataKey}
                  stroke={skill.color}
                  fill={`url(#radarGradient${index})`}
                  fillOpacity={0.25}
                  strokeWidth={2}
                  dot={{
                    r: 3,
                    fill: skill.color,
                    stroke: "#11172b",
                    strokeWidth: 2,
                  }}
                  activeDot={{
                    r: 5,
                    fill: skill.color,
                    stroke: "#ffffff",
                    strokeWidth: 2,
                  }}
                />

              )
            )}

            {/*  TOOLTIP  */}           
             <Tooltip
              cursor={false}
              contentStyle={{
                background:
                  "linear-gradient(135deg, #151b34, #0b1022)",
                border: "1px solid #303957",
                borderRadius: "14px",
                boxShadow:
                  "0 15px 40px rgba(0,0,0,0.45)",
                padding: "10px 14px",
              }}
              labelStyle={{
                color: "#ffffff",
                fontWeight: 600,
                marginBottom: "5px",
              }}
              itemStyle={{
                fontSize: "12px",
              }}
            />

          </RadarChart>
        </ResponsiveContainer>
      </div>

      {/*   CUSTOM LEGEND   */}
      <div
        className=" relative z-10 grid grid-cols-2 gap-3 sm:grid-cols-3"    >

        {skills.map(
          (skill) => (

            <div
              key={skill.name}
              className=" group flex items-center gap-2 rounded-xl
                border border-[#252c48] bg-[#151b31]/70 px-3 py-2
                transition-all duration-200 hover:border-[#3b4668]
                hover:bg-[#1b223d] " >

              <span
                className=" h-2.5 w-2.5 rounded-full "
                style={{
                  backgroundColor: skill.color,
                  boxShadow: `0 0 10px ${skill.color}`,
                }}
              />

              <span
                className=" text-[11px] text-[#b7bfd5]" >
                {skill.name}
              </span>
            </div>

          )
        )}

      </div>
    </div>
  );
};

export default SimpleRadarChart;