import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

import { BarChartdata } from "../Chartdata.ts";

const BarChartd = () => {
  return (
    <div
      className="relative h-130 w-full overflow-hidden rounded-3xl border border-white/10 
      bg-linear-to-br from-[#171b30] via-[#12172b] to-[#080d22] p-5 text-white 
        shadow-[0_10px_40px_rgba(0,0,0,0.35)]">

      {/* Glow */}
      <div className=" pointer-events-none absolute -right-20 -top-20 h-40 w-40 rounded-full
       bg-cyan-400/10   blur-3xl" />

      <div
        className=" pointer-events-none absolute -bottom-20 -left-20
          h-40 -40 rounded-full bg-purple-500/10 blur-3xl "  />

      {/* Header */}
      <div className="relative z-10 mb-4 flex items-center justify-between">
        <div>
          <p
            className="text-[10px] uppercase  tracking-[0.25em] text-cyan-400" >
            Bar-Chart Activity
          </p>

          <h2 className="mt-1 text-lg font-bold">
            Tickets Overview
          </h2>
        </div>

        <div
          className="rounded-full border border-cyan-400/20 bg-cyan-400/10 px-3
            py-1 text-xs font-semibold text-cyan-400">
          Tickets
        </div>
      </div>

      {/* Chart */}
      <div className="relative z-10 h-99">
        <ResponsiveContainer
          width="100%" height="100%" >
          <BarChart
            data={BarChartdata}
            margin={{
              top: 5,
              right: 10,
              left: -15,
              bottom: 0,
            }}  > 

            <defs>
              <linearGradient
                id="barGradient"
                x1="0"
                y1="0"
                x2="0"
                y2="1"  >

                <stop
                  offset="0%"
                  stopColor="#22d3ee"
                  stopOpacity={1}  />

                <stop
                  offset="100%"
                  stopColor="#6366f1"
                  stopOpacity={0.7} />

              </linearGradient>
            </defs>

            <CartesianGrid
              stroke="#2a3150"
              strokeDasharray="3 3"
              vertical={false}
              opacity={0.5}  />

            <XAxis
              dataKey="day"
              stroke="#7f89a8"
              fontSize={10}
              tickLine={false}
              axisLine={false} />

            <YAxis
              stroke="#7f89a8"
              fontSize={10}
              tickLine={false}
              axisLine={false} />

            <Tooltip
              cursor={{
                fill: "rgba(34,211,238,0.05)",
              }}
              contentStyle={{
                backgroundColor: "#11162a",
                border: "1px solid rgba(255,255,255,0.1)",
                borderRadius: "14px",
                color: "#fff",
                boxShadow: "0 10px 30px rgba(0,0,0,0.4)",
              }}
              labelStyle={{
                color: "#22d3ee",
                fontWeight: 600,
              }}
              itemStyle={{
                color: "#fff",
              }}  />

            <Bar
              dataKey="tickets"
              fill="url(#barGradient)"
              radius={[8, 8, 2, 2]}
              barSize={32} />
              
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default BarChartd;