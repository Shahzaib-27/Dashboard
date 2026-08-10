import {
  ComposedChart,
  Bar,
  Line,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Legend,
} from "recharts";

import { ComposedChartdata } from "../Chartdata.ts";

const Composed_Chart = () => {
  return (
    <div className="w-full rounded-3xl border border-[#252b46] bg-[#111729] p-5 
        shadow-[0_10px_40px_rgba(0,0,0,0.25)]">

      {/* Header */}
      <div className="mb-5">
        <p className="text-xs uppercase tracking-[0.2em] text-cyan-400">
          Composed_Chart Analytics
        </p>

        <h2 className="mt-1 text-xl font-semibold text-white">
          Activity Overview
        </h2>

        <p className="mt-1 text-sm text-[#7f89a8]">
          Created, solved and overall activity
        </p>
      </div>

      {/* Chart */}
      <div className="h-99 w-full">
        <ResponsiveContainer width="100%" height="100%">
          <ComposedChart
            data={ComposedChartdata}
            margin={{
              top: 10,
              right: 10,
              left: -10,
              bottom: 5,
            }}  >

            {/* Gradients */}
            <defs>

              {/* Area Gradient */}
              <linearGradient
                id="activityGradient"
                x1="0"
                y1="0"
                x2="0"
                y2="1"  >

                <stop
                  offset="0%"
                  stopColor="#a855f7"
                  stopOpacity={0.45} />

                <stop
                  offset="50%"
                  stopColor="#a855f7"
                  stopOpacity={0.18}  />

                <stop
                  offset="100%"
                  stopColor="#a855f7"
                  stopOpacity={0}  />
              </linearGradient>

              {/* Bar Gradient */}
              <linearGradient
                id="barGradient"
                x1="0"
                y1="0"
                x2="0"
                y2="1" >

                <stop
                  offset="0%"
                  stopColor="#22d3ee" />

                <stop
                  offset="100%"
                  stopColor="#0891b2"  />

              </linearGradient>

              {/* Line Gradient */}
              <linearGradient
                id="lineGradient"
                x1="0"
                y1="0"
                x2="1"
                y2="0" >

                <stop
                  offset="0%"
                  stopColor="#ec4899"/>

                <stop
                  offset="100%"
                  stopColor="#f472b6"/>
              </linearGradient>

              {/* Line Glow */}
              <filter id="lineGlow">
                <feGaussianBlur
                  stdDeviation="3"
                  result="blur" />

                <feMerge>
                  <feMergeNode in="blur" />
                  <feMergeNode in="SourceGraphic" />
                </feMerge>
              </filter>

            </defs>

            {/* Grid */}
            <CartesianGrid
              stroke="#252c45"
              strokeDasharray="4 4"
              vertical={false} />

            {/* X Axis */}
            <XAxis
              dataKey="month"
              stroke="#68728f"
              fontSize={11}
              tickLine={false}
              axisLine={false}
              tickMargin={10}  />

            {/* Y Axis */}
            <YAxis
              stroke="#68728f"
              fontSize={11}
              tickLine={false}
              axisLine={false}
              width={35}  />

            {/* Tooltip */}
            <Tooltip
              cursor={{
                stroke: "#47516f",
                strokeWidth: 1,
                strokeDasharray: "4 4",
              }}
              contentStyle={{
                backgroundColor: "#0b1020",
                border: "1px solid #303750",
                borderRadius: "14px",
                boxShadow:
                  "0 10px 30px rgba(0,0,0,0.4)",
                padding: "12px 14px",
              }}
              labelStyle={{
                color: "#ffffff",
                fontWeight: 600,
                marginBottom: "6px",
              }}
              itemStyle={{
                color: "#dbe4ff",
                fontSize: "12px",
              }}  />

            {/* Legend */}
              <Legend
                verticalAlign="top"
                align="right"
                height={35}
                iconType="circle"
                wrapperStyle={{
                  fontSize: "11px",
                  color: "#9aa4c2",
                
                }} />

            {/* Activity Area */}
            <Area
              type="monotone"
              dataKey="activity"
              name="Activity"
              fill="url(#activityGradient)"
              stroke="#a855f7"
              strokeWidth={2}
              activeDot={{
                r: 5,
                fill: "#a855f7",
                stroke: "#ffffff",
                strokeWidth: 2,
              }} />

            {/* Created Bars */}
            <Bar
              dataKey="created"
              name="Created"
              barSize={20}
              fill="url(#barGradient)"
              radius={[6, 6, 2, 2]}
              animationDuration={1200} />

            {/* Solved Line */}
            <Line
              type="monotone"
              dataKey="solved"
              name="Solved"
              stroke="url(#lineGradient)"
              strokeWidth={3}
              dot={{
                r: 4,
                fill: "#f472b6",
                stroke: "#111729",
                strokeWidth: 2,
              }}
              activeDot={{
                r: 7,
                fill: "#f472b6",
                stroke: "#ffffff",
                strokeWidth: 2,
              }}
              filter="url(#lineGlow)"
              animationDuration={1400} />

          </ComposedChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default Composed_Chart;