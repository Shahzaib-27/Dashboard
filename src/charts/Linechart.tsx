import {
  ComposedChart,
  Line,
  Area,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

import { LineChartdata } from "../Chartdata.ts";

const Line_Bar_Area = () => {
  return (
    <div
      className=" group relative overflow-hidden rounded-3xl border border-white/10 bg-linear-to-br
        from-[#151b35] via-[#10162b] to-[#0b1022] p-6
        shadow-[0_20px_60px_rgba(0,0,0,0.35)] transition-all duration-200
        hover:border-purple-400/20 hover:shadow-[0_20px_80px_rgba(168,85,247,0.10)] " >

      {/*  BACKGROUND GLOW  */}
      <div
        className=" pointer-events-none absolute -right-24 -top-24 h-64 w-64
          rounded-full bg-purple-500/10 blur-3xl  "  />

      <div
        className=" pointer-events-none absolute -bottom-24 -left-24 h-64 w-64
          rounded-full bg-cyan-400/10 blur-3xl  "  />

      {/*  HEADER  */}
      <div
        className="  relative z-10 mb-5 flex items-start justify-between ">
        <div>

          <div className="flex items-center gap-2">
            <span className="  h-2 w-2 rounded-full bg-purple-400
                shadow-[0_0_12px_#a855f7] "/>
              <p className=" text-[10px] font-semibold uppercase tracking-[0.25em]
                  text-purple-400  ">
              Line-area Analytics
              </p>
          </div>

            <h2  className=" mt-2 text-xl font-bold tracking-tight text-white  "  >
              Tickets Overview
            </h2>

            <p
              className="   mt-1 text-xs text-[#7f89a8]  ">
              Created, solved and active tickets
            </p>
        </div>
      </div>

      {/*  CHART  */}
      <div className="relative h-90 w-full">
        <ResponsiveContainer  width="100%"  height="100%"  >
          <ComposedChart
            data={LineChartdata}
            margin={{
              top: 10,
              right: 10,
              left: -20,
              bottom: 5,
            }}
          >

            {/*  GRADIENTS  */}
            <defs>
              {/* Area Gradient */}
              <linearGradient
                id="activityGradient"
                x1="0"
                y1="0"
                x2="0"
                y2="1"
              >

                <stop
                  offset="0%"
                  stopColor="#24C8FF"
                  stopOpacity={0.45}
                />

                <stop
                  offset="50%"
                  stopColor="#24C8FF"
                  stopOpacity={0.15}
                />

                <stop
                  offset="100%"
                  stopColor="#24C8FF"
                  stopOpacity={0}
                />

              </linearGradient>
              {/* Bar Gradient */}
              <linearGradient
                id="barGradient"
                x1="0"
                y1="0"
                x2="0"
                y2="1"
              >

                <stop
                  offset="0%"
                  stopColor="#64748B"
                  stopOpacity={1}
                />

                <stop
                  offset="100%"
                  stopColor="#334155"
                  stopOpacity={0.55}
                />

              </linearGradient>

              {/* Line Gradient */}
              <linearGradient
                id="lineGradient"
                x1="0"
                y1="0"
                x2="1"
                y2="0"
              >

                <stop
                  offset="0%"
                  stopColor="#A78BFA"
                />

                <stop
                  offset="50%"
                  stopColor="#C084FC"
                />

                <stop
                  offset="100%"
                  stopColor="#F0ABFC"
                />

              </linearGradient>

              {/* Line Glow */}
              <filter
                id="lineGlow"
                x="-50%"
                y="-50%"
                width="200%"
                height="200%"
              >

                <feGaussianBlur
                  stdDeviation="2.5"
                  result="blur"
                />

                <feMerge>

                  <feMergeNode
                    in="blur"
                  />

                  <feMergeNode
                    in="SourceGraphic"
                  />

                </feMerge>

              </filter>
            </defs>

            {/*   GRID   */}
            <CartesianGrid
              stroke="#303750"
              strokeOpacity={0.4}
              strokeDasharray="3 5"
              vertical={false}
            />

            {/*   X AXIS   */}
            <XAxis
              dataKey="name"
              stroke="#66708e"
              tick={{
                fill: "#7f89a8",
                fontSize: 10,
              }}
              tickLine={false}
              axisLine={false}
              dy={8}
            />

            {/*   Y AXIS  */}
            <YAxis
              stroke="#66708e"
              width={35}
              tick={{
                fill: "#7f89a8",
                fontSize: 10,
              }}
              tickLine={false}
              axisLine={false}
            />

            {/*   TOOLTIP   */}
            <Tooltip
              cursor={{
                stroke: "#a78bfa",
                strokeWidth: 1,
                strokeDasharray: "4 4",
              }}
              contentStyle={{
                background:
                  "linear-gradient(135deg,#171e38,#0b1022)",
                border:
                  "1px solid rgba(255,255,255,0.12)",
                borderRadius: "14px",
                boxShadow:
                  "0 20px 50px rgba(0,0,0,0.5)",
                padding: "12px 14px",
              }}
              labelStyle={{
                color: "#ffffff",
                fontWeight: 600,
                marginBottom: "7px",
              }}
              itemStyle={{
                fontSize: "12px",
              }}
              formatter={(value, name) => [
                value,
                name === "pv"
                  ? "Created"
                  : name === "uv"
                  ? "Solved"
                  : name === "amt"
                  ? "Activity"
                  : "Tickets",
              ]}
            />

            {/*   AREA   */}
            <Area
              type="monotone"
              dataKey="amt"
              fill="url(#activityGradient)"
              stroke="#24C8FF"
              strokeWidth={2}
              fillOpacity={1}
              dot={false}
              activeDot={{
                r: 5,
                fill: "#24C8FF",
                stroke: "#ffffff",
                strokeWidth: 2,
              }}
              animationDuration={1400}
            />

            {/*  BAR  */}
            <Bar
              dataKey="pv"
              barSize={18}
              fill="url(#barGradient)"
              radius={[6, 6, 2, 2]}
              animationDuration={1000}
            />

            {/*  LINE  */}
            <Line
              type="monotone"
              dataKey="uv"
              stroke="url(#lineGradient)"
              strokeWidth={3}
              filter="url(#lineGlow)"
              dot={{
                r: 3,
                fill: "#A78BFA",
                stroke: "#0b1022",
                strokeWidth: 2,
              }}
              activeDot={{
                r: 6,
                fill: "#C084FC",
                stroke: "#ffffff",
                strokeWidth: 2,
              }}
              animationDuration={1500}
            />

            {/*   LEGEND   */}
            <Legend
              verticalAlign="bottom"
              height={30}
              iconType="circle"
              wrapperStyle={{
                fontSize: "11px",
                color: "#94a3b8",
                paddingTop: "10px",
              }}
              formatter={(value) => {
                if (value === "pv") return "Created";
                if (value === "uv") return "Solved";
                if (value === "amt") return "Activity";
                return value;
              }}
            />

          </ComposedChart>
        </ResponsiveContainer>
      </div>

      {/*   BOTTOM INFO   */}
      <div
        className=" relative z-10 mt-3 flex items-center justify-between
          border-t border-white/5 pt-4  ">

        <div className="flex items-center gap-3">

          <div className="flex items-center gap-1.5">

            <span  className=" h-2 w-2 rounded-full bg-cyan-400
                shadow-[0_0_8px_#22d3ee]  "/>

            <span className="text-[10px] text-[#7f89a8]">
              Activity
            </span>

          </div>

          <div className="flex items-center gap-1.5">

            <span className="h-2 w-2 rounded-full bg-purple-400
                shadow-[0_0_8px_#a855f7]  "/>

            <span className="text-[10px] text-[#7f89a8]">
              Solved
            </span>

          </div>

        </div>

        <span
          className=" text-[10px] font-medium text-[#66708e] "  >
          Real-time overview
        </span>
      </div>
    </div>
  );
};

export default Line_Bar_Area;